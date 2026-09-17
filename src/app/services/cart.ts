import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: any[] = [];

  addToCart(product:any){
    const existingItem = this.cartItems.find(item =>item.id === product.id);
    if (existingItem){
      existingItem.quantity += 1;
    } else{
      this.cartItems.push({...product,quantity:1});
    }
   }

   removeFromCart(id:number){
    this.cartItems = this.cartItems.filter(item => item.id !== id);
   }
  getCartItems(){
    return this.cartItems;
  }

  clearCart(){
    this.cartItems = [];
  }
  increaseQuantity(id:number){
    const item = this.cartItems.find(item => item.id === id);
    if (item){
      item.quantity += 1;
    }
  }
  decreaseQuantity(id:number){
    const item = this.cartItems.find(item => item.id === id);
    if(item){
      if(item.quantity > 1){
        item.quantity -= 1;
      }else{
        this.removeFromCart(id);
      }
    }
  }
      
    
  
  

}
