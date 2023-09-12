import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoordonneComponent } from './coordonne/coordonne/coordonne.component';
import { ListcoordonneComponent } from './listcoordonne/listcoordonne/listcoordonne.component';

const routes: Routes = [
{path:'user',loadChildren:()=>import('./userregister/userregister.module').then(m=>m.UserregisterModule)},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },

{ path: '', loadChildren: () => import('./userauth/userauth.module').then(m => m.UserauthModule) },
  { path: 'mobilite', loadChildren: () => import('./mobilite/mobilite.module').then(m => m.MobiliteModule) },
  { path: 'list', loadChildren: () => import('./listmobuser/listmobuser.module').then(m => m.ListmobuserModule) }
,
  { path: 'coordonne/:idMobilite', component: CoordonneComponent },
  { path: 'listadmin', loadChildren: () => import('./listadmin/listadmin.module').then(m => m.ListadminModule)},
  { path: 'listecoordonne/:idMobilite', component: ListcoordonneComponent } 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
