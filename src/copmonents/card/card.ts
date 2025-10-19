import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  cards = [
    { title: 'Card 1',department:'Shoeses', description: 'This is the first card', image: 'assets/img1.jpg' },
    { title: 'Card 2',department:'Shoeses', description: 'This is the second card', image: 'assets/img2.jpg' },
    { title: 'Card 3',department:'shirts', description: 'This is the third card', image: 'assets/img3.jpg' },
    { title: 'Card 4',department:'shirts', description: 'This is the fourth card', image: 'assets/img4.jpg' },
    { title: 'Card 5',department:'bags', description: 'This is the fifth card', image: 'assets/img5.jpg' },
    { title: 'Card 6',department:'bags', description: 'This is the sixth card', image: 'assets/img6.jpg' }
  ];
}

