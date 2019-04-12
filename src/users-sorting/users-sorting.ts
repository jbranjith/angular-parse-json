import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSort, MatTableDataSource } from '@angular/material';

export interface User {
  login: string,
  id: number,
  url: string,
  html_url: string,
  type: string,
  site_admin: boolean
}
const USER_DATA: User[] = [
  {
    "login": "mojombo",
    "id": 1,
    "url": "https://api.github.com/users/mojombo",
    "html_url": "https://github.com/mojombo",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "defunkt",
    "id": 2,
    "url": "https://api.github.com/users/defunkt",
    "html_url": "https://github.com/defunkt",
    "type": "User",
    "site_admin": false
  }, {
    "login": "pjhyett",
    "id": 3,
    "url": "https://api.github.com/users/pjhyett",
    "html_url": "https://github.com/pjhyett",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "wycats",
    "id": 4,
    "url": "https://api.github.com/users/wycats",
    "html_url": "https://github.com/wycats",
    "type": "User",
    "site_admin": false
  }];

@Component({
  selector: 'users-sorting',
  styleUrls: ['./users-sorting.css'],
  templateUrl: './users-sorting.html',
})
export class UsersSorting implements OnInit {
  displayedColumns: string[] = ['login', 'id', 'url', 'html_url', 'type'];
  constructor(private http: HttpClient) { }
  public usersArr: User[];
  jsonData = this.http.get('https://api.github.com/users');

  getUsers() {
    return this.jsonData.subscribe((users: User[]): any => {
      this.usersArr = users;
    });
  }
  //dataSource = new MatTableDataSource(this.usersArr);
  dataSource = new MatTableDataSource(USER_DATA);
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}
