export class Product {
  [propname: string]: any; //ez később fog kelleni, ezt mindig belerakom
  id: number = 0;
  catId: number = 0;
  name: string = '';
  description: string = '';
  image: string = '../assets/images/placeholder.png';
  price: number = 0;
  stock: number = 0;
  featured: boolean = false;
  active: boolean = false;
}
