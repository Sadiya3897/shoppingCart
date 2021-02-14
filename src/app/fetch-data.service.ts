import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  public products = [];
  constructor(public httpClient: HttpClient) { }
  private productData = 'http://localhost:8080/assets/productData.json';
  public fetchData() {
    return this.httpClient
      .get(this.productData)
      .toPromise();
  }
  addToCart(product) {
    this.products.push(product);
  }

  getItems() {
    return this.products;
  }
  removeProduct(product) {
    var idx = this.products.indexOf(product);
    if (idx > -1) {
      this.products.splice(idx, 1);
    }
  }
}
