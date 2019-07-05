import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [ { path: '', loadChildren: '../home/home.module#HomePageModule' } ]
      },
      {
        path: 'saved',
        children: [ { path: '', loadChildren: '../saved/saved.module#SavedPageModule' } ]
      },
      {
        path: 'easy-sell',
        children: [ { path: '', loadChildren: '../easy-sell/easy-sell.module#EasySellPageModule' } ]
      },
      {
        path: 'profile',
        children: [ { path: '', loadChildren: '../menu-logged-in/menu-logged-in.module#MenuLoggedInPageModule' } ]
      },
      {
        path: 'list-properties',
        children: [ { path: '', loadChildren: '../list-properties/list-properties.module#ListPropertiesPageModule' } ]
      },
      {
        path: 'edit-profile',
        children: [ { path: '', loadChildren: '../edit-profile/edit-profile.module#EditProfilePageModule' } ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
