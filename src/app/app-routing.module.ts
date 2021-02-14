import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingComponent } from './shopping/shopping.component';


const routes: Routes = [
  {
    path: '', component: ShoppingComponent,
    data: { headerTitle: 'Shopping Cart', pageTitle: 'Shopping Cart' },
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
