import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditProfilePage } from './edit-profile/edit-profile.page';

@Component( {
  selector: `app-profile`,
  templateUrl: `./profile.page.html`,
  styleUrls: [ `./profile.page.scss` ]
} )
export class ProfilePage implements OnInit {

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }



  async editProfile() {
    const modal = await this.modalController.create( {
      component: EditProfilePage
    } );
    return modal.present();
  }

}
