import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-footer-page',
  templateUrl: './footer-page.component.html',
  styleUrls: ['./footer-page.component.css']
})
export class FooterPageComponent implements OnInit {
  public products: any = [];
  public length;
  public total;
  public overlayFlag: any = false;
  constructor(
    private fetcData: FetchDataService
  ) { }

  ngOnInit(): void {
  }
  ngDoCheck() {
    this.products = this.fetcData.getItems();
    this.length = this.products.length;
    this.total = 0;
    if (this.length > 0) {
      this.products.forEach(element => {
        this.total = this.total + element.DealAmount
      });
    }
  }
  submit() {
    if (this.total > 0) {
      this.overlayFlag = true;
    }
  }
  close() {
    this.overlayFlag = false;
  }
}
