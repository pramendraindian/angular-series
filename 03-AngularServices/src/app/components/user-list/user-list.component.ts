import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUserList();
  }
  loadUserList() {
    this.userService.getUserListCommon().subscribe(
      (result) => { console.log(result) },
      (err) => {
        console.warn(err);
      },
      () => {
        console.warn('Request completed');
      }

    )
  }

}
