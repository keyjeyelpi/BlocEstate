import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { MyContractsPage } from './my-contracts.page';
import { ViewContractPage } from '../view-contract/view-contract.page';
import { PopoverComponent } from '../my-contracts/popover/popover.component';

const routes: Routes = [ {
    path : '',
    component : MyContractsPage
  } ];

@NgModule( {
  imports : [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild( routes )
  ],
  entryComponents: [ViewContractPage , PopoverComponent],
  declarations : [ MyContractsPage , ViewContractPage , PopoverComponent ],
} )
export class MyContractsPageModule { }
