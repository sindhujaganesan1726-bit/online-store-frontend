import { Routes } from '@angular/router';
import { ProductDetails } from './product-details/product-details';
import { Home } from './home/home';
import { Cart } from './cart/cart';
import { Checkout } from './checkout/checkout';
export const routes: Routes = [
   {
    path:'',
    component: Home
   },
   
   {
    path:'cart',
    component: Cart
    },
   
    {
        path:'product-details/:id',
        component: ProductDetails
    },
    {
        path:'checkout',
        component:Checkout
    }

];
