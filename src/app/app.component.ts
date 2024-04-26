import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from './services/tasks.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  listTasks: string[] = [];
  newTask: string = '';

  private _tasksService = inject(TasksService);


  ngOnInit(): void {
    this.listTasks = this._tasksService.getTasks();
  }

  addTask() {
    this._tasksService.addTask(this.newTask);
    this.newTask = '';
    this.listTasks = this._tasksService.getTasks();
  }

  deleteTask(index: number) {
    this._tasksService.deleteTask(index);
    this.listTasks = this._tasksService.getTasks();
  }

}
