import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskText: string = '';
  tasks: { text: string, completed: boolean }[] = [];

  get completedTasks() {
    return this.tasks.filter(task => task.completed);
  }

  get uncompletedTasks() {
    return this.tasks.filter(task => !task.completed);
  }

  saveTask(): void {
    if (!this.taskText) {
      console.log('no task to save');
      return;
    }
    this.tasks.push({text: this.taskText, completed: false});
    this.taskText = '';
  }
}

