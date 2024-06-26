import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard-page/dashboard-page.module').then(m => m.DashboardPageModule),
        data: {
          breadcrumb: 'Dashboard'
        },
      },
      {
        path: 'order-history',
        loadChildren: () => import('./order-history-page/order-history-page.module').then(m => m.OrderHistoryPageModule),
        data: {
          breadcrumb: 'Order history'
        },
      },
      {
        path: 'restaurant',
        loadChildren: () => import('./restaurant-page/restaurant-page.module').then(m => m.RestaurantPageModule),
        title: 'Restaurant',
        data: {
          breadcrumb: 'Restaurant'
        },
      },
      {
        path: 'category',
        loadChildren: () => import('./category-page/category-page.module').then(m => m.CategoryPageModule),
        title: 'Category',
        data: {
          breadcrumb: 'Category'
        },
      },
      {
        path: 'campaign',
        loadChildren: () => import('./campaign-page/campaign-page.module').then(m => m.CampaignPageModule),
        title: 'Campaign',
        data: {
          breadcrumb: 'Campaign'
        },
      }
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./restaurant-profile-page/restaurant-profile-page.module').then(m => m.RestaurantProfilePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
