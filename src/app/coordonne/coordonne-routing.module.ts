import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoordonneComponent } from './coordonne/coordonne.component';

const routes: Routes = [{
  path: '', component: CoordonneComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoordonneRoutingModule { }
