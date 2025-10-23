import { CommonModule } from '@angular/common';
import { Component,Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HoverCard } from '../../directive/hover-card';
import { RatingPipe } from '../../pipes/rating-pipe'
import { IProduct } from '../../interface/iproduct';
import { Product } from '../../service/services/product';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-card',
  imports: [CommonModule,FormsModule, HoverCard,RatingPipe],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card implements OnInit {
  constructor(productService:Product,private router:Router){

  }
  @Input() product!:IProduct;
    discountPrice: number | null = null;
  ngOnInit(): void {
   
  }
  applyDiscount() {
    const discountRate = 0.20; 
    this.discountPrice = this.product.price - (this.product.price * discountRate);
  }
  showDetails(id:number){
      this.router.navigate(['product-details' ,id])
  }
}