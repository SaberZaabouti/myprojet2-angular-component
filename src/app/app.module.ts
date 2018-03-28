import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsService } from './services/products.service';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes = [
  {path : 'list', component : ProductsListComponent},
  {path : 'welcome', component : WelcomeComponent},
  {path : '', redirectTo: 'welcome', pathMatch: 'full'},
 {path : '**', component : NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsListComponent,
    WelcomeComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule, // bootsraper l'application dans navigateur web
    RouterModule.forRoot(routes)
  ],
  providers: [
    ProductsService // service pour tous les composants
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
