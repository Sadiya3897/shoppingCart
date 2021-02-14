import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  constructor(
    private fetcData: FetchDataService
  ) { }
  public products: any = [];
  public cartProductList = [];

  ngOnInit(): void {
    this.fetcData.fetchData()
      .then((data) => {
        data = Object.values(data);
        this.products = data[0];
      })
      .catch((error) => {
        console.log("Promise rejected");
      });
  }

  public increment(product) {
    this.fetcData.addToCart(product);
    product.count += 1
  }

  public decrement(product) {
    this.fetcData.removeProduct(product);
    product.count -= 1
  }
}
