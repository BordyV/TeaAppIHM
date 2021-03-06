import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeaListComponent } from './tea-list/tea-list.component';
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
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackBarComponent } from './shared/snack-bar/snack-bar.component';
import { ListLogComponent } from './list-log/list-log.component';
import { MatListModule } from '@angular/material/list';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { TeaDetailComponent } from './tea-detail/tea-detail.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LogTeaDetailComponent } from './tea-detail/log-tea-detail/log-tea-detail.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DeleteTeaDialogComponent } from './tea-detail/delete-tea-dialog/delete-tea-dialog.component';
import { ModifyTeaDialogComponent } from './tea-detail/modify-tea-dialog/modify-tea-dialog.component';
import { ProfilPageComponent } from './wrapper-auth/profil-page/profil-page.component';
import { ImportTeasDialogComponent } from './wrapper-auth/profil-page/import-teas-dialog/import-teas-dialog.component';
import {MatStepperModule} from '@angular/material/stepper';


registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    TeaListComponent,
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
    TeaFilterComponent,
    SnackBarComponent,
    ListLogComponent,
    TeaDetailComponent,
    LogTeaDetailComponent,
    DeleteTeaDialogComponent,
    ModifyTeaDialogComponent,
    ProfilPageComponent,
    ImportTeasDialogComponent
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
    MatSortModule,
    MatSnackBarModule,
    MatListModule,
    MatProgressBarModule,
    MatDialogModule,
    MatStepperModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'fr' },
    { provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
