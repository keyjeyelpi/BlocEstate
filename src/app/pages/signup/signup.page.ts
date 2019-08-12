import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SigninPage } from '../signin/signin.page';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }



  closeModal() {
    this.modalController.dismiss();
  }

  async signin() {
    this.closeModal();
    const modal = await this.modalController.create( {
      component: SigninPage
    } );
    return modal.present();
  }

}
