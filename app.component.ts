import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  name = 'Vamshi';
  Username = "";
  num1:number=10;
/*
  empDetails={"name":"vamshi","age":20}
  changeName(newName){
    this.Username = newName;
  }

  squarenum(num){
    this.num1 = num*num;
  }
*/
dataFromChild="";

studentData = {}
getDataFromChild(){
  this.studentData={"studentname":"vamshi","studentid":12345}
}

getTeacherData($event){
this.dataFromChild = $event;
}

}
