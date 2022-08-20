import { HttpErrorResponse } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
isProcessing=false;
errorMessage='';



  constructor(private userService: UserService,private route: ActivatedRoute) { }

  ngOnInit(): void {
   console.warn(this.route.snapshot.paramMap.get('id'))

    this.loadUserList();
    // window.addEventListener("beforeunload", this.functionToRun);

 
  }
  
  loadUserList() {
    this.isProcessing=true;
    this.errorMessage='';
    this.userService.getUserListCommon().subscribe(
      (result) => {
        this.isProcessing=false; 
        console.log(result) 
      },
      (err:HttpErrorResponse) => {
        this.isProcessing=false;
        console.warn(err);
        this.errorMessage=`Error #${err.status} . Please contact app support team!`

      },
      () => {
        this.isProcessing=false;
        console.warn('Request completed');
      }

    )
  }

}
