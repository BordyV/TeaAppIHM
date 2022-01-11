import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeaListComponent } from './tea-list/tea-list.component';
import { TeaDetailComponent } from './tea-detail/tea-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavbarComponent } from './navbar/navbar.component';


const routes:Routes = [
  {
    path:"",
    component: TeaListComponent
  },
  {
    path:"home",
    component: TeaDetailComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    TeaListComponent,
    TeaDetailComponent,
    NavbarComponent
  ],
  exports: [RouterModule],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),  
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
