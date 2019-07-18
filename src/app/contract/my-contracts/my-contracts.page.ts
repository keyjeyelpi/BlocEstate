import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewContractPage } from '../view-contract/view-contract.page';

@Component({
  selector: 'app-my-contracts',
  templateUrl: './my-contracts.page.html',
  styleUrls: ['./my-contracts.page.scss'],
})
export class MyContractsPage implements OnInit {

  constructor(public modalController : ModalController ) { }

  public contracts : any = [{ "value" : "Bahay 1"},{ "value" : "Bahay 2"},{ "value" : "Bahay 3"},{ "value" : "Bahay 4"},{ "value" : "Bahay 5"},{ "value" : "Bahay 6"},{ "value" : "Bahay 7"},{ "value" : "Bahay 9"},{ "value" : "Bahay 10"},{ "value" : "Bahay 11"}]

  async showInfo(){
    const modal = await this.modalController.create({
      component : ViewContractPage
    })
    return await modal.present()
  }

  ngOnInit() {
  }

}
