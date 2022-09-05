import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductcardComponent } from './components/productcard/productcard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaypageComponent } from './paypage/paypage.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path:'products',component:ProductcardComponent},
  {
    path:'home', component: HomeComponent
  },
  {
    path:'cart', component: CartComponent
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'register', component: RegisterComponent
  },
  {
    path:'payment', component: PaypageComponent
  },

  {
    path:'product-details/:id',component:ProductDetailsComponent
  },

  {
    path: 'notFound', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule),
  },
  {
    path: '**', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule)

  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
