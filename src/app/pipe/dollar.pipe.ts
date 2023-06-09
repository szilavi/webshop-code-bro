import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'dollar',
})
export class DollarPipe implements PipeTransform {
  transform(value: number | string): string {
    return '$' + value;
  }
}
