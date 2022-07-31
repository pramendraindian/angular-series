import { Injectable } from '@angular/core';
import { forkJoin, Subject, merge, of, defer, concat, throwError, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, filter, tap, takeLast, scan, startWith, mergeMap, finalize, ignoreElements, catchError, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BulkLoadService {

  constructor(private http: HttpClient) { }
  getCommentDetails(userIdsList: any[], batchNo: number) {
    const requestList = userIdsList.map((userId, index) => {
      // if (index === 1) return of({message: 'Error Occured!'}); // testin with error
      return this.http.get('https://jsonplaceholder.typicode.com/comments/' + userId).pipe(
        //************************* Error Handling in fork Join****************************/
        // DO ERROR HANDLING AT THE INDIDUAL API CALL
        //// This is very very important to catch error to avoid killing observabel
        catchError(err => of({ id: userId, isError: true, error: err }))
             // OPTIMIZE IT WITH UNIT TESTING
 

      );
  });
  // return forkJoin(requestList);
  return forkJoin(requestList);
}


 

}
