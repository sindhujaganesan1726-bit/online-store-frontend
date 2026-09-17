import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product';
import { CartService } from '../services/cart';
@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {

  productId ='string';
  product:any;
  
  constructor(
    private route:ActivatedRoute,
    private productService:ProductService,
    private cartService:CartService
  ){}

  ngOnInit(){
    this.productId=this.route.snapshot.paramMap.get('id') ||'';
    this.productService.getProductById(Number(this.productId)).subscribe(data =>{
        this.product = data;
    });
  }
  addToCart(){
    this.cartService.addToCart(this.product);
  }
  
  
}

