import { Component,OnInit } from '@angular/core';
import { CartService } from '../services/cart';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../services/order';
@Component({
  selector: 'app-checkout',
  imports: [FormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout implements OnInit {
  cartItems :any[] = [];
  name='';
  address='';
  orderPlaced=false;

  constructor(private cartService:CartService, private orderService: OrderService){}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }
    get totalcost(){
      return this.cartItems.reduce((sum,item) => sum + item.cost * item.quantity,0)
    }

    placeOrder(){
      const order = {
        customerName:this.name,
        address:this.address,
        totalAmount:this.totalcost
      };
      this.orderService.placeOrder(order).subscribe(response => {
        this.orderPlaced = true;
        this.cartService.clearCart();
      });
    }
  

}
