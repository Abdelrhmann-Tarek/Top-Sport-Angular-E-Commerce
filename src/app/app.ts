import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "../copmonents/nav-bar/nav-bar";
import { Slider } from "../copmonents/slider/slider";
import { Grid } from "../copmonents/grid/grid";
import { Card } from "../copmonents/card/card";
import { Footer } from "../copmonents/footer/footer";

@Component({
  selector: 'app-root',
  imports: [NavBar, Slider, Grid, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TopSport');
}
