import { Component,OnInit } from '@angular/core';
import { ProductCart } from '../product-cart/product-cart';
import { ProductService } from '../services/product';
import { CartService } from '../services/cart';
@Component({
  selector: 'app-home',
  imports: [ProductCart],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  
  products:any[] = [];
  constructor(private cartService:CartService,private productService:ProductService){}

  ngOnInit(){
    this.productService.getProducts().subscribe(data =>{
      this.products = data;
    });
  }

  get cartCount(){
    return this.cartService.getCartItems().length;
  }
}

