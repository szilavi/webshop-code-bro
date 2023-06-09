import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './page/admin/admin.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { Cat03Component } from './page/cat03/cat03.component';
import { Cat04Component } from './page/cat04/cat04.component';
import { Cat05Component } from './page/cat05/cat05.component';
import { CreateNewProductComponent } from './page/create-new-product/create-new-product.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cat01',
    component: Cat01Component,
  },
  {
    path: 'cat02',
    component: Cat02Component,
  },
  {
    path: 'cat03',
    component: Cat03Component,
  },
  {
    path: 'cat04',
    component: Cat04Component,
  },
  {
    path: 'cat05',
    component: Cat05Component,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'newproduct',
    component: CreateNewProductComponent,
  },
  {
    path: 'newproduct/:id',
    component: CreateNewProductComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
