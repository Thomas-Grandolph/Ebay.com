import { Component ,Input} from "@angular/core";

@Component({
    selector: 'newButton',
    templateUrl: 'newButton.component.html',

})

export class newButtonComponent {

    @Input() img: string;
    @Input() color: string;
    @Input() text: string;
    @Input() textColor: string;



    constructor() {
        this.img = "nonsense";
        this.color = "nonsense";
        this.text = "nonsense2";
        this.textColor = "nonsense2";
    }
}