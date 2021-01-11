import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {NewbookComponent} from './new-book/newbook.component';
import {BookdetailComponent} from './book-detail/bookdetail.component';
import {EditbookComponent} from './edit-book/editbook.component';
import {DeleteBookComponent} from './delete-book/delete-book.component';

const routes: Routes = [{
    path: '',
    component: HomepageComponent
  },
    {
      path: 'create',
      component: NewbookComponent
    },
    {
      path: 'edit/:id',
      component: EditbookComponent
    },
    {
      path: 'book/:id',
      component: BookdetailComponent
    },
    {
      path: 'delete/:id',
      component: DeleteBookComponent
    }

  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
