import { CommonModule } from '@angular/common';
import { Component,Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HoverCard } from '../../directive/hover-card';
import { RatingPipe } from '../../pipes/rating-pipe'
import { IProduct } from '../../interface/iproduct';
@Component({
  selector: 'app-card',
  imports: [CommonModule,FormsModule, HoverCard,RatingPipe],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card implements OnInit {
  @Input() product!:IProduct;
    discountPrice: number | null = null;
  ngOnInit(): void {
   
  }
  applyDiscount() {
    const discountRate = 0.20; 
    this.discountPrice = this.product.price - (this.product.price * discountRate);
  }
  showDetails(id:number){

  }
}