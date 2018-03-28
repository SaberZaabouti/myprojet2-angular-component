import { Component, OnInit, OnChanges } from '@angular/core';
import { Produit } from '../../domain/produit';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  providers: [
    ProductsService // service seulement pour ce composant
  ]
})
export class ProductsListComponent implements OnInit, OnChanges {
 // data: string[];
  data: Produit[];
  constructor(private _service: ProductsService) { // Inejction du service =>
    /* private _service;
    // this.data = ['café', 'thé', 'jus'];
    /*this.data = [
      {code: 'P100', nom: 'Café', prixUnitaire: 1200},
      {code: 'P200', nom: 'thé', prixUnitaire: 1000},
      {code: 'P300', nom: 'Jus', prixUnitaire: 3500},
      {code: 'P400', nom: 'CocaCola', prixUnitaire: 2000}
    ];*/
   }

  ngOnInit() {
    this.data = this._service.getAllProducts();
    console.log("in init...");
  }

  ngOnChanges(): void {
    console.log("in change...");
  }

}
