// Layouts
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ListComponent} from "./list/list.component";
import {FormulaireComponent} from "./formulaire/formulaire.component";
import { AddproductComponent } from "./addproduct/addproduct.component";
import { ListProductComponent } from "./list-product/list-product.component";

export const routes: Routes = [

  {
    path: 'list',
    component: ListComponent
  }, {
    path: 'formulaire',
    component: FormulaireComponent
  },
  {
    path: 'addproduct',
    component: AddproductComponent
  },
  {
    path: 'updateProduct/:id',
    component: AddproductComponent
  },
  {
    path: 'list-product',
    component: ListProductComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleRouting {
}
