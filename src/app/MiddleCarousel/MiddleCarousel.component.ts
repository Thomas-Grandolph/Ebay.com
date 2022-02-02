import { Component, Input } from "@angular/core";

@Component({
    selector: 'ebay-MiddleCarousel',
    templateUrl: 'MiddleCarousel.component.html',
    styleUrls: ['MiddleCarousel.component.css']
})
export class EbayMiddleCarousel {
    title = 'EbayMiddleCarousel';
    
    
    @Input() img: string;
    @Input() price: number;
    @Input() discount: string;

    

 constructor() {
    this.img = "nonsense";
    this.price = 0;
    this.discount = "nonsense2";

}
}
