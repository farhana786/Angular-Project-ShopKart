import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import { ViewAllPageComponent } from './view-all-page/view-all-page.component';
import { ViewComponent } from './view/view.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { MyordersComponent } from './my-account/myorders/myorders.component';
import { DetailsComponent } from './my-account/details/details.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "cart",
    component: CartComponent,
  },
  {
    component:SignupComponent,
    path:"signup"
  },
  {
    component:LoginComponent,
    path:"login"
  },
  {
    component: ViewAllPageComponent,
    path: "category/:category"
  },
  {
    path: "view/:productId",
    component: ViewComponent,
  },
  {
    path: "me",
    redirectTo: "me/details",
  },
  {
    path: "pay",
    component: PaymentComponent
  },
  {
    path: "me",
    component: MyAccountComponent,
    children: [
      {
        path: "details",
        component: DetailsComponent,
      },
      {
        path: "orders",
        component: MyordersComponent,
      },
    ]
  },
  {
    path: "search/:searchTerm",
    component: SearchPageComponent,
  },
  {
    path: "**",
    redirectTo: "/"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
