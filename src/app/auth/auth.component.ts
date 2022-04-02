import { Component } from "@angular/core";

@Component({
    selector: "ebay-auth",
    templateUrl: "auth.component.html"
})

export class AuthComponent { 
    public onSubmit(data:any){
        console.log("Button clicked");
    }


 }