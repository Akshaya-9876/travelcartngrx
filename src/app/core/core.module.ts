import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { RatingComponent } from './component/rating/rating.component';
import { CartWidgetComponent } from './component/cart-widget/cart-widget.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageUrlPipe } from './pipes/image-url.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    RatingComponent,
    CartWidgetComponent,
    ImageUrlPipe,
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
   
  ],
  exports:[
    RatingComponent,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    ImageUrlPipe
    
  ]
})
export class CoreModule { }
