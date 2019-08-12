import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { StepFivePage } from '../step-five/step-five.page';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.page.html',
  styleUrls: ['./step-four.page.scss'],
})
export class StepFourPage implements OnInit {

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
      component: StepFivePage
    } );
    return modal.present();
  }

  ngOnInit() {
  }

}