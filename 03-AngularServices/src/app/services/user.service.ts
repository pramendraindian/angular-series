import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExternalUserCommonResponse, ExternalUserListResponse, ExternalUserResponse } from '../models/ExternalUserResponses';
import { Observable } from 'rxjs';
import { ExternalUser } from '../models/ExternalUser';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  getUserList():Observable<ExternalUserListResponse>
  {
    return this.http.get<ExternalUserListResponse>('https://reqres.in/api/users?page=2');
  }

  getSingleUser(userId:number):Observable<ExternalUserResponse>
  {
    return this.http.get<any>(`https://reqres.in/api/users/${userId}`);
  }

  getUserListCommon():Observable<ExternalUserCommonResponse<ExternalUser[]>>
  {
    return this.http.get<ExternalUserCommonResponse<ExternalUser[]>>('https://reqres.in/api/users/xx?page=2');
  }

  getSingleUserCommon():Observable<ExternalUserCommonResponse<ExternalUser>>
  {
    return this.http.get<ExternalUserCommonResponse<ExternalUser>>('https://reqres.in/api/users?page=2');
  }

  addUser()
  {
    const reqBody={
      first_name: "Pramendra",
      last_name: "Singh",
      job:'Architect'
    }
    return this.http.post<any>(`https://reqres.in/api/users`,reqBody);
  }

  updateUser(userId:number)
  {
    const reqBody={
      id:userId,
      first_name: "Pramendra",
      last_name: "Singh",
      job:'Architect'
    }
    return this.http.put<any>(`https://reqres.in/api/users/${userId}`,reqBody);
  }

  deleteUser(userId:number)
  {
    return this.http.delete<any[]>(`https://reqres.in/api/users/${userId}`);
  }
}
