import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product ={
    name :"Iphone 11 Pro",
    price:2500,
  }
  constructor(){
  }
  
  ngOnInit(): void {
  }
}
