import { Routes } from '@angular/router';
import { ProductDetails } from './product-details/product-details';
import { Home } from './home/home';
import { Cart } from './cart/cart';
import { Checkout } from './checkout/checkout';
import { Login } from './login/login';
import {Register} from './register/register';
import {authGuard} from './guards/auth-guard';

export const routes: Routes = [
   {
    path:'',
    component: Home,
    canActivate: [authGuard]
   },
   
   {
    path:'cart',
    component: Cart,
    canActivate: [authGuard]
    },
   
    {
        path:'product-details/:id',
        component: ProductDetails,
        canActivate: [authGuard]
    },
    {
        path:'checkout',
        component:Checkout,
        canActivate: [authGuard]
    },
    {
        path:'login',
        component:Login
    },
    {
        path:'register',
        component:Register
    }


];
