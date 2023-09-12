import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListcoordonneComponent } from './listcoordonne/listcoordonne.component';

const routes: Routes = [{
  path: '', component: ListcoordonneComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListcoordonneRoutingModule { }
