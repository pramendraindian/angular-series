import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExternalUser } from 'src/app/models/ExternalUser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-concat-map-example',
  templateUrl: './concat-map-example.component.html',
  styleUrls: ['./concat-map-example.component.css']
})
export class ConcatMapExampleComponent implements OnInit {
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
  emitValues()
  {
    this.myForm.controls['searchTerm'].setValue(1);
    this.myForm.controls['searchTerm'].setValue(2);
    this.myForm.controls['searchTerm'].setValue(3);
    this.myForm.controls['searchTerm'].setValue(4);
    this.myForm.controls['searchTerm'].setValue(5);
    this.myForm.controls['searchTerm'].setValue(6);
    this.myForm.controls['searchTerm'].setValue(7);
    this.myForm.controls['searchTerm'].setValue(8);
    this.myForm.controls['searchTerm'].setValue(9);
    this.myForm.controls['searchTerm'].setValue(10);
    this.myForm.controls['searchTerm'].setValue(11);
    this.myForm.controls['searchTerm'].setValue(12);
  }
  lazySearch() {
    const observable1=this.myForm.controls['searchTerm'].valueChanges;
    observable1.subscribe(searchTerm=>{this.isLoading=true;});
    this.userService.searchUserUsingConcatMap(observable1).subscribe(
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
