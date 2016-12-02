import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {HttpModule} from "@angular/http";
import {WelcomeComponent} from "./welcome/welcome.componen";
import {RouterModule} from "@angular/router";
import {ProductModule} from "./product/product.module";

@NgModule({
  imports: [ //Importa los modulos externos y de Teceros
    BrowserModule,
    HttpModule, //peticiones GET
    ProductModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}, // Esta es par alos errores
    ], {useHash: false}) // para el ruteo
  ],
  declarations: [  // Componentes internos del Modulo
    AppComponent,
    WelcomeComponent
  ],
  //providers: [ ProductDetailGuard ], // Aqui se agregan los servicios compartidos entre modulos internos
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

//platformBrowserDynamic().bootstrapModule(AppComponent);
