import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserlandComponent } from './userland/userland.component';
import { UsersigninComponent } from './usersignin/usersignin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import {MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    UserlandComponent,
    UsersigninComponent,
    UsersignupComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatButtonModule,
  ]
})
export class UserModule { }
