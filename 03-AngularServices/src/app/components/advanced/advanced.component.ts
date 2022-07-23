import { Component, OnInit } from '@angular/core';
import { forkJoin, Subject, merge, of, defer, concat, throwError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, filter, tap, takeLast, scan, startWith, mergeMap, finalize, ignoreElements } from 'rxjs/operators';
@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.css']
})
export class AdvancedComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.callInBatch();
  }

 callInBatch() {
    const postIds = [];
    for (let i = 1; i < 501; i++) {
      postIds.push(i);
    }

    while (postIds?.length > 5) {
      const curentBatch = postIds.splice(0, 6)
      this.processSpecificBatch(curentBatch)
    }
    if (postIds?.length > 0) {
      this.processSpecificBatch(postIds);
    }

  }

  processSpecificBatch(postIds: number[]) {
    const result$ = this.getPostDetails(postIds);
    result$.pipe(
      mergeMap(([finalResult, progress]) => merge(
        progress.pipe(
          // tap((value) => {console.log(`${value} completed`)}),
          ignoreElements()
        ),
        finalResult
      ))
    ).subscribe(batchCommentsResponse => {
      // Add to global queue
      console.log(batchCommentsResponse);
    });
  }
  
  
  getPostDetails(userIdsList: any[]) {
    const arrayOfObservables = userIdsList.map((userId, index) => {
      //if (index === 1) return throwError({message: 'Vah-vah!'}); // testin with error
      return this.http.get('https://jsonplaceholder.typicode.com/comments/' + userId)
    }
    )
    return this.forkJoinWithProgress(arrayOfObservables)
  }
  
  
  forkJoinWithProgress(arrayOfObservables: Observable<any>[]) {
    return  defer(() =>  {
      let counter = 0;
      const percent$ = new Subject();
      const modilefiedObservablesList = arrayOfObservables.map(
        (item, index) => item.pipe(
          tap((commentResponse) => {
            //console.log(commentResponse)
          }),
          finalize(() => {
            const percentValue = ++counter * 100 / arrayOfObservables.length;
            percent$.next(percentValue);
          })
        )
      );

      const finalResult$ =  forkJoin(modilefiedObservablesList).pipe(
        tap(() => {
          percent$.next(100);
          percent$.complete();
        }
        ));

      return  of([finalResult$, percent$.asObservable()]);
    })

  }

}
