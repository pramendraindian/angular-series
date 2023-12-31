import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class ProductService {


  constructor(private http:HttpClient) { }
  getProductList(): Observable<Product[]> {
   return this.http.get<Product[]>('./assets/products.json');
  }
}
