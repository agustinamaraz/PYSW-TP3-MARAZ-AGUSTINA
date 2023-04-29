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
import { Punto5Component } from './components/punto5/punto5.component';
import { FormsModule } from '@angular/forms';
import { Punto5ListaComponent } from './components/punto5-lista/punto5-lista.component';

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
    PagecComponent,
    Punto5Component,
    Punto5ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
