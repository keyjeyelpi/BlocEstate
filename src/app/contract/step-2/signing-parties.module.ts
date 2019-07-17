import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SigningPartiesPage } from './signing-parties.page';

const routes: Routes = [
  {
    path: '',
    component: SigningPartiesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SigningPartiesPage]
})
export class SigningPartiesPageModule {}
