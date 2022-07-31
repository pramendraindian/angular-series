import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExternalUser } from 'src/app/models/ExternalUser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-switch-map-example',
  templateUrl: './switch-map-example.component.html',
  styleUrls: ['./switch-map-example.component.css']
})
export class SwitchMapExampleComponent implements OnInit {
  isLoading=false;
  message='';
  myForm: FormGroup
  user: ExternalUser = {} as ExternalUser;
  users: ExternalUser[] = [];
  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.myForm = this.formBuilder.group({
      searchTerm: ['']
    });

  }

  ngOnInit(): void {
    this.lazySearch();
  }
  lazySearch() {
    const observable1=this.myForm.controls['searchTerm'].valueChanges;
    observable1.subscribe(searchTerm=>{this.isLoading=true;});
    this.userService.searchUserUsingSwitchMap(observable1).subscribe(
      result => {//success
        this.isLoading=false;
        console.warn(result);
        if (result instanceof HttpErrorResponse) {
          this.users = [];
          console.log(result.status)
        }
        else {
          if (result?.data?.length) {
            this.users = [];
            this.users = result?.data;
          }
          else {
            this.users = [];
            this.user = result.data as ExternalUser;
            console.log(this.user);
            this.users.push(this.user);
          }
        }
      }
      , err => { // It will never reach in case of switvhMap
        this.isLoading=false;
        console.log(err);
      },
      () =>// It will never reach in case of switvhMap
      { 
        this.isLoading=false;
        console.log('search complete') 
      }
    );



  }

}
