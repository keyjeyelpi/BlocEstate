import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { StepFourPage } from '../step-four/step-four.page';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.page.html',
  styleUrls: ['./step-three.page.scss'],
})
export class StepThreePage implements OnInit {

  constructor(public modalController : ModalController, public navParams : NavParams) { }

  async closeModal() {
    this.modalController.dismiss();
  }

  async nextStep() {
    this.closeModal();
    const modal = await this.modalController.create( {
      componentProps: {
        id : this.navParams.data.id
      },
      component: StepFourPage
    } );
    return modal.present();
  }

  ngOnInit() {
  }

}
