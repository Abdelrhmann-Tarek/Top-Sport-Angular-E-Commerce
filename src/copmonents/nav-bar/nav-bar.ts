import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule, RouterLink],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {
  isLightMode =true;
  toggleTheme(){
this.isLightMode = !this.isLightMode;
  document.body.classList.toggle('dark-mode', !this.isLightMode);
  }
  @Input() Layout!:string ;
}
