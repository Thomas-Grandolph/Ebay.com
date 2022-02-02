import { Component } from '@angular/core';
import { ProductItemModel } from './product.model'; 
import {mock_list} from './mock_list/mock_list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ebay.com';

  products: ProductItemModel[]=[];

  constructor(){
    for(var product of mock_list) {
      console.log(product);
      this.products.push(product);
    }
    


  }
  
}
