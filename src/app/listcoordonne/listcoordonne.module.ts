import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListcoordonneRoutingModule } from './listcoordonne-routing.module';
import { ListcoordonneComponent } from './listcoordonne/listcoordonne.component';
import { FormsModule } from '@angular/forms';
import { CoordonneModule } from '../coordonne/coordonne.module';


@NgModule({
  declarations: [
    ListcoordonneComponent
  ],
  imports: [
    CommonModule,
    ListcoordonneRoutingModule,
FormsModule
  ]
})
export class ListcoordonneModule { }
