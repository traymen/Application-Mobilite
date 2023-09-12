import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserregisterModule } from './userregister/userregister.module';
import { UserauthModule } from './userauth/userauth.module';
import { MobiliteComponent } from './mobilite/mobilite/mobilite.component';
import { MobiliteModule } from './mobilite/mobilite.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListmobuserModule } from './listmobuser/listmobuser.module';
import { CoordonneModule } from './coordonne/coordonne.module';
import { ListadminModule } from './listadmin/listadmin.module';
import { ListcoordonneModule } from './listcoordonne/listcoordonne.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { DialogComponent } from './dialog/dialog.component';
import { AdminModule } from './admin/admin.module';
import { SuccesscoordonneComponent } from './successcoordonne/successcoordonne.component';
import { SuccessmobiliteComponent } from './successmobilite/successmobilite.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessDialogComponent,
    ErrorDialogComponent,
    DialogComponent,
    SuccesscoordonneComponent,
    SuccessmobiliteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MobiliteModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ListmobuserModule,
    CoordonneModule,
    ListadminModule,
    ListcoordonneModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
