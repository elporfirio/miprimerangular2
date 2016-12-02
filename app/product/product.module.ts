import {NgModule} from "@angular/core";
import {ProductDetailcomponent} from "./product-detail.component";
import {StarComponent} from "../shared/star.component";
import {ProductListComponent} from "./product-list.component";
import {ProductFilterPipe} from "./product-filter.pipe";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {ProductDetailGuard} from "./product-guard.service";
import {ProductService} from "./product.service";
import {SharedModule} from "../shared/shared.module";
/**
 * Created by ActinverI on 01/12/16.
 */

@NgModule({
  declarations: [  // Componentes internos del Modulo
    ProductListComponent,
    ProductFilterPipe,
    //StarComponent,
    ProductDetailcomponent
  ],
  imports: [
    //Estos dos se agregan en el Shared Module
    //FormsModule, //se usa para ngModel
    //CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'productos', component: ProductListComponent },
      { path: 'producto/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailcomponent },
    ])
  ],
  providers: [
    ProductService,
    ProductDetailGuard
  ]
})


export class ProductModule{

}
