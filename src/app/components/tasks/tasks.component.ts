import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import {Task} from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks:Task[] ;

  constructor(private taskService:TaskService) {

    this.tasks =[];
   }

  ngOnInit(): void {
     this.taskService.getTasks().subscribe((tasks)=>{
      return this.tasks = tasks;
    });
  }

  deleteTheTask(task:Task){
    this.taskService.deleteTheTask(task).subscribe(()=>{
      return this.tasks = this.tasks.filter(t => t.id !== task.id);
    });
  }
}
