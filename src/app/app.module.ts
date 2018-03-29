import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';



import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsService } from './services/products.service';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from './routingModules/app-routing.module';

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
    AppRoutingModule
  ],
  providers: [
    ProductsService // service pour tous les composants
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
