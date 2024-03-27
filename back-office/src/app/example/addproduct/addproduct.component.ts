import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ServiceService } from '../service.service';
import { tap } from 'rxjs/operators';

interface ProductResponse {
  id: number;
  label: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  product: Product = new Product();
  isEditMode: boolean = false;

  constructor(
    private service: ServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  products:Product[];
  

  ngOnInit(): void {
    const productId = this.route.snapshot.params.id;
    if (productId) {
      this.isEditMode = true;
      this.getProductById(productId);
    }
  }

  getProductById(id: any): void {
    this.service.getid(id).subscribe(
      (res: any) => {
        this.product = res.product;
      },
      (error) => {
        console.error('Erreur lors de la récupération du produit :', error);
      }
    );
  }
  

  addProduct(form: NgForm): void {
    if (form.valid) {
      this.service.insertproduct(this.product).subscribe(
        (res) => {
          
          this.router.navigate(['/example/list-product']);
        },
        (error) => {
          console.error('Erreur lors de l\'ajout du produit :', error);
        }
      );
    }
  }

  updateProduct(form: NgForm): void {
    if (form.valid) {
      this.service.updateProduct(this.product.id, this.product).subscribe(
        response => {
          
          this.router.navigate(['/example/list-product']); // Redirection vers la liste des produits
          
        }
        ,
        (error) => {
          console.error('Erreur de modification :', error);
        }
      );
    }
  }
  
}
