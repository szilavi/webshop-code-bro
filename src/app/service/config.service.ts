import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  appName: string = 'Video Library';

  searchPhrase$: BehaviorSubject<string> = new BehaviorSubject('');

  menuItems: IMenuItem[] = [
    { text: 'Home', link: '/', icon: 'home' },
    { text: 'Action', link: '/cat01' },
    { text: 'Drama', link: '/cat02' },
    { text: 'Comedy', link: '/cat03' },
    { text: 'Romantic', link: '/cat04' },
    { text: 'Thriller', link: '/cat05' },
    { text: 'Admin', link: '/admin' },
  ];

  searchOptions: any = [
    { key: 'name', title: 'Title' },
    { key: 'price', title: 'Price' },
    { key: 'stock', title: 'Quantity' },
  ];

  adminSearchOptions: any = [
    { key: 'id', title: 'ID' },
    { key: 'catId', title: 'Category' },
    { key: 'name', title: 'Title' },
    { key: 'description', title: 'Description' },
    { key: 'price', title: 'Price' },
    { key: 'stock', title: 'Quantity' },
    { key: 'featured', title: 'Featured' },
    { key: 'active', title: 'Discounted' },
  ];

  catIdList: any = [
    { key: 1, title: 'Action' },
    { key: 2, title: 'Drama' },
    { key: 3, title: 'Comedy' },
    { key: 4, title: 'Romantic' },
    { key: 5, title: 'Thriller' },
  ];

  constructor() {}
}
