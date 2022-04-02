import { Component, Input, OnInit } from "@angular/core";
import { ProductsService } from "../product.service";
import { ProductItemModel } from 'src/app/product.model';

@Component({
    selector: 'ebay-MiddleCarousel',
    templateUrl: 'MiddleCarousel.component.html',
    styleUrls: ['MiddleCarousel.component.css']
})
export class EbayMiddleCarousel implements OnInit{

    title = 'EbayMiddleCarousel';


    products: ProductItemModel[] = [];

  constructor(private productsService: ProductsService) {

  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data => {

      console.log("Fetching product data");
      for (var product of data) {
        console.log(product)
        this.products.push(product);

      }
    });
        
    }
}
