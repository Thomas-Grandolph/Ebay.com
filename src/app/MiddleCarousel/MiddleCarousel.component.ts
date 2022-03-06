import { Component, Input } from "@angular/core";
import { ProductsService } from "../product.service";
import { ProductItemModel } from '/home/loud/angular-workspace/ebay.com/src/app/product.model';

@Component({
    selector: 'ebay-MiddleCarousel',
    templateUrl: 'MiddleCarousel.component.html',
    styleUrls: ['MiddleCarousel.component.css']
})
export class EbayMiddleCarousel {
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
