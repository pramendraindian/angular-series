import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProductList(): Product[] {
    let products: Product[] = [
      { name: 'Samsung TV 40 Inches', price: 10000 },
      { name: 'Apple IPhone 15', price: 15000 },
      { name: 'Canon Camera', price: 20000 }
    ];
    return products;
  }
}
