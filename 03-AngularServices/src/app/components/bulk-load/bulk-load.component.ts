import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs'; 
import { concatMap,mergeMap,tap } from 'rxjs/operators';
import { BulkLoadService } from 'src/app/services/bulk-load.service';

@Component({
  selector: 'app-bulk-load',
  templateUrl: './bulk-load.component.html',
  styleUrls: ['./bulk-load.component.css']
})
export class BulkLoadComponent implements OnInit {
  isProcessing = false;
  progressMessage = '';
  posts: unknown[] = [];
  recordCount = 0;
  startTime = Date.now();
  constructor(private bulkLoad: BulkLoadService) { }

  ngOnInit(): void {
    
  }

  async processInBatch() {
    this.isProcessing = true;
    this.startTime = Date.now();
    const postIds = [];
    const batchSize = 10;
    this.posts = [];
    for (let i = 1; i < 510; i++) {
      postIds.push(i);
    }
    this.recordCount = postIds.length;
    let batchNo = 0;
    while (postIds?.length > 0) {
      batchNo++;
      const curentBatchSet = postIds.splice(0, batchSize)
      // console.warn(`Batch set = ${curentBatchSet}`)
      //this.processSpecificBatchUsingConcatMapAndForkJoin(curentBatchSet, batchNo)
      await this.processSpecificBatchWithPromise(curentBatchSet, batchNo);
      //Synchronize specific call with await on Promise
      console.warn(`Processed batch# ${batchNo}`);
    }

  }


  //Synchronize calls using asyn and await over promise
  async processSpecificBatchWithPromise(postIds: number[], batchNo: number) {
    await this.bulkLoad.getCommentDetails(postIds, batchNo).toPromise().then(
      batchCommentsResponse => {
        // console.log(batchCommentsResponse);
        // Add to global queue
        if (Array.isArray(batchCommentsResponse)) {
          this.posts = [...this.posts, ...batchCommentsResponse as unknown[]];
        }
        // console.log(batchCommentsResponse);
        if (this.recordCount === this.posts.length) {
          this.isProcessing = false;
          console.warn(`Final Response, Total Time=${Date.now() - this.startTime}`);
          console.log(this.posts);
        }
      }).catch(err => {
        console.warn(`Error: ${err.status}`);
      }).finally(() => {
        this.progressMessage = `Loaded ${this.posts.length} records in ${Date.now() - this.startTime} mili seconds...`;
      });


  }


  processSpecificBatchUsingConcatMapAndForkJoin(postIds: number[], batchNo: number) {
    of(batchNo).pipe(
      tap(item=>console.warn(item)),
      concatMap(bNo=>this.bulkLoad.getCommentDetails(postIds,bNo))
    ).subscribe({
      next: batchCommentsResponse => {
        // console.log(batchCommentsResponse);
        // Add to global queue
        if (Array.isArray(batchCommentsResponse)) {
          this.posts = [...this.posts, ...batchCommentsResponse as unknown[]];
        }
        // console.log(batchCommentsResponse);
        if (this.recordCount === this.posts.length) {
          this.isProcessing = false;
          console.warn(`Final Response, Total Time=${Date.now() - this.startTime}`);
          console.log(this.posts);
        }
      },
      error: err => {
        console.warn(`Error: ${err.status}`);
      },
      complete: () => {
        this.progressMessage = `Loaded ${this.posts.length} records in ${Date.now() - this.startTime} mili seconds...`;
        // console.warn(`Completed records ${this.posts.length}`);

      }

    });
  }

}
