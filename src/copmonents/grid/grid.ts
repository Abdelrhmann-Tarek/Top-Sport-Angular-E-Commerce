import { Component } from '@angular/core';
import { Card } from "../card/card";
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../interface/iproduct';
import { Product } from '../../service/services/product';

@Component({
  selector: 'app-grid',
  imports: [Card ,FormsModule],
  templateUrl: './grid.html',
  styleUrl: './grid.css'
})
export class Grid {
  categories:string[];
  selectedCategory:string = "All";
  products: IProduct[];

constructor(private productService:Product){
  this.categories=["All","Shirts","Shorts","Kids","Shoes","Accesories"];
    this.products = this.productService.getAllProducts();
    

}

 getProductsByCategory(): IProduct[] {
    return this.productService.getProductsByCategory(this.selectedCategory);
  }




}
