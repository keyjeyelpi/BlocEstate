import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {
  listType: string = 'sale';
  priceRange: any = { lower: 0, upper: 100000 };
  priceRangeMin: number = 0;
  priceRangeMax: number = 100000;
  currentMin: number;
  currentMax: number;

  constructor() {
    this.currentMin = this.priceRangeMin;
    this.currentMax = this.priceRangeMax;
  }

  changeRangeValues(priceRange) {
    this.currentMin = priceRange.lower;
    this.currentMax = priceRange.upper;
  }

  ngOnInit() {
  }

}
