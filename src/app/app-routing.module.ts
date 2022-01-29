import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListLogComponent } from './list-log/list-log.component';
import { AuthGuard } from './shared/auth.guard';
import { StockOutComponent } from './stock-out/stock-out.component';
import { TeaCreateComponent } from './tea-create/tea-create.component';
import { TeaDetailComponent } from './tea-detail/tea-detail.component';
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
    path: "detail/:id",
    component: TeaDetailComponent,
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
  },
  {
    path: "historique",
    component: ListLogComponent,
    canActivate: [AuthGuard]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
