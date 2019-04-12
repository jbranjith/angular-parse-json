import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSort, MatTableDataSource } from '@angular/material';

import { User } from './users-sorting-model';
import * as UserSortingConst from './users-sorting-constants';
import userDataFromFile from '../assets/github-user-data.json';

@Component({
  selector: 'users-sorting',
  styleUrls: ['./users-sorting.css'],
  templateUrl: './users-sorting.html',
})
export class UsersSorting implements OnInit {
  displayedColumns: string[] = ['login', 'id', 'url', 'html_url', 'type'];
  userDataFromApi: User[];

  constructor(private http: HttpClient) {
    this.http
      .get<User[]>('https://api.github.com/users')
      .subscribe((res: User[]) => {
        //console.log(res);
        this.userDataFromApi = res;
      });
  }

  // from api
  dataSource = new MatTableDataSource(this.userDataFromApi);

  // from const
  //dataSource = new MatTableDataSource(UserSortingConst.userDataFromConst);

  // from file
  // dataSource = new MatTableDataSource(userDataFromFile);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }



  // OTHER
  public usersArr: User[];
  jsonData = this.http.get('https://api.github.com/users');

  getUsers() {
    return this.jsonData.subscribe((users: User[]): any => {
      this.usersArr = users;
    });
  }
}
