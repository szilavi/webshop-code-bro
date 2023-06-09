import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'catId',
})
export class CatIdPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 1:
        return 'Action';

      case 2:
        return 'Drama';

      case 3:
        return 'Comedy';

      case 4:
        return 'Romantic';

      case 5:
        return 'Thriller';

      default:
        return 'Unknown';
    }
  }
}
