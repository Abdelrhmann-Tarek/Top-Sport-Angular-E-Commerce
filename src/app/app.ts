import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "../copmonents/nav-bar/nav-bar";

@Component({
  selector: 'app-root',
  imports: [ NavBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TopSport');
}
