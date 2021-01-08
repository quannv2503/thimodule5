import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {NewproductComponent} from './newproduct/newproduct.component';
import {ProductdetailComponent} from './productdetail/productdetail.component';
import {EditproductComponent} from './editproduct/editproduct.component';

const routes: Routes = [{
    path: '',
    component: HomepageComponent
  },
    {
      path: 'create',
      component: NewproductComponent
    },
    {
      path: 'edit/:id',
      component: EditproductComponent
    },
    {
      path: 'product/:id',
      component: ProductdetailComponent
    }

  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
