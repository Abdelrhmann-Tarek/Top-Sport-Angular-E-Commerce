import { Component } from '@angular/core';
import { NavBar } from "../../../../copmonents/nav-bar/nav-bar";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-nav-bar',
  imports: [NavBar,RouterOutlet],
  templateUrl: './auth-nav-bar.html',
  styleUrl: './auth-nav-bar.css'
})
export class AuthNavBar {

}
