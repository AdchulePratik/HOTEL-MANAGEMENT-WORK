import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminlandComponent } from './adminland/adminland.component';
import { AdminsigninComponent } from './adminsignin/adminsignin.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { AdminsuccessComponent } from './adminsuccess/adminsuccess.component';
import { MatButtonModule } from "@angular/material/button";


@NgModule({
  declarations: [
    AdminlandComponent,
    AdminsigninComponent,
    AdminsignupComponent,
    AdminsuccessComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule,

  ]
})
export class AdminModule { }
