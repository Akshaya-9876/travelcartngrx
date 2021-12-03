import { INFERRED_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { CartWidgetModel } from '../../models/cart-widget-model';

@Component({
  selector: 'app-cart-widget',
  templateUrl: './cart-widget.component.html',
  styleUrls: ['./cart-widget.component.scss']
})
export class CartWidgetComponent implements OnInit {
  model!: CartWidgetModel;

  


  constructor() {
    
    this.model={
      count:5,
      amount:1000,
      currency:"INR"
    }
   }

  ngOnInit(): void {
  }

}
