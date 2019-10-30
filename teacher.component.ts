import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

@Output()
teacherData : EventEmitter<any> = new EventEmitter<any>()  //creating new event

  constructor() { }

  ngOnInit() {
  }

  emitEvent(){
    this.teacherData.emit(this.teacherData)  //emitting event
  }

}
