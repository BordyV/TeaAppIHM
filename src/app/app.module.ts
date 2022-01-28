import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeaListComponent } from './tea-list/tea-list.component';
import { TeaDetailComponent } from './tea-detail/tea-detail.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarComponent } from './navbar/navbar.component';
import { MatTableModule } from '@angular/material/table';
import { TeaCreateComponent } from './tea-create/tea-create.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { TeaFormComponent } from './tea-create/tea-form/tea-form.component';
import { StockFormComponent } from './tea-create/stock-form/stock-form.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { StockOutComponent } from './stock-out/stock-out.component';
import { WrapperAuthComponent } from './wrapper-auth/wrapper-auth.component';
import { LoginComponent } from './wrapper-auth/login/login.component';
import { LogoutComponent } from './wrapper-auth/logout/logout.component';
import { AuthInterceptor } from './shared/auth.interceptor';
import { InscriptionComponent } from './wrapper-auth/inscription/inscription.component';
import { TableStockComponent } from './table-stock/table-stock.component';
import { TeaFilterComponent } from './tea-list/tea-filter/tea-filter.component';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    AppComponent,
    TeaListComponent,
    TeaDetailComponent,
    NavbarComponent,
    TeaCreateComponent,
    TeaFormComponent,
    StockFormComponent,
    StockOutComponent,
    WrapperAuthComponent,
    LoginComponent,
    LogoutComponent,
    InscriptionComponent,
    TableStockComponent,
    TeaFilterComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSortModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
