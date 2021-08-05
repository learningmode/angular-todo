import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
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
  subscription:Subscription;
  showAddTask:boolean;

  constructor(private uiService:UiService) {
    this.text =" ";
    this.day =" ";
    this.reminder = false;
    this.showAddTask= false;
    this.onAddTask=new EventEmitter();
    this.subscription = this.uiService.onToggle().subscribe(value=>this.showAddTask=value);
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
