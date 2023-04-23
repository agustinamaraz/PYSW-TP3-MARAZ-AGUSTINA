import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Punto1Component } from './components/punto1/punto1.component';
import { MenuComponent } from './components/menu/menu.component';
import { Punto2Component } from './components/punto2/punto2.component';

const routes: Routes = [
  {
    path: 'punto1',
    component: Punto1Component
  },
  {
    path: 'punto2',
    component: Punto2Component
  },

  // {
  //   path: 'punto3'
  //   component: Punto3Component
  // },
  {
    path:'',
    redirectTo: '/punto1',
    pathMatch: 'full'
  },
  // {
  //   path:'**',
  //   component: PageNotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
