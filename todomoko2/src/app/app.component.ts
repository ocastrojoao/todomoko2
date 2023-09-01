import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    taskText: string | undefined;
    tasks: string[] = [];

    saveTask(): void {
        if (!this.taskText) {
            console.log('no task to save');
            return;
        }
        this.tasks.push(this.taskText);
        this.taskText = undefined;
    }
}

