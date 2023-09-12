import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListmobuserRoutingModule } from './listmobuser-routing.module';
import { ListmobuserComponent } from './listmobuser/listmobuser.component';


@NgModule({
  declarations: [
    ListmobuserComponent
  ],
  imports: [
    CommonModule,
    ListmobuserRoutingModule
  ]
})
export class ListmobuserModule { }
