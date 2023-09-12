import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserauthRoutingModule } from './userauth-routing.module';
import { UserauthComponent } from './userauth/userauth.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserauthComponent
  ],
  imports: [
    CommonModule,
    UserauthRoutingModule,
    FormsModule

  ]
})
export class UserauthModule { }
