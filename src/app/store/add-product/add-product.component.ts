import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fm-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
addProduct(data:any){
    console.log("You clicked add product")
}
}
