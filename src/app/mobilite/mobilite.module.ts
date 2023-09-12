import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobiliteRoutingModule } from './mobilite-routing.module';
import { MobiliteComponent } from './mobilite/mobilite.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MobiliteComponent
  ],
  imports: [
    CommonModule,
    MobiliteRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class MobiliteModule { }
