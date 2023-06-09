import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'universalsearch',
})
export class UniversalsearchPipe implements PipeTransform {
  transform(
    value: any[] | null,
    key: string,
    phrase: string | number | boolean
  ): any[] | null {
    if (!Array.isArray(value) || !key || !phrase) {
      return value;
    }

    phrase = typeof phrase !== 'number' ? ('' + phrase).toLowerCase() : phrase;

    if (key === 'catId') {
      if (phrase === 'action') {
        return value.filter((item) => item['catId'] === 1);
      }
    }

    if (key === 'catId') {
      if (phrase === 'drama') {
        return value.filter((item) => item['catId'] === 2);
      }
    }

    if (key === 'catId') {
      if (phrase === 'comedy') {
        return value.filter((item) => item['catId'] === 3);
      }
    }

    if (key === 'catId') {
      if (phrase === 'romantic') {
        return value.filter((item) => item['catId'] === 4);
      }
    }

    if (key === 'catId') {
      if (phrase === 'thriller') {
        return value.filter((item) => item['catId'] === 5);
      }
    }

    return value.filter((item) => {
      if (typeof item[key] === 'number' && typeof phrase === 'number') {
        return item[key] === phrase;
      }

      return ('' + item[key]).toLowerCase().includes(phrase as string);
    });
  }
}
