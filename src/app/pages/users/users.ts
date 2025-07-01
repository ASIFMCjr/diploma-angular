import { Component } from '@angular/core';
import { UsersList } from '../../entities/users/users-list/users-list';
import { UsersDetail } from '../../entities/users/users-detail/users-detail';

@Component({
  selector: 'app-users',
  imports: [UsersList, UsersDetail],
  templateUrl: './users.html',
  styleUrl: './users.sass',
})
export class Users {
  addUser() {
    console.log('we need to open modal');
  }
}
