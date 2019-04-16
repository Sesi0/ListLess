import { TodoItemModel } from 'src/app/services/models/todo-item-model';
import { Component, OnInit } from '@angular/core';
import { TodoSectionItemModel } from '../services/models/todo-section-item-model';
import { StorageService } from '../services/storage.service';

@Component({
	selector: 'app-todo',
	templateUrl: 'todo.page.html',
	styleUrls: [ 'todo.page.scss' ]
})
export class TodoPage implements OnInit {
	todoSections: TodoSectionItemModel[] = [];
  
  constructor(private storageService: StorageService) { }

	ngOnInit(): void {
    this.refreshItems();
  }
  
  refreshItems() {
    this.storageService.getToDoLists().then((strTodoLists) => {
      this.todoSections = strTodoLists;
    });
  }

  addToDoSection() {
    this.storageService.addToDoList({
      title: 'Test',
      color: 'red',
      id: 0,
      priorityid: 0,
      items: [
        { title: 'Item1', description: 'Description' , id: 0, parentid: 0,  isFinished: false, fromDateTime: new Date(), toDateTime: new Date(), }
      ]
    });

    this.refreshItems();
  }

  addToDo(accountid: number) {
    this.storageService.addToDoItem({ title: 'Item1', description: 'Description', id: 0, parentid: accountid, isFinished: false, fromDateTime: new Date(), toDateTime: new Date(), }, accountid);
    this.refreshItems();
  }

    
  
}
