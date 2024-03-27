import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();

  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit(): void {}

  login(form: NgForm): void {
    if (form.valid) {
      this.service.login(this.user).subscribe(
        (res: any) => { // Utilisation de 'any' pour ignorer la vérification du type
          // Enregistrez le token d'authentification dans le localStorage
          localStorage.setItem('access_token', res.access_token);

          // Vous pouvez également stocker d'autres informations de l'utilisateur
          // dans le localStorage si nécessaire

          this.router.navigate(['/list']);
        },
        (error) => {
          console.error('Erreur de login :', error);
        }
      );
    }
  }
}
