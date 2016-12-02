import {Component, OnInit} from "@angular/core";
import {IProducto} from "./product";
import {ActivatedRoute, Router} from "@angular/router";
import {$} from "protractor";
/**
 * Created by ActinverI on 30/11/16.
 */

@Component({
  templateUrl: 'app/product/product-detail.component.html'
})
export class ProductDetailcomponent implements OnInit{
  pageTitle: string = 'detalle de Producto';
  producto: IProducto;

  constructor(private _route: ActivatedRoute,
  private _ruteador: Router){

  }

  ngOnInit(): void{
    let id = +this._route.snapshot.params['id'];
    this.pageTitle += `: ${id}`;
  }

  onBack(): void{
    this._ruteador.navigate(['/productos']);
  }
}
