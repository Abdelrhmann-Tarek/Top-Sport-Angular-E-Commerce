import { Routes } from '@angular/router';
import { BestSeller } from '../copmonents/best-seller/best-seller';
import { Home } from '../copmonents/home/home';
import { ContactUs } from '../copmonents/contact-us/contact-us';
import { ProductDetails } from './product-details/product-details';
import { Posts } from '../copmonents/posts/posts';
import { UserNavBar } from './Core/Layout/user-nav-bar/user-nav-bar';
import { AuthNavBar } from './Core/Layout/auth-nav-bar/auth-nav-bar';
import { Login } from './Core/Auth/components/login/login';
import { Register } from './Core/Auth/components/register/register';

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
},
{
    path:"user" , component:UserNavBar , children:[{
        path:'home' , component:Home
    }]
},{
    path:'auth', component:AuthNavBar , children:[{
        path:'login', component:Login
    },{
        path:'register' , component:Register
    }]
}
];
