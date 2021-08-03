import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable,of } from 'rxjs';
import {TASKS} from '../mock-tasks';
import {Task} from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private httpUrl ='http://localhost:5000/tasks';

  constructor(private http:HttpClient) { }

  getTasks():Observable<Task[]>{

    return this.http.get<Task[]>(this.httpUrl);
  }

  deleteTheTask(task:Task):Observable<Task>{
    const url = `${this.httpUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

}
