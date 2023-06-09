import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'halved',
})
export class HalvedPipe implements PipeTransform {
  transform(value: number): number {
    return value / 2;
  }
}
