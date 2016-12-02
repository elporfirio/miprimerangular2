/**
 * Created by ActinverI on 25/11/16.
 */
import {Component, OnInit} from '@angular/core'
import {IProducto} from "./product";
import {ProductService} from "./product.service";

@Component({
  selector: 'app-products',
  moduleId: module.id, //con esto se pueden utilizar rutas relativas
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css']
  // templateUrl: 'app/product/product-list.component.html',
  // styleUrls: ['app/product/product-list.component.css']
})

export class ProductListComponent implements OnInit {
  //private _productService;

  titulo: string = 'Lista de Productos Suprema';
  filtro: string = 'uno';

  // constructor(productService: ProductService) {
  //   this._productService = productService;
  // }

  productos: IProducto[];
  errorMessage: string;

  mostrarColor: boolean = false;

  mostrarColores(): void {
    this.mostrarColor = !this.mostrarColor;
  }

  ngOnInit(): void {
    console.log('In OnInit');
    this._productService.getProducts()
      .subscribe(products => this.productos = products,
        error => this.errorMessage = <any>error);
  }

  onRatingClicked(message: string): void {
    this.titulo = "Product List: " + message;
  }

  constructor(private _productService: ProductService) {

  }
}
