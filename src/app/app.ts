import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "../copmonents/nav-bar/nav-bar";
import { Slider } from "../copmonents/slider/slider";

@Component({
  selector: 'app-root',
  imports: [NavBar, Slider],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TopSport');
}
