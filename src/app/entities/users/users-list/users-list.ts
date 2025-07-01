import { Component } from '@angular/core';

@Component({
  selector: 'app-users-list',
  imports: [],
  templateUrl: './users-list.html',
  styleUrl: './users-list.sass',
})
export class UsersList {
  protected items: {
    name: string;
    date: string;
    phone: string;
    job: string;
  }[] = [];
}
