import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './users-sorting-model';

@Injectable
export class UsersSortingService {
  constructor(private http: HttpClient) { }

  public getData() {
    return this.http.get<User[]>('https://api.github.com/users');
  }
}