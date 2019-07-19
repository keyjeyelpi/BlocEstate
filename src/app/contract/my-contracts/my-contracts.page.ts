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

  public contracts : any = 
  [
    { "id" : "1" , "title" : "Bahay 1", "image" : "1.jpg", "cost" : "799999", "maintenance" : "420"},
    { "id" : "2" , "title" : "Bahay 2", "image" : "", "cost" : "899999", "maintenance" : "450"},
    { "id" : "3" , "title" : "Bahay 3", "image" : "", "cost" : "699999", "maintenance" : "410"},
    { "id" : "4" , "title" : "Bahay 4", "image" : "", "cost" : "599999", "maintenance" : "320"}
    ]

  async showInfo( contract_information ){
    const modal = await this.modalController.create({
      component : ViewContractPage,
      componentProps : {
        contract_information : contract_information
      }
    })
    return await modal.present()
  }

  ngOnInit() {
  }

}
