import { Component } from '@angular/core';
import {ProductService} from "./product/product.service";

@Component({
  selector: 'titulo-app',
  template: `
  <ul>
    <li><a [routerLink]="['/welcome']"> Home </a></li>
    <li><a [routerLink]="['/productos']"> Product List </a></li>
  </ul>
              <router-outlet></router-outlet>`,
  //providers: [ ProductService ]
})
export class AppComponent  {
  titulo: string = 'Angular 2 :)';
}
