import { Component } from '@angular/core';
import { NavBar } from "../../../../copmonents/nav-bar/nav-bar";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-nav-bar',
  imports: [NavBar , RouterOutlet],
  templateUrl: './user-nav-bar.html',
  styleUrl: './user-nav-bar.css'
})
export class UserNavBar {

}
