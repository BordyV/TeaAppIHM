import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeaListComponent } from './tea-list/tea-list.component';
import { TeaDetailComponent } from './tea-detail/tea-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarComponent } from './navbar/navbar.component';
import { MatTableModule } from '@angular/material/table';
import { TeaCreateComponent } from './tea-create/tea-create.component';
import { MatPaginatorModule } from '@angular/material/paginator';


const routes: Routes = [
  {
    path: "",
    component: TeaListComponent
  },
  {
    path: "creer",
    component: TeaCreateComponent
  },
  {
    path: "detail",
    component: TeaDetailComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    TeaListComponent,
    TeaDetailComponent,
    NavbarComponent,
    TeaCreateComponent
  ],
  exports: [RouterModule],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
