import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserauthComponent } from './userauth/userauth.component';

const routes: Routes = [{
  path: '', component: UserauthComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserauthRoutingModule { }
