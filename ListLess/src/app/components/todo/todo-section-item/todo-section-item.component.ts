import { Component, OnInit, Input } from '@angular/core';
import { TodoItemModel } from 'src/app/services/models/todo-item-model';

@Component({
  selector: 'app-todo-section-item',
  templateUrl: './todo-section-item.component.html',
  styleUrls: ['./todo-section-item.component.scss'],
})
export class TodoSectionItemComponent implements OnInit {

  @Input() items: TodoItemModel[];
  @Input() title: string;
  
  constructor() { }

  ngOnInit() {}

}
