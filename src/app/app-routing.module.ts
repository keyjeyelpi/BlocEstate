import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'signin', loadChildren: './signin/signin.module#SigninPageModule' },
  { path: 'filter', loadChildren: './filter/filter.module#FilterPageModule' },
  { path: 'contract/1', loadChildren: './contract/1/basic-verification.module#BasicVerificationPageModule' },
  { path: 'contract/2', loadChildren: './contract/2/signing-parties.module#SigningPartiesPageModule' },
  { path: 'contract/3', loadChildren: './contract/3/eks.module#EksPageModule' },
  { path: 'contract/4', loadChildren: './contract/4/talk-money.module#TalkMoneyPageModule' },
  { path: 'contract/5', loadChildren: './contract/5/final-details.module#FinalDetailsPageModule' },


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
