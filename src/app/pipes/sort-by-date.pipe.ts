import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {

  transform(products: Product[], asc?: boolean) {
    return products.sort((a, b) => 
      asc 
      ? a.createdDate.getTime() - b.createdDate.getTime()
      : b.createdDate.getTime() - a.createdDate.getTime()
    );
  }
}
