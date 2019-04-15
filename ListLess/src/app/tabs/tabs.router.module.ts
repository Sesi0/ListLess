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
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'todo',
        children: [
          {
            path: '',
            loadChildren: '../todo/todo.module#TodoPageModule'
          }
        ]
      },
      {
        path: 'shopping',
        children: [
          {
            path: '',
            loadChildren: '../shopping/shopping.module#ShoppingPageModule'
          }
        ]
      },
      {
        path: 'balance',
        children: [
          {
            path: '',
            loadChildren: '../balance/balance.module#BalancePageModule'
          }
        ]
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
