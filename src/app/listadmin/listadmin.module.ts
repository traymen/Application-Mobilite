import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadminRoutingModule } from './listadmin-routing.module';
import { ListadminComponent } from './listadmin/listadmin.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListadminComponent
  ],
  imports: [
    CommonModule,
    ListadminRoutingModule,
    FormsModule
  ]
})
export class ListadminModule { }
