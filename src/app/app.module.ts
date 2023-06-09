import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './page/home/home.component';
import { ProductCardComponent } from './common/product-card/product-card.component';
import { ProductListComponent } from './common/product-list/product-list.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { Cat03Component } from './page/cat03/cat03.component';

import { Cat05Component } from './page/cat05/cat05.component';

import { CatIdPipe } from './pipe/cat-id.pipe';
import { SearchPipe } from './pipe/search.pipe';
import { SortPipe } from './pipe/sort.pipe';
import { HalvedPipe } from './pipe/halved.pipe';
import { DollarPipe } from './pipe/dollar.pipe';
import { FilterFivePipe } from './pipe/filter-five.pipe';
import { Cat04Component } from './page/cat04/cat04.component';
import { AdminComponent } from './page/admin/admin.component';
import { DataEditorComponent } from './page/data-editor/data-editor.component';
import { UniversalsearchPipe } from './pipe/universalsearch.pipe';
import { UniversalpipePipe } from './pipe/universalpipe.pipe';
import { CreateNewProductComponent } from './page/create-new-product/create-new-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Cat01Component,
    Cat02Component,
    HomeComponent,
    ProductCardComponent,
    ProductListComponent,
    CatIdPipe,
    SearchPipe,
    SortPipe,
    HalvedPipe,
    DollarPipe,
    FilterFivePipe,
    Cat03Component,
    Cat05Component,
    Cat04Component,
    AdminComponent,
    DataEditorComponent,
    UniversalsearchPipe,
    UniversalpipePipe,
    CreateNewProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
