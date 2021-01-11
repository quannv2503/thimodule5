import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomepageComponent} from './homepage/homepage.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NewbookComponent} from './new-book/newbook.component';
import {BookdetailComponent} from './book-detail/bookdetail.component';
import {EditbookComponent} from './edit-book/editbook.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NewbookComponent,
    EditbookComponent,
    BookdetailComponent,
    BookdetailComponent,
    DeleteBookComponent
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
