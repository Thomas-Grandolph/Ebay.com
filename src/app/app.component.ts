import { Component } from '@angular/core';
import { ProductItemModel } from './product.model';
import { ProductsService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ebay.com';

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








