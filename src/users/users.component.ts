import { Component, OnInit , ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSort, MatTableDataSource} from '@angular/material';

export interface User {
  login: string,
  id: number,
  url: string,
  html_url: string,
  type: string
}

@Component({
  selector: 'users-app',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  name = 'GitHub Users';

  public users: any;

  constructor(private http: HttpClient) { }

  public ngOnInit(): void {
    this.getUsers().subscribe((users: any): void => {
      this.users = users;
    });
  }

  getUsers() {
    return this.http.get('https://api.github.com/users');
    // return this.http.get('../assets/data.json');
  }
}
