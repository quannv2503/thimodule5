import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomepageComponent} from './homepage/homepage.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NewproductComponent} from './newproduct/newproduct.component';
import {ProductdetailComponent} from './productdetail/productdetail.component';
import {EditproductComponent} from './editproduct/editproduct.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NewproductComponent,
    EditproductComponent,
    ProductdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
