import { Routes } from '@angular/router';
import { BestSeller } from '../copmonents/best-seller/best-seller';
import { Home } from '../copmonents/home/home';

export const routes: Routes = [{
    path : 'best-seller',component:BestSeller
},{
    path : 'home',component : Home

}];
