import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';
import { StockOutComponent } from './stock-out/stock-out.component';
import { TeaCreateComponent } from './tea-create/tea-create.component';
import { TeaListComponent } from './tea-list/tea-list.component';
import { WrapperAuthComponent } from './wrapper-auth/wrapper-auth.component';

const routes: Routes = [
  {
    path: "",
    component: TeaListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "creer",
    component: TeaCreateComponent,
    canActivate: [AuthGuard]

  },
  {
    path: "auth",
    component: WrapperAuthComponent
  },
  {
    path: "sortirStock",
    component: StockOutComponent,
    canActivate: [AuthGuard]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
