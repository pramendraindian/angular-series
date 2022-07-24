import { Component, OnInit } from '@angular/core';
import { forkJoin, Subject, merge, of, defer, concat, throwError, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, filter, tap, takeLast, scan, startWith, mergeMap, finalize, ignoreElements, catchError, delay } from 'rxjs/operators';
@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.css']
})
export class AdvancedComponent implements OnInit {
  isProcessingCompleted = false;
  posts: unknown[] = [];
  recordCount = 0;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.callInBatch();
  }

  callInBatch() {
    const postIds = [];
    const batchSize = 6;
    this.posts=[];
    for (let i = 1; i < 510; i++) {
      postIds.push(i);
    }
    this.recordCount = postIds.length;
    let batchNo = 0;
    while (postIds?.length > 0) {
      batchNo++;
      const curentBatchSet = postIds.splice(0, batchSize)
      // console.warn(`Batch set = ${curentBatchSet}`)
      this.processSpecificBatch(curentBatchSet, batchNo)
    }

  }

  processSpecificBatch(postIds: number[], batchNo: number) {
    const result$ = this.getCommentDetails(postIds, batchNo);
    result$.pipe(
      // OPTIMIZE IT WITH UNIT TESTING
      delay(batchNo === 1 ? 0 : batchNo * 100), // Add a delay to avoid all the calls to be triggered in one go
      mergeMap(([finalResult, progress]) => merge(
        progress.pipe(
          tap((value) => { 
            //console.log(`Batch # ${batchNo} completed ${value} %`) 
          }
            ),
          //ignoreElements() // DON'T EMIT PROGRESS BAR RESULTS
        ),
        finalResult
      ))
    ).subscribe({
      next: batchCommentsResponse => {
        // Add to global queue
        if (Array.isArray(batchCommentsResponse)) {
          this.posts = [...this.posts, ...batchCommentsResponse as unknown[]];
        }
        // console.log(batchCommentsResponse);
        if (this.recordCount === this.posts.length) {
          console.warn('Final Response');
          console.log(this.posts);
        }

      },
      error: err => {
        console.warn(`Error: ${err.status}`);
      },
      complete:()=> {
        console.warn(`Copleted records ${this.posts.length}`);

      },



    });
  }


  getCommentDetails(userIdsList: any[], batchNo: number) {
    const requestList = userIdsList.map((userId, index) => {
      // if (index === 1) return of({message: 'Error Occured!'}); // testin with error
      return this.http.get('https://jsonplaceholder.typicode.com/comments/' + userId).pipe(
        //************************* Error Handling in fork Join****************************/
        // DO ERROR HANDLING AT THE INDIDUAL API CALL
        //// This is very very important to catch error to avoid killing observabel
        catchError(err => of({ id: userId, isError: true, error: err })),

      );
    }
    )
    return this.forkJoinWithProgress(requestList, batchNo);
  }


  forkJoinWithProgress(requestList: Observable<any>[], batchNo: number) {
    return defer(() => {
      let counter = 0;
      const percentProgres$ = new Subject();
      const requestListWithProgress = requestList.map( // hookup progress indicator with each request
        (item, index) => item.pipe(
          tap((commentResponse) => {
            //console.log(commentResponse)
          }),
          finalize(() => {
            const percentValue = ++counter * 100 / requestList.length;
            percentProgres$.next(percentValue);
          })
        )
      );

      const finalResult$ = forkJoin(requestListWithProgress).pipe(
        tap(() => {
          percentProgres$.next(100);
          percentProgres$.complete();
        }
        )
      );

      return of([finalResult$, percentProgres$.asObservable()]);
    })

  }

}
