import { Injectable } from '@angular/core';
import { IProduct } from '../../interface/iproduct';

@Injectable({
  providedIn: 'root'
})
export class Product {


  public products:IProduct[] =[{
      id: 1,
      name: 'Manchester United Home Jersey 2024',
      description: 'Official Adidas home jersey with club crest and AEROREADY fabric.',
      price: 89.99,
      imageUrl: 'product8.jpg',
      rating: 4.8,
      category: 'Jersey',
    },
    {
      id: 2,
      name: 'Manchester United Away Jersey 2024',
      description: 'Away kit with breathable lightweight fabric and slim fit.',
      price: 89.99,
      imageUrl: 'kids1.jpg',
      rating:1.7,
      category: 'Jersey',
    },
    {
      id: 3,
      name: 'Manchester United Third Jersey 2024',
      description: 'Limited edition third kit with modern design.',
      price: 99.99,
      imageUrl: 'kids2.jpg',
      rating: 4.9,
      category: 'Jersey',
    },
    {
      id: 4,
      name: 'Man Utd Training Top',
      description: 'Lightweight top designed for high-intensity training.',
      price: 69.99,
      imageUrl: 'kids3.jpg',
      rating: 4.5,
      category: 'Training',
    },
    {
      id: 5,
      name: 'Man Utd Training Pants',
      description: 'Slim fit training pants with ankle zips and moisture control.',
      price: 59.99,
      imageUrl: 'product1.jpg',
      rating: 4.3,
      category: 'Training',
    },
    {
      id: 6,
      name: 'Man Utd Home Shorts 2024',
      description: 'Matching shorts for the home kit with elastic waistband.',
      price: 49.99,
      imageUrl: 'product2.jpg',
      rating: 4.4,
      category: 'Shorts',
    },
    {
      id: 7,
      name: 'Man Utd Away Shorts 2024',
      description: 'Comfortable polyester shorts featuring the club badge.',
      price: 49.99,
      imageUrl: 'product3.jpg',
      rating: 4.2,
      category: 'Shorts',
    },
    {
      id: 8,
      name: 'Man Utd Full Tracksuit 2024',
      description: 'Complete tracksuit with jacket and pants in classic red and black.',
      price: 129.99,
      imageUrl: 'product4.jpg',
      rating: 4.7,
      category: 'Tracksuit',
    },
    {
      id: 9,
      name: 'Man Utd Anthem Jacket',
      description: 'Worn by players before kickoff, with soft lining and sleek design.',
      price: 99.99,
      imageUrl: 'product5.jpg',
      rating: 4.9,
      category: 'Tracksuit',
    },
    {
      id: 10,
      name: 'Man Utd Cap',
      description: 'Adjustable cap with embroidered crest.',
      price: 29.99,
      imageUrl: 'product6.jpg',
      rating: 4.1,
      category: 'Accessories',
    },
    {
      id: 11,
      name: 'Man Utd Scarf',
      description: 'Warm knit scarf in traditional red and black.',
      price: 24.99,
      imageUrl: 'product7.jpg',
      rating: 4.8,
      category: 'Accessories',
    },
    {
      id: 12,
      name: 'Man Utd Gym Bag',
      description: 'Durable bag for travel or gym use with large storage space.',
      price: 39.99,
      imageUrl: 'manutd/bag.jpg',
      rating: 4.6,
      category: 'Accessories',
    },
    {
      id: 13,
      name: 'Man Utd Pre-Match Jersey',
      description: 'Jersey worn by players during warmup.',
      price: 74.99,
      imageUrl: 'manutd/prematch.jpg',
      rating: 4.5,
      category: 'Training',
    },
    {
      id: 14,
      name: 'Man Utd Goalkeeper Jersey',
      description: 'Authentic goalkeeper kit with breathable fabric.',
      price: 94.99,
      imageUrl: 'manutd/goalkeeper.jpg',
      rating: 4.3,
      category: 'Jersey',
    },
    {
      id: 15,
      name: 'Man Utd Winter Jacket',
      description: 'Thick insulated jacket for cold weather.',
      price: 149.99,
      imageUrl: 'manutd/winter_jacket.jpg',
      rating: 4.7,
      category: 'Tracksuit',
    }
  ];
    constructor() { }

  getAllProducts(): IProduct[] {
    return this.products;
  }

  getProductsByCategory(category: string): IProduct[] {
    if (category === 'All') {
      return this.products;
    }
    return this.products.filter(p => p.category === category);
  }
  
}
