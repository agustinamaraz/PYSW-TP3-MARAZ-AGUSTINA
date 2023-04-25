import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { MenuComponent } from './components/menu/menu.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { Punto3Component } from './components/punto3/punto3.component';
import { Page1Component } from './components/punto3/page1/page1.component';
import { PageaComponent } from './components/punto3/pagea/pagea.component';
import { PagebComponent } from './components/punto3/pageb/pageb.component';
import { PagecComponent } from './components/punto3/pagec/pagec.component';

@NgModule({
  declarations: [
    AppComponent,
    Punto1Component,
    MenuComponent,
    Punto2Component,
    Punto3Component,
    Page1Component,
    PageaComponent,
    PagebComponent,
    PagecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
