import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'signin', loadChildren: './signin/signin.module#SigninPageModule' },
  { path: 'filter', loadChildren: './filter/filter.module#FilterPageModule' },
  { path: 'contract/step-one', loadChildren: './contract/step-one/step-one.module#BasicVerificationPageModule' },
  { path: 'contract/step-two', loadChildren: './contract/step-two/step-two.module#SigningPartiesPageModule' },
  { path: 'contract/step-three', loadChildren: './contract/step-three/step-three.module#step-threePageModule' },
  { path: 'contract/step-four', loadChildren: './contract/step-four/step-four.module#TalkMoneyPageModule' },
  { path: 'contract/step-five', loadChildren: './contract/step-five/step-five.module#FinalDetailsPageModule' },
  { path: 'contract/my-contracts', loadChildren: './contract/my-contracts/my-contracts.module#MyContractsPageModule' },
  { path: 'contract/view-contract', loadChildren: './contract/view-contract/view-contract.module#ViewContractPageModule' },
  { path: 'contract/view-schedule', loadChildren: './contract/view-schedule/view-schedule.module#ViewingSchedulePageModule' },
  { path: 'view-details', loadChildren: './view-details/view-details.module#ViewDetailsPageModule' },




  // { path: 'menu-logged-out', loadChildren: './menu-logged-out/menu-logged-out.module#MenuLoggedOutPageModule' },
  // { path: 'menu-logged-in', loadChildren: './menu-logged-in/menu-logged-in.module#MenuLoggedInPageModule' },
  // { path: 'list-properties', loadChildren: './list-properties/list-properties.module#ListPropertiesPageModule' },
  // { path: 'edit-profile', loadChildren: './edit-profile/edit-profile.module#EditProfilePageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
