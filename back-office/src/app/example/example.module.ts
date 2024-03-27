import {NgModule} from '@angular/core';
import {ListComponent} from './list/list.component';
import {FormulaireComponent} from './formulaire/formulaire.component';
import {SharedModule} from "../shared/shared.module";
import {ExampleRouting} from "./example.routing";
import { AddproductComponent } from './addproduct/addproduct.component';
import { FormsModule, ReactiveFormsModule,} from '@angular/forms';
import { ListProductComponent } from './list-product/list-product.component';



@NgModule({
  imports: [
    ExampleRouting,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    

    
    
  ],
  declarations: [ListComponent, FormulaireComponent,AddproductComponent, ListProductComponent]

})
export class ExampleModule {
}
export class AppModule { }