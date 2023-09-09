import {Component, OnInit} from '@angular/core';
import {Task} from "./interfaces/task.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  taskText: string = '';
  tasks: Task[] = [];
  showError: boolean = false;

  ngOnInit() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }

  get completedTasks() {
    return this.tasks.filter(task => task.completed);
  }

  get uncompletedTasks() {
    return this.tasks.filter(task => !task.completed);
  }

  saveTask(): void {
    if (!this.taskText) {
      this.showError = true;
      return;
    }
    this.tasks.push({text: this.taskText, completed: false});
    this.taskText = '';
    this.showError = false;

    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  deleteTask(task: Task): void {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }
}


