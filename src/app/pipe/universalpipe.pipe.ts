import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'universalpipe',
})
export class UniversalpipePipe implements PipeTransform {
  transform(value: any, field: string, direction: number): any | undefined[] {
    if (!Array.isArray(value)) {
      return value;
    }

    if (direction === 1) {
      value.sort((a: any, b: any) => {
        if (a[field] < b[field]) {
          return -1;
        } else if (a[field] > b[field]) {
          return 1;
        } else {
          return 0;
        }
      });
      return value;
    }

    if (direction === 0) {
      value.sort((a: any, b: any) => {
        if (a[field] > b[field]) {
          return -1;
        } else if (a[field] < b[field]) {
          return 1;
        } else {
          return 0;
        }
      });
      return value;
    }
  }
}
