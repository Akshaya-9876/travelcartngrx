import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { ReviewPopupComponent } from './components/review-popup/review-popup.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';


@NgModule({
  declarations: [
    CartComponent,
    ReviewPopupComponent,
    CartDetailsComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
