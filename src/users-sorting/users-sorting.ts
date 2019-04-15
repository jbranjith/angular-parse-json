import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSort, MatTableDataSource } from '@angular/material';

import { User } from './user';
import * as UserSortingConst from './users-sorting-constants';
import userDataFromFile from '../assets/github-user-data.json';
import { UsersSortingService } from './users-sorting.service';

@Component({
  selector: 'users-sorting',
  styleUrls: ['./users-sorting.css'],
  templateUrl: './users-sorting.html',
  providers: [UsersSortingService]
})
export class UsersSorting implements OnInit {
  displayedColumns: string[] = ['login', 'id', 'url', 'html_url', 'type'];

  //userDataFromApi: User[];
  dataSource: any;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private http: HttpClient,
    private usersSortingService: UsersSortingService) { }

  ngOnInit() {
    this.getDataFromApi();

    //this.getDataFromConst();

    //this.getDataFromFile();
  }

  getDataFromApi() {
    this.usersSortingService.getUserData()
      .subscribe(
        (result: User[]) => {
          //this.userDataFromApi = result;
          this.dataSource = new MatTableDataSource<User>(result);
          this.dataSource.sort = this.sort;
        }
      );
  }

  getDataFromConst() {
    this.dataSource = new MatTableDataSource(UserSortingConst.userDataFromConst);
    this.dataSource.sort = this.sort;
  }

  getDataFromFile() {
    this.dataSource = new MatTableDataSource(userDataFromFile);
    this.dataSource.sort = this.sort;
  }
}
