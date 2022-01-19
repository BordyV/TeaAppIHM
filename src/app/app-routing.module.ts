import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeaCreateComponent } from './tea-create/tea-create.component';
import { TeaDetailComponent } from './tea-detail/tea-detail.component';
import { TeaListComponent } from './tea-list/tea-list.component';

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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
