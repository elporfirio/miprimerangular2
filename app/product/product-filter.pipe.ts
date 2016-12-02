import {PipeTransform, Pipe} from "@angular/core";
import {IProducto} from "./product";
/**
 * Created by ActinverI on 28/11/16.
 */

@Pipe({
  name: 'productFilter'
})

export class ProductFilterPipe implements PipeTransform {
  transform(value: IProducto[], filterBy: string): IProducto[]{
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

    return filterBy ? value.filter((product: IProducto) => product.nombre.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }
}
