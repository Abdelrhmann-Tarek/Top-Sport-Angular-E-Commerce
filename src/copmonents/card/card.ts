import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  imports: [CommonModule,FormsModule],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
    selectedDepartment: string = 'All';

  cards = [
    { title: 'Card 1',department:'Shoeses', description: 'This is the first card', image: './product1.jpg' },
    { title: 'Card 2',department:'Shoeses', description: 'This is the second card', image: './product2.jpg' },
    { title: 'Card 3',department:'shirts', description: 'This is the third card', image: './product8.jpg' },
    { title: 'Card 4',department:'shirts', description: 'This is the fourth card', image: './product4.jpg' },
    { title: 'Card 5',department:'bags', description: 'This is the fifth card', image: './product5.jpg' },
    { title: 'Card 6',department:'bags', description: 'This is the sixth card', image: './product6.jpg' }
  ];
   get departments() {
    return ['All', ...new Set(this.cards.map(card => card.department))];
  }

  // Filter logic
  get filteredCards() {
    return this.selectedDepartment === 'All'
      ? this.cards
      : this.cards.filter(card => card.department === this.selectedDepartment);
  }
  // selectedCategory:string = "All";
  //   filteredProducts = this.cards;
  
  //   filterByCategory() {
  //     this.filteredProducts = this.selectedCategory === 'All'
  //       ? this.cards
  //       : this.cards.filter(p => p.department === this.selectedCategory);
}

  