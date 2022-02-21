import { Component } from "@angular/core";
import { buttonList } from "../buttonList/buttonList";
import { ButtonModel } from "../buttonModel";

@Component ({
    selector: 'ebay-register', 
    templateUrl: 'register.component.html', 
    styleUrls: ['register.component.css']
})
export class Ebayregister {
    title = 'ebayregister';

    buttons: ButtonModel[] = [];

  constructor() {
      for (var button of buttonList) {
          console.log(button);
          this.buttons.push(button);

      }
  }
  }