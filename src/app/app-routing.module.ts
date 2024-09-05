import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertasComponent } from './alertas/alertas.component';

const routes: Routes = [
  { path: 'alertas/:id', component: AlertasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


