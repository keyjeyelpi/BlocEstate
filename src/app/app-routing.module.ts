import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'contract', loadChildren: './contract/contract.module#ContractPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'signin', loadChildren: './signin/signin.module#SigninPageModule' },
  { path: 'filter', loadChildren: './filter/filter.module#FilterPageModule' },  { path: 'basic-verification', loadChildren: './basic-verification/basic-verification.module#BasicVerificationPageModule' },
  { path: 'signing-parties', loadChildren: './signing-parties/signing-parties.module#SigningPartiesPageModule' },
  { path: 'talk-money', loadChildren: './talk-money/talk-money.module#TalkMoneyPageModule' },
  { path: 'eks', loadChildren: './eks/eks.module#EksPageModule' },
  { path: 'final-details', loadChildren: './final-details/final-details.module#FinalDetailsPageModule' },


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
export class AppRoutingModule {}
