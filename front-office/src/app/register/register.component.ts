import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   user = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: ''
  };

  constructor( private service: ServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  register(form: NgForm): void {
    if (form.valid) {
      this.service.register(this.user).subscribe(
        (res) => {
          
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Erreur lors de l\'ajout du produit :', error);
        }
      );
    }
  }

}

