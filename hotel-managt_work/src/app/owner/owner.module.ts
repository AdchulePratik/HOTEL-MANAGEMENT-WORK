import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerlandComponent } from './ownerland/ownerland.component';
import { OwnersigninComponent } from './ownersignin/ownersignin.component';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    OwnerlandComponent,
    OwnersigninComponent,
    OwnersignupComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    MatButtonModule,
  ]
})
export class OwnerModule { }
