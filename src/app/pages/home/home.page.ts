import { Component } from '@angular/core';
import * as $ from 'jquery';
import { Globals } from 'src/app/classes/globals';
import { ModalController } from '@ionic/angular';

import { EditFilterPage } from './edit-filter/edit-filter.page';
import { SignupPage } from '../signup/signup.page';
import { PropertyDetailsPage } from '../property-details/property-details.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  properties = [
    {

      imageUrl: `assets/imgs/estate/1.jpg`,
      description: {
        address: `Science City of Muñoz, Nueva Ecija`,
        price: `$ 500,000`
      }
    }, {
      imageUrl: `assets/imgs/estate/2.jpg`,
      description: {
        address: `Tarlac City, Tarlac`,
        price: `$ 750,000`
      }
    }, {
      imageUrl: `assets/imgs/estate/3.jpg`,
      description: {
        address: `Central Luzon, Nueva Ecija`,
        price: `$ 850,000`
      }
    }, {
      imageUrl: `assets/imgs/estate/4.jpg`,
      description: {
        address: `San Antonio, Nueva Ecija`,
        price: `$ 950,000`
      }
    }
  ];

  currentProperty: any = null;
  propertyIdx: number = 0;

  constructor(
    public modalController: ModalController,
    public globals: Globals
  ) {
    this.setCurrentProperty();
  }

  setCurrentProperty() {
    this.currentProperty = this.properties[this.propertyIdx];
  }

  previousProperty() {
    this.animateCard('previous');

    setTimeout(() => {
      if ((this.propertyIdx - 1) >= 0) {
        this.propertyIdx--;
      }
      this.setCurrentProperty();
    }, 750);
  }

  nextProperty() {
    this.animateCard('next');

    setTimeout(() => {
      if ((this.propertyIdx + 1) < this.properties.length) {
        this.propertyIdx++;
      }
      this.setCurrentProperty();
    }, 750);
  }

  animateCard(direction) {
    let animation: string;
    if (direction === `previous`) {
      animation = `slideLeft`;
    } else if (direction === `next`) {
      animation = `slideRight`;
    } else if (direction === `details`) {
      animation = `slideUp`
    }

    $('.bumble-card').addClass('magictime');
    $('.bumble-card').addClass(animation);

    setTimeout(() => {
      $('.bumble-card').removeClass(animation);
    }, 750);
  }

  async editFilter() {
    const modal = await this.modalController.create({
      component: EditFilterPage
    });
    return modal.present();
  }

  async signup() {
    this.globals.toggleBlur();

    const modal = await this.modalController.create({
      component: SignupPage
    });
    return modal.present();
  }

  async propertyDetails(detailsOfProperty) {
    this.animateCard('details');

    const modal = await this.modalController.create({
      component: PropertyDetailsPage,
      componentProps: {
        details: detailsOfProperty
      }
    });

    setTimeout(() => {      
      return modal.present();
    }, 750);

  }

}
