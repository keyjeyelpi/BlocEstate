import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-filter',
  templateUrl: './edit-filter.page.html',
  styleUrls: ['./edit-filter.page.scss'],
})
export class EditFilterPage implements OnInit {

  listType: string = 'sale';
  priceRange: any = { lower: 0, upper: 100000 };
  priceRangeMin: number = 0;
  priceRangeMax: number = 100000;
  currentMin: number;
  currentMax: number;

  constructor(
    public modalController: ModalController
  ) {
    this.currentMin = this.priceRangeMin;
    this.currentMax = this.priceRangeMax;
  }

  ngOnInit() {
  }



  closeModal() {
    this.modalController.dismiss();
  }

  changeRangeValues(priceRange) {
    this.currentMin = priceRange.lower;
    this.currentMax = priceRange.upper;
  }

}
