import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {Task} from '../../Task';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task>;
  text:string;
  day:string;
  reminder:boolean;
  constructor() {
    this.text =" ";
    this.day =" ";
    this.reminder = false;
    this.onAddTask=new EventEmitter();
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text){
      alert("Please add a task");
      return;
    }
    const newTask ={
      text:this.text,
      day:this.day,
      reminder:this.reminder
    }

    //@todo - emit event
    this.text='';
    this.day='';
    this.reminder=false;

    this.onAddTask.emit(newTask);
  }

}
