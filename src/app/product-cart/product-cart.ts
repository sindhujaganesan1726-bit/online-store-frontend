
import { Component,Input} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart';
@Component({
  selector: 'app-product-cart',
  standalone:true,
  imports: [RouterLink],
  templateUrl: './product-cart.html',
  styleUrl: './product-cart.css',
})
export class ProductCart {
@Input() product:any;

constructor(private cartService: CartService){}


addToCart(){

  this.cartService.addToCart(this.product);
}
}