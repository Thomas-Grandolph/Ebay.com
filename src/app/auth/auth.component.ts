import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";
import { AuthResonse } from "./authResponse";

@Component({
    selector: "ebay-auth",
    templateUrl: "auth.component.html"
})

export class AuthComponent {
    constructor(private authService: AuthService) {

    }
    public onSubmit(data: NgForm) {
        console.log("Button clicked");
        console.log(data.value);
        this.authService.signup(data.value.email, data.value.password).subscribe((data: AuthResonse) => {

            console.log(data);
        },
        error =>{
            console.log(error.error.error.message);
        }
        
        );
    }


}