import { Component,OnInit } from '@angular/core';
import { CartService } from '../services/cart';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',

  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart implements OnInit {

  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit()
  {
    this.cartItems=this.cartService.getCartItems();
    
  }
  remove(id:number){
    this.cartService.removeFromCart(id);
    this.cartItems = this.cartService.getCartItems();
  }

  get totalCost(){
    return this.cartItems.reduce((sum,item) => sum + item.cost * item.quantity,0);
  }
  getTotal(){
    let total = 0;
    for (let product of this.cartItems){
      total = total + (product.cost * product.quantity);
    }
    return total;
  }

  increase(id:number){
    this.cartService.increaseQuantity(id);
    this.cartItems = this.cartService.getCartItems();
  }

  decrease(id:number){
    this.cartService.decreaseQuantity(id);
    this.cartItems = this.cartService.getCartItems();
  }

}
