import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobiliteComponent } from './mobilite/mobilite.component';

const routes: Routes = [{
  path: '', component: MobiliteComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobiliteRoutingModule { }
