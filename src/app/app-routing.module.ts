import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Punto1Component } from './components/punto1/punto1.component';
import { MenuComponent } from './components/menu/menu.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { Punto3Component } from './components/punto3/punto3.component';
import { Page1Component } from './components/punto3/page1/page1.component';
import { PageaComponent } from './components/punto3/pagea/pagea.component';
import { PagebComponent } from './components/punto3/pageb/pageb.component';
import { PagecComponent } from './components/punto3/pagec/pagec.component';
import { Punto5Component } from './components/punto5/punto5.component';
import { Punto5ListaComponent } from './components/punto5-lista/punto5-lista.component';

const routes: Routes = [
  {
    path: 'punto1',
    component: Punto1Component
  },
  {
    path: 'punto2',
    component: Punto2Component
  },

  {
    path: 'punto3',
    component: Punto3Component,
    children:[
      {
        path:'',
        redirectTo:'/punto3/page1',
        pathMatch:'full'
      },
      {
        path:'page1',
        component: Page1Component
      },
      {
        path:'pagea',
        component:PageaComponent
      },
      {
        path:'pageb',
        component: PagebComponent
      },
      {
        path:'pagec',
        component: PagecComponent
      }
    ]
  },
  {
    path:'punto5-lista',
    component:Punto5ListaComponent
  },
  {
    path:'punto5/:id',
    component:Punto5Component
  },
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
