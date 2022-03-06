import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductItemModel } from "./product.model";

@Injectable({
    providedIn: 'root'
})
export class ProductsService{
    private baseUrl:string= "https://newebaywebsite-default-rtdb.firebaseio.com/";
    private productsEndpoint: string = "products.json"
   
    constructor(private http:HttpClient) {

    }

    public getProducts() {
        return this.http.get<ProductItemModel []>(this.baseUrl + this. productsEndpoint);
    }
    public getProduct(index:number) {
        return this.http.get<ProductItemModel>(this.baseUrl + 'products/' + index + '.json')
    }
}