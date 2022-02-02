import { Component ,Input} from "@angular/core";

@Component({
    selector: 'newcard',
    templateUrl: 'newcard.component.html',

})

export class newcardComponent {

    @Input() img: string;
    @Input() price: string;
    @Input() discount: string;



    constructor() {
        this.img = "nonsense";
        this.price = "";
        this.discount = "nonsense2";
    }
}