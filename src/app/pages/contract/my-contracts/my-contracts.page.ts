import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { ViewContractPage } from '../view-contract/view-contract.page';
import { StepOnePage } from '../step-one/step-one.page';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-my-contracts',
  templateUrl: './my-contracts.page.html',
  styleUrls: ['./my-contracts.page.scss'],
})
export class MyContractsPage implements OnInit {

  constructor( public modalController: ModalController , public popoverController : PopoverController ) { }

  public paid: any =
    [
      {
        id:  `1`,
        imageUrl: `assets/imgs/estate/1.jpg`,
        description: {
          address: `66 Corusant Way, King West, Toronto`,
          price: `$799,999 - Maintenance Fee $420`
        }
      },
      {
        id:  `2`,
        imageUrl: ``,
        description: {
          address: `66 Corusant Way, King West, Toronto`,
          price: `$799,999 - Maintenance Fee $420`
        }
      },
      {
        id:  `3`,
        imageUrl: ``,
        description: {
          address: `66 Corusant Way, King West, Toronto`,
          price: `$799,999 - Maintenance Fee $420`
        }
      },
      {
        id:  `4`,
        imageUrl: ``,
        description: {
          address: `66 Corusant Way, King West, Toronto`,
          price: `$799,999 - Maintenance Fee $420`
        }
      },
    ]

  public approved: any =
    [
      {
        id:  `5`,
        imageUrl: `assets/imgs/estate/2.jpg`,
        description: {
          address: `66 Corusant Way, King West, Toronto`,
          price: `$799,999 - Maintenance Fee $420`
        }
      },
      {
        id:  `6`,
        imageUrl: `assets/imgs/estate/3.jpg`,
        description: {
          address: `66 Corusant Way, King West, Toronto`,
          price: `$799,999 - Maintenance Fee $420`
        }
      },
      {
        id:  `7`,
        imageUrl: ``,
        description: {
          address: `66 Corusant Way, King West, Toronto`,
          price: `$799,999 - Maintenance Fee $420`
        }
      },
      {
        id:  `8`,
        imageUrl: `assets/imgs/estate/4.jpg`,
        description: {
          address: `66 Corusant Way, King West, Toronto`,
          price: `$799,999 - Maintenance Fee $420`
        }
      },
    ]

  public pendings: any =
    [
      {
        id:  `9`,
        imageUrl: `assets/imgs/estate/5.jpg`,
        description: {
          address: `66 Corusant Way, King West, Toronto`,
          price: `$799,999 - Maintenance Fee $420`
        }
      },
      {
        id:  `10`,
        imageUrl: `assets/imgs/estate/6.jpg`,
        description: {
          address: `66 Corusant Way, King West, Toronto`,
          price: `$799,999 - Maintenance Fee $420`
        }
      },
      {
        id:  `11`,
        imageUrl: `assets/imgs/estate/7.jpg`,
        description: {
          address: `66 Corusant Way, King West, Toronto`,
          price: `$799,999 - Maintenance Fee $420`
        }
      },
      {
        id:  `12`,
        imageUrl: ``,
        description: {
          address: `66 Corusant Way, King West, Toronto`,
          price: `$799,999 - Maintenance Fee $420`
        }
      },
    ]

  public pendingObject: any = []
  public pendingArchived: any = []

  public showPending: boolean = true
  public showApproved: boolean = false
  public showPaid: boolean = false

  public cardRemoval: boolean = true

  async showInfo( contract_information ) {
    const modal = await this.modalController.create({
      component: ViewContractPage,
      componentProps: {
        contract_information: contract_information
      }
    })
    return await modal.present()
  }

  async showContract(contract_information) {
    const modal = await this.modalController.create({
      component: StepOnePage,
      componentProps: {
        id: contract_information.id
      }
    })

    modal.onDidDismiss()
    .then(( result ) => {
      if( result.data.componentProps.confirmation == true ) {
        this.removeCard( result.data.componentProps.id , 'approved' )
      }
    });

    return await modal.present()
  }

  ngOnInit() {
  }

  showSegment( value ) {
    this.showPending = false
    this.showApproved = false
    this.showPaid = false

    if (value == 'pending') {
      this.showPending = true
    } else if (value == 'approved') {
      this.showApproved = true
    } else {
      this.showPaid = true
    }
  }

  async cardPopover( id ) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps: {
        title: 'Are you sure you want to delete your pending contract?',
        subtitle: 'All contract details saved will be deleted.'
      }
    })

    popover.onDidDismiss()
    .then(( result ) => {
      this.cardRemoval = result.data.componentProps.confirmation

      if( this.cardRemoval == true ) {
        this.removeCard( id , 'pending' )
      }
    });

    return await popover.present()
  }

  removeCard( id, type ) {

    if( type == 'approved'){

      this.pendingObject = this.approved.filter( card => ( card || { } ).id === id )
      this.paid.push( this.pendingObject[0] )
      this.approved = this.approved.filter( card => ( card || { } ).id !== id )  

    } else if ( type == 'pending' ) {
      this.pendingObject = this.pendings.filter( card => ( card || { } ).id === id )
      this.pendingArchived.push( this.pendingObject[0] )
      this.pendings = this.pendings.filter( card => ( card || { } ).id !== id )  
    }

  }

}
