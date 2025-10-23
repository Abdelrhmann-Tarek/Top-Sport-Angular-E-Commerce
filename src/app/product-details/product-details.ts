import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../interface/iproduct';
import { Product } from '../../service/services/product';
import { ActivatedRoute, Router } from '@angular/router';
import { HoverCard } from '../../directive/hover-card';
import { RatingPipe } from '../../pipes/rating-pipe';
import { pipe } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [HoverCard,RatingPipe,FormsModule,CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails implements OnInit {
  productId:any;
  product?:IProduct;
  constructor(private productService :Product , private route:ActivatedRoute , private router:Router){}
  ngOnInit(): void {
    this.route.params.subscribe(params => this.productId = +params['id'])
    this.product = this.productService.products.find(p=>p.id==this.productId)
  }
  back(){
    this.router.navigate(['/best-seller'])
  }

}
