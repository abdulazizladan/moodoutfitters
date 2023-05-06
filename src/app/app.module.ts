import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';

//Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';

//FlexLayout Module
import { FlexLayoutModule } from '@angular/flex-layout';

//Stripe Module
import { StripeModule } from 'stripe-angular';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemComponent } from './components/item/item.component';
import { CartComponent } from './components/cart/cart.component';
import { StoreModule } from '@ngrx/store';
import { cartReducer, key } from './store/reducers/cart.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FooterComponent } from './components/footer/footer.component';
import { FeedComponent } from './components/feed/feed.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { ReturnsComponent } from './components/returns/returns.component';
import { InfoComponent } from './components/info/info.component';
import { ContactComponent } from './components/contact/contact.component';
import { WholesaleComponent } from './components/wholesale/wholesale.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ItemComponent,
    CartComponent,
    FooterComponent,
    FeedComponent,
    ItemDetailsComponent,
    CarouselComponent,
    ShippingComponent,
    ReturnsComponent,
    InfoComponent,
    ContactComponent,
    WholesaleComponent,
    LayoutComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatChipsModule,
    MatBadgeModule,
    FlexLayoutModule,
    StoreModule.forRoot(cartReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StripeModule.forRoot(''),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
