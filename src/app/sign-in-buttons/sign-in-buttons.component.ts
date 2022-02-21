import { Component, OnInit } from '@angular/core';
import { buttonList } from '../buttonList/buttonList';
import { ButtonModel } from '../buttonModel';

@Component({
  selector: 'app-sign-in-buttons',
  templateUrl: './sign-in-buttons.component.html',
  styleUrls: ['./sign-in-buttons.component.css']
})
export class SignInButtonsComponent {

  buttons: ButtonModel[] = [];

  constructor() {
      for (var button of buttonList) {
          console.log(button);
          this.buttons.push(button);

      }
  }
}



