import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoincePageMainComponent } from './pages/invoince-page-main/invoince-page-main.component';

const routes: Routes = [
  { path: '', redirectTo: 'create-invoice', pathMatch: 'full' },
  { path: 'create-invoice', component: InvoincePageMainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
