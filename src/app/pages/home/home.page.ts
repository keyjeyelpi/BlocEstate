import { Component } from '@angular/core';
import * as $ from 'jquery';
import { Globals } from 'src/app/classes/globals';
import { ModalController } from '@ionic/angular';
import { EditFilterPage } from './edit-filter/edit-filter.page';
import { SignupPage } from '../signup/signup.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  properties = [
    {
      imageUrl: `assets/imgs/etc/property-1.jpg`,
      description: {
        address: `Science City of Muñoz, Nueva Ecija`,
        price: `$ 500,000`
      }
    },
    {
      imageUrl: `assets/imgs/etc/property-2.jpg`,
      description: {
        address: `Tarlac City, Tarlac`,
        price: `$ 750,000`
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
    this.currentProperty = this.properties[ this.propertyIdx ];
  }

  previousProperty() {
    this.animateCard('previous');

    setTimeout( () => {
      if ( (this.propertyIdx - 1) >= 0 ) {
        this.propertyIdx--;
      }
      this.setCurrentProperty();
    }, 1000 );
  }

  nextProperty() {
    this.animateCard('next');

    setTimeout( () => {
      if ( (this.propertyIdx + 1) < this.properties.length ) {
        this.propertyIdx++;
      }
      this.setCurrentProperty();
    }, 1000 );
  }

  animateCard( direction ) {
    let animation: string;
    if ( direction === `next` ) {
      animation = `tinLeftOut`;
    } else if ( direction === `previous` ) {
      animation = `tinRightOut`;
    }

    $('.bumble-card').addClass('magictime');
    $('.bumble-card').addClass( animation );

    setTimeout( () => {
      $('.bumble-card').removeClass( animation );
    }, 1000 );
  }

  async editFilter() {
    const modal = await this.modalController.create( {
      component: EditFilterPage
    } );
    return modal.present();
  }

  async signup() {
    this.globals.toggleBlur();

    const modal = await this.modalController.create( {
      component: SignupPage
    } );
    return modal.present();
  }

}
