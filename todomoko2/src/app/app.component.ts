import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskText: string = '';
  tasks: { text: string, completed: boolean }[] = [];
  showError: boolean = false;

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
  }
}

