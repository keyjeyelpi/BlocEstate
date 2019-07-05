import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuLoggedOutPage } from './menu-logged-out.page';

const routes: Routes = [
  {
    path: '',
    component: MenuLoggedOutPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuLoggedOutPage]
})
export class MenuLoggedOutPageModule {}
