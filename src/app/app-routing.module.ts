import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { InfoComponent } from './components/info/info.component';
import { ReturnsComponent } from './components/returns/returns.component';
import { WholesaleComponent } from './components/wholesale/wholesale.component';
import { ContactComponent } from './components/contact/contact.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ShopAllComponent } from './components/shop-all/shop-all.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'shop-all',
    component: ShopAllComponent
  },
  {
    path: 'shipping',
    component: ShippingComponent
  },
  {
    path: 'about-us',
    component: InfoComponent
  },
  {
    path: 'contact-us',
    component: ContactComponent
  },
  {
    path: 'returns',
    component: ReturnsComponent
  },
  {
    path: 'wholesale',
    component: WholesaleComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
