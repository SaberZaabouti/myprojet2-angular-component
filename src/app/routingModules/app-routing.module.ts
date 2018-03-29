import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



import { AppComponent } from '../app.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { ProductsListComponent } from '../components/products-list/products-list.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ProductsService } from '../services/products.service';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';

const routes = [
  {path : 'list', component : ProductsListComponent},
  {path : 'welcome', component : WelcomeComponent},
  {path : '', redirectTo: 'welcome', pathMatch: 'full'},
 {path : '**', component : NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
