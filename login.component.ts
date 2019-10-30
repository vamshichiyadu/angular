import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  imageUrl = "assets/Angular_full_color_logo.png";
  name = "";
  password="";
  successmessage="";
  errormessage="";
  showform=true;

  fruits=["apple","banana","mango"]

  employees=[
    {name:"vamshi",id:11111},
    {name:"Rahul",id:22222},
    {name:"Hemanth",id:33333}
  ]
  constructor() { }

  ngOnInit() {
  }

  login(){
    if(this.name == "admin" && this.password == "admin"){
      this.successmessage = "successfully logged in";
      this.errormessage="";
    }
    else {this.errormessage = "failed to login";
    this.successmessage="";}
  }

  show(){
    this.showform=false;
  }

  hide(){
    this.showform=true;
  }

}
