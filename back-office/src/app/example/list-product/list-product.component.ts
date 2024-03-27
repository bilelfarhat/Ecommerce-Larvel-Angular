import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: Product[];
  product:any;
  
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    this.service.getProduct().subscribe((res:any) => {
      this.product = res.products;
    });
  }

  deleteProduct(id: any): void {
    this.service.deleteProduct(id).subscribe(
      (response:any) => {
        // Mettre à jour la liste des produits après la suppression
        //this.getProduct();
        console.log(response);
        this.product=response.products;
      },
      error => {
        console.error('Erreur lors de la suppression du produit :', error);
      }
    );
  }
}
