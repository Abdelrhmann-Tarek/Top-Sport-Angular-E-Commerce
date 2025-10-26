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
import { Products } from '../copmonents/products/products';

// export const routes: Routes = [,{
//     path:'auth', component:AuthNavBar , children:[{
//         path:'login', component:Login
//     },{
//         path:'register' , component:Register
//     }],
// }

// ,{
//     path : 'best-seller',component:BestSeller
// },{
//     path : 'home',component : Home

// },
// {
//     path:'contact-us',component:ContactUs
// },
// {
//     path:'product-details/:id',component:ProductDetails
// },
// {
//     path:"posts",component:Posts
// },
// {
//     path:"user" , component:UserNavBar , children:[{
//         path:'home' , component:Home    }]
// }];

export const routes: Routes = [
  // ==========================
  // Public (Before Login)
  // ==========================
  {
    path: 'auth',
    component: AuthNavBar,
    children: [
      { path: 'login', component: Login },
      { path: 'register', component: Register },
      { path: '', redirectTo: 'login', pathMatch: 'full' } // Default to login
    ]
  },

  // ==========================
  // Private (After Login)
  // ==========================
  {
    path: '',
    component: UserNavBar,
    children: [
      { path: 'home', component: Home },
      { path: 'best-seller', component: BestSeller },
      { path: 'posts', component: Posts },
      { path: 'contact-us', component: ContactUs },
      { path: 'product-details/:id', component: ProductDetails },
      { path: '', redirectTo: 'home', pathMatch: 'full' } // Default homepage
    ]
  },

  // ==========================
  // Fallback for Invalid URLs
  // ==========================
  { path: '**', redirectTo: 'auth/login' }
];
