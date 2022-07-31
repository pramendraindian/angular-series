import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExternalUserCommonResponse, ExternalUserListResponse, ExternalUserResponse } from '../models/ExternalUserResponses';
import { Observable, of } from 'rxjs';
import { ExternalUser } from '../models/ExternalUser';
import { map,tap,debounceTime,distinctUntilChanged,switchMap,catchError,mergeMap, delay,concatMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }


  getUserList(): Observable<ExternalUserListResponse> {
    return this.http.get<ExternalUserListResponse>('https://reqres.in/api/users?page=2');
  }

  getSingleUser(userId: number): Observable<ExternalUserResponse> {
    return this.http.get<any>(`https://reqres.in/api/users/${userId}`).pipe(
      delay(1000)); // Mimic api call taking 1 second to respond
  }

  getUserListCommon(): Observable<ExternalUserCommonResponse<ExternalUser[]>> {
    return this.http.get<ExternalUserCommonResponse<ExternalUser[]>>('https://reqres.in/api/users/sss?page=2');
  }

  getSingleUserCommon(): Observable<ExternalUserCommonResponse<ExternalUser>> {
    return this.http.get<ExternalUserCommonResponse<ExternalUser>>('https://reqres.in/api/users?page=2');
  }

  addUser() {
    const reqBody = {
      first_name: "Pramendra",
      last_name: "Singh",
      job: 'Architect'
    }

    const customHeader = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Trace_Id': '12345'
    }


    return this.http.post<any>(`https://reqres.in/api/users`, reqBody, { headers: customHeader });
  }

  updateUser(userId: number) {
    const reqBody = {
      id: userId,
      first_name: "Pramendra",
      last_name: "Singh",
      job: 'Architect'
    }
    return this.http.put<any>(`https://reqres.in/api/users/${userId}`, reqBody);
  }

  deleteUser(userId: number) {
    return this.http.delete<any[]>(`https://reqres.in/api/users/${userId}`);
  }

////////////////////////////////////////////////////////////////////////////////////
/// ADVANCED
  searchUserUsingSwitchMap(searchStream:Observable<any>):Observable<any>
  {
   const serachResult= searchStream.pipe(
      tap(emit=>console.log("emitting#"+emit)),
      // map(term => term),
      //startWith('1'),
      debounceTime(500),
      // distinctUntilChanged(),
      switchMap(term => this.getSingleUser(term).pipe(
          //catchError(err => throwError(err))  // This will fail after 1 error
          catchError(err => {return of(err)})
        )
    )
    );
    return serachResult;

  }

  searchUserUsingConcatMap(searchStream:Observable<any>):Observable<any>
  {
   const serachResult= searchStream.pipe(
      tap(emit=>console.log("emitting#"+emit)),
      // map(term => term),
      // startWith('1'),
      debounceTime(1000),
      // distinctUntilChanged(),
      concatMap(term => this.getSingleUser(term).pipe(
          //catchError(err => throwError(err))  // This will fail after 1 error
          catchError(err => {return of(err)})
        )
    )
    );
    return serachResult;

  }
  searchUserUsingMergeMap(searchStream:Observable<any>):Observable<any>
  {
   const serachResult= searchStream.pipe(
      // tap(emit=>console.log("emitting#"+emit)),
      //startWith('1'),
      debounceTime(1000),
      // distinctUntilChanged(),
      mergeMap(term =>this.getSingleUser(term).pipe(
          //catchError(err => throwError(err))  // This will fail after 1 error
          catchError(err => {return of(err)})
        )
    )
    );
    return serachResult;

  }

 
}
