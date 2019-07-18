import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-contract',
  templateUrl: './view-contract.page.html',
  styleUrls: ['./view-contract.page.scss'],
})
export class ViewContractPage implements OnInit {

  constructor(public modalController : ModalController) { }

  async close() {
    this.modalController.dismiss()
  }

  ngOnInit() {
  }

}
