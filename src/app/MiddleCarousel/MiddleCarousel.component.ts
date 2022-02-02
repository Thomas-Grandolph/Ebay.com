import { Component, Input } from "@angular/core";
import { ProductItemModel } from '/home/loud/angular-workspace/ebay.com/src/app/product.model';
import {mock_list} from '/home/loud/angular-workspace/ebay.com/src/app/mock_list/mock_list.component';
@Component({
    selector: 'ebay-MiddleCarousel',
    templateUrl: 'MiddleCarousel.component.html',
    styleUrls: ['MiddleCarousel.component.css']
})
export class EbayMiddleCarousel {
    title = 'EbayMiddleCarousel';


    products: ProductItemModel[] = [];

    constructor() {
        for (var product of mock_list) {
            console.log(product);
            this.products.push(product);

        }
    }
}
