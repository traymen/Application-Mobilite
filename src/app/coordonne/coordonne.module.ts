import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CoordonneRoutingModule } from './coordonne-routing.module';
import { CoordonneComponent } from './coordonne/coordonne.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CoordonneComponent
  ],
  imports: [
    CommonModule,
    CoordonneRoutingModule,
    ReactiveFormsModule,
    FormsModule


  ]
})
export class CoordonneModule { }
