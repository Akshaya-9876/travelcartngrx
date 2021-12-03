import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { RatingComponent } from './component/rating/rating.component';
import { CartWidgetComponent } from './component/cart-widget/cart-widget.component';
import { ImageUrlPipe } from './pipes/image-url.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    RatingComponent,
    CartWidgetComponent,
    ImageUrlPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
  RatingComponent,
  HeaderComponent
  ]
})
export class CoreModule { }
