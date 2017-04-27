import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainWindowComponent } from "./main-window/main-window.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', component: MainWindowComponent},
  { path: 'signin', component: MainWindowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
