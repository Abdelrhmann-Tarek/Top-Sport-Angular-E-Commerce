import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HoverCard } from '../../directive/hover-card';

@Component({
  selector: 'app-card',
  imports: [CommonModule,FormsModule, HoverCard],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input() product:{id:number , name:string , description:string,price:number,imageUrl:string,rating:number , category:string}|undefined
  // cards = [
  //   { title: 'Card 1',department:'Shoeses', description: 'This is the first card', image: './product1.jpg' },
  //   { title: 'Card 2',department:'Shoeses', description: 'This is the second card', image: './product2.jpg' },
  //   { title: 'Card 3',department:'shirts', description: 'This is the third card', image: './product8.jpg' },
  //   { title: 'Card 4',department:'shirts', description: 'This is the fourth card', image: './product4.jpg' },
  //   { title: 'Card 5',department:'bags', description: 'This is the fifth card', image: './product5.jpg' },
  //   { title: 'Card 6',department:'bags', description: 'This is the sixth card', image: './product6.jpg' }
  // ];
  // selectedDepartment: string = 'All';


  //  get departments() {
  //   return ['All', ...new Set(this.cards.map(card => card.department))];
  // }

  // get filteredCards() {
  //   return this.selectedDepartment === 'All'
  //     ? this.cards
  //     : this.cards.filter(card => card.department === this.selectedDepartment);
  // }
  
  
}
// selectDepartment(dept: string) {
//   this.selectedDepartment = dept;
// }



