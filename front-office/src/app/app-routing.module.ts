import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponentComponent } from './full-layout-component/full-layout-component.component';
import { ListComponent } from './list/list.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', 
  component: FullLayoutComponentComponent,
  children: [
    {
      path: 'list',component:ListComponent
    },
    {
      path: 'register',component:RegisterComponent
    },
    {
      path: 'login',component:LoginComponent
    }
  ]

}
  // Ajoutez d'autres routes ici
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
