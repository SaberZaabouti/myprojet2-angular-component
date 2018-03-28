import { Injectable } from '@angular/core';
import { Produit } from '../domain/produit';

// @Injectable() // pas obligatoire si le service ne fait pas appel à d'autre service
export class ProductsService {

  constructor() {
  }
  getAllProducts(): Produit[] {
    return [
      {code: 'P100', nom: 'Café', prixUnitaire: 1200},
      {code: 'P200', nom: 'thé', prixUnitaire: 1000},
      {code: 'P300', nom: 'Jus', prixUnitaire: 3500},
      {code: 'P400', nom: 'CocaCola', prixUnitaire: 2000}
    ];

  }

}
