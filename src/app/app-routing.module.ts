import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'edit-filter', loadChildren: './pages/home/edit-filter/edit-filter.module#EditFilterPageModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },
  { path: 'signin', loadChildren: './pages/signin/signin.module#SigninPageModule' },

  { path: 'contract/my-contracts', loadChildren: './pages/contract/my-contracts/my-contracts.module#MyContractsPageModule' },
  { path: 'contract/step-one', loadChildren: './pages/contract/step-one/step-one.module#StepOnePageModule' },
  { path: 'contract/step-two', loadChildren: './pages/contract/step-two/step-two.module#StepTwoPageModule' },
  { path: 'contract/step-three', loadChildren: './pages/contract/step-three/step-three.module#StepThreePageModule' },
  { path: 'contract/step-four', loadChildren: './pages/contract/step-four/step-four.module#StepFourPageModule' },
  { path: 'contract/step-five', loadChildren: './pages/contract/step-five/step-five.module#StepFivePageModule' },
  { path: 'contract/view-contract', loadChildren: './pages/contract/view-contract/view-contract.module#ViewContractPageModule' },
  { path: 'contract/view-schedule', loadChildren: './pages/contract/view-schedule/view-schedule.module#ViewSchedulePageModule' },

  // { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  // { path: 'test', loadChildren: './pages/test/test.module#TestPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
