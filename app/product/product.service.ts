/**
 * Created by ActinverI on 30/11/16.
 */

import {Injectable} from "@angular/core";
import {IProducto} from "./product";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()

export class ProductService{
  private _productUrl = 'api/products/products.json';
  constructor(private _http: Http){

  }

  private _handleError(error: Response){
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }

  getProducts(): Observable<IProducto[]>{
    return this._http.get(this._productUrl)
      .map((response: Response) => <IProducto[]> response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this._handleError);
    // return [
    //   {
    //     id: 1,
    //     nombre: 'uno',
    //     codigo: '001',
    //     fechaPublicacion: '',
    //     precio: 99,
    //     descripcion: 'Este es un producto',
    //     calificacion: 3,
    //     imagen: 'http://www.generadormemes.com/media/created/1ze2yf.jpg',
    //     color: 'blue'
    //   },
    //   {
    //     id: 2,
    //     nombre: 'dos',
    //     codigo: '002',
    //     fechaPublicacion: '',
    //     precio: 129,
    //     descripcion: 'Este es otro producto',
    //     calificacion: 2,
    //     imagen: 'http://img.youtube.com/vi/CpoVIW1ykwg/hqdefault.jpg',
    //     color: 'red'
    //   }
    // ]
  }
}
