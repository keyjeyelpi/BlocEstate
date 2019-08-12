import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SignupPage } from '../signup/signup.page';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }



  closeModal() {
    this.modalController.dismiss();
  }

  async signup() {
    this.closeModal();
    const modal = await this.modalController.create( {
      component: SignupPage
    } );
    return modal.present();
  }

}
