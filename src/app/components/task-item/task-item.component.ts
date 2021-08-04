import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Task} from '../../Task';
import { faTimes} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task:Task;
  @Output() onDeleteTask:EventEmitter<Task>;
  @Output() onToggleReminder:EventEmitter<Task>;
  faTimes:any;

  constructor() {
    this.task ={
                text: " ",
                day:" ",
                reminder: true
              };
    this.faTimes = faTimes;
    this.onDeleteTask = new EventEmitter();
    this.onToggleReminder = new EventEmitter();
  }

  ngOnInit(): void {
  }

  deleteTask(item:Task){
    this.onDeleteTask.emit(item);
  }

  onToggle(task:Task){
      this.onToggleReminder.emit(task);
  }
}
