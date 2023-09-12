import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListmobuserComponent } from './listmobuser/listmobuser.component';

const routes: Routes = [{
  path: '', component: ListmobuserComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListmobuserRoutingModule { }
