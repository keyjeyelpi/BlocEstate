import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-step-five',
  templateUrl: './step-five.page.html',
  styleUrls: ['./step-five.page.scss'],
})
export class StepFivePage implements OnInit {

  constructor(public modalController : ModalController, public navParams : NavParams) { }

  async closeModal() {
  this.modalController.dismiss({
    componentProps: {
      id : this.navParams.data.id
    }
  });
  }

  ngOnInit() {
    console.log( this.navParams.data.id );
  }

}
