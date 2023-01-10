import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {
  message :string="Welcome To LordWin Island"
  constructor(){
  }
  
  ngOnInit(): void {
  }
}
