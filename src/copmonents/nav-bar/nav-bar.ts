import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {
  isLightMode =true;
  toggleTheme(){
this.isLightMode = !this.isLightMode;
  document.body.classList.toggle('dark-mode', !this.isLightMode);
  }
}
