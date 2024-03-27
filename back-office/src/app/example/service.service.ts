import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  insertproduct(p:Product){
    return this.http.post('http://localhost:8000/api/addproduct',p);
  }  
  getProduct(){
    return this.http.get('http://localhost:8000/api/getProduct');
  }
  deleteProduct(id:any){
    return this.http.delete('http://localhost:8000/api/deleteProduct/'+id);
  }
  getid(id:any){
    return this.http.get('http://localhost:8000/api/getid/'+id);
  }
  updateProduct(id: any, data: any) {
    return this.http.put('http://localhost:8000/api/updateProduct/' + id, data);
  }
  

}
