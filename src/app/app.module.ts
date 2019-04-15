import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from "../lib/material-module";
import { MatNativeDateModule } from '@angular/material';

import { UsersComponent } from '../users/users.component';
import { HelloComponent } from './hello.component';
import { UsersSorting } from '../users-sorting/users-sorting';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule],
  entryComponents: [],
  declarations: [UsersComponent, HelloComponent, UsersSorting],
  bootstrap: [UsersComponent, UsersSorting],
  providers: []
})
export class AppModule { }
