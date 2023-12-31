import { Component, WritableSignal, computed, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/Product';
import { toSignal } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']

})
export class CartComponent implements OnInit {
  productList = signal([] as Product[]);
  // Define a computed value for the total price
  totalPrice = computed(() => {
    return this.productList()?.reduce((acc, curr) => acc + curr.price, 0);
  });

  removeItem(item: Product) {
    // Update the itemList signal by removing the selected item
    this.productList?.set(this.productList()?.filter((product) => product !== item));
  }
  constructor(private productSvc: ProductService) {

  }
  ngOnInit() {
    try {
      this.productSvc.getProductList().subscribe(items => {
        console.warn(items);
        this.productList.set(items);
      });

    } catch (e) {
      console.log(e);
    }
  }
}
