import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe<T extends {}> implements PipeTransform {
  transform(list: T[], phrase: string = '', key: string): T[] {
    if (!Array.isArray(list) || !phrase || !key) {
      return list;
    }
    phrase = phrase.toLowerCase();

    return list.filter((item) => Object.values(item).includes(phrase));
  }
}
