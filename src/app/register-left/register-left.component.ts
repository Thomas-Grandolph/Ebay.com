import { Component,} from '@angular/core';
import { buttonList } from '../buttonList/buttonList';
import { ButtonModel } from '../buttonModel';

@Component({
  selector: 'app-register-left',
  templateUrl: './register-left.component.html',
  styleUrls: ['./register-left.component.css']
})
export class RegisterLeftComponent {

  buttons: ButtonModel[] = [];

  constructor() {
      for (var button of buttonList) {
          console.log(button);
          this.buttons.push(button);

      }
    }}
