import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';

import * as $ from 'jquery';
import { Globals } from 'src/app/classes/globals';

import { EditFilterPage } from './edit-filter/edit-filter.page';
import { SignupPage } from '../signup/signup.page';
import { PropertyDetailsPage } from '../property-details/property-details.page';

import { ComingSoonComponent } from '../coming-soon/coming-soon.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  properties: any = [
    {
      id: `1`,
      imageUrl: `assets/imgs/estate/1.jpg`,
      description: {
        address: `Science City of Muñoz, Nueva Ecija`,
        price: `$ 500,000`
      }
    }, {
      id: `2`,
      imageUrl: `assets/imgs/estate/2.jpg`,
      description: {
        address: `Tarlac City, Tarlac`,
        price: `$ 750,000`
      }
    }, {
      id: `3`,
      imageUrl: `assets/imgs/estate/3.jpg`,
      description: {
        address: `Central Luzon, Nueva Ecija`,
        price: `$ 850,000`
      }
    }, {
      id: `4`,
      imageUrl: `assets/imgs/estate/4.jpg`,
      description: {
        address: `San Antonio, Nueva Ecija`,
        price: `$ 950,000`
      }
    }
  ];

  currentProperty: any = null;
  propertyIdx: number = 0;
  propertyLength = 0;

  constructor(
    public modalController: ModalController,
    public globals: Globals,
    public popoverController: PopoverController,
    public router: Router
  ) {
    this.setCurrentProperty();
  }

  setCurrentProperty() {
    this.propertyLength = this.properties.length;
    if (this.propertyLength != 0) {
      this.currentProperty = this.properties[this.propertyIdx];
    } else {
      this.currentProperty = null;
      this.propertyIdx = 0;
    }
  }

  async comingSoon(id) {
    const popover = await this.popoverController.create({
      component: ComingSoonComponent
    })

    popover.onDidDismiss()
      .then((result) => {
      });

    return await popover.present()
  }

  removeCard(id) {
    this.propertyLength = this.properties.length;
    setTimeout(() => {
      this.properties = this.properties.filter(card => (card || {}).id !== id)
      if (this.propertyIdx > 0) {
        this.propertyIdx--;
      }
      this.setCurrentProperty();
    }, 750);
  }

  likeProperty(id) {
    this.animateCard(`like`);

    this.removeCard(id);
  }

  dislikeProperty(id) {
    this.animateCard(`dislike`);

    this.removeCard(id);
  }

  loveProperty(id) {
    this.animateCard(`love`);

    this.removeCard(id);
  }

  previousProperty() {
    if ((this.propertyIdx - 1) >= 0) {
      this.animateCard(`previous`);
      this.propertyIdx--;
    }
    this.setCurrentProperty();
  }

  nextProperty() {
    if ((this.propertyIdx + 1) < this.propertyLength) {
      this.animateCard(`next`);
    }

    setTimeout(() => {
      if ((this.propertyIdx + 1) < this.propertyLength) {
        this.propertyIdx++;
      }
      this.setCurrentProperty();
    }, 750);
  }

  animateCard(direction) {
    let animation: string;
    if (direction === `previous`) {
      animation = `slideLeftReturn`;
    } else if (direction === `next`) {
      animation = `slideLeft`;
    } else if (direction === `details`) {
      animation = `slideUp`
    } else if (direction == `like`) {
      animation = `tinRightOut`
    } else if (direction == `love`) {
      animation = `tinUpOut`
    } else if (direction == `dislike`) {
      animation = `tinLeftOut`
    }

    $('.main-card').addClass('magictime');
    $('.main-card').addClass(animation);

    $('.dummy-card').addClass('next-card');

    setTimeout(() => {
      $('.main-card').removeClass(animation);
    }, 750);

    setTimeout(() => {
      $('.dummy-card').removeClass('next-card');
    }, 1500);
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
        id: detailsOfProperty.id,
        showFab: true
      }
    });

    modal.onDidDismiss()
      .then((result) => {
        if (result.data.componentProps.confirmation == true) {
          this.loveProperty(result.data.componentProps.id);
        }
      });

    setTimeout(() => {
      return modal.present();
    }, 750);

  }

}
