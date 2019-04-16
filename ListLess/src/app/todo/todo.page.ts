import { TodoItemModel } from 'src/app/services/models/todo-item-model';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-todo',
	templateUrl: 'todo.page.html',
	styleUrls: [ 'todo.page.scss' ]
})
export class TodoPage implements OnInit {
	todos: TodoItemModel[];
  title: string;

	ngOnInit(): void {
    this.title = "Item List";

    this.todos = new Array();

    for (let index = 0; index < 5; index++) {
      this.todos.push({
        title: 'Item' + index,
        description: 'none',
        fromDateTime: new Date(),
        id: 0,
        isFinished: false,
        parentid: 0,
        toDateTime: new Date()
      });
      
    }
    
	}
}
