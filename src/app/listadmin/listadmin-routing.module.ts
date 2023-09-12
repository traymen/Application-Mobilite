import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadminComponent } from './listadmin/listadmin.component';

const routes: Routes = [{
  path: '', component: ListadminComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadminRoutingModule { }
