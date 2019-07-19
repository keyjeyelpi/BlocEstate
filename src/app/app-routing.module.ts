import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'signin', loadChildren: './signin/signin.module#SigninPageModule' },
  { path: 'filter', loadChildren: './filter/filter.module#FilterPageModule' },
  { path: 'contract/step-1', loadChildren: './contract/step-1/basic-verification.module#BasicVerificationPageModule' },
  { path: 'contract/step-2', loadChildren: './contract/step-2/signing-parties.module#SigningPartiesPageModule' },
  { path: 'contract/step-3', loadChildren: './contract/step-3/eks.module#EksPageModule' },
  { path: 'contract/step-4', loadChildren: './contract/step-4/talk-money.module#TalkMoneyPageModule' },
  { path: 'contract/step-5', loadChildren: './contract/step-5/final-details.module#FinalDetailsPageModule' },
  { path: 'contract/my-contracts', loadChildren: './contract/my-contracts/my-contracts.module#MyContractsPageModule' },
  { path: 'contract/view-contract', loadChildren: './contract/view-contract/view-contract.module#ViewContractPageModule' },
  { path: 'contract/viewing-schedule', loadChildren: './contract/viewing-schedule/viewing-schedule.module#ViewingSchedulePageModule' },  { path: 'view-details', loadChildren: './view-details/view-details.module#ViewDetailsPageModule' },




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
