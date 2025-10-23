import { Routes } from '@angular/router';
import { BestSeller } from '../copmonents/best-seller/best-seller';
import { Home } from '../copmonents/home/home';
import { ContactUs } from '../copmonents/contact-us/contact-us';
import { ProductDetails } from './product-details/product-details';
import { Posts } from '../copmonents/posts/posts';

export const routes: Routes = [{
    path : 'best-seller',component:BestSeller
},{
    path : 'home',component : Home

},
{
    path:'contact-us',component:ContactUs
},
{
    path:'product-details/:id',component:ProductDetails
},
{
    path:"posts",component:Posts
}];
