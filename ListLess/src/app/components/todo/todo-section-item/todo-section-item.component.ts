import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoItemModel } from 'src/app/services/models/todo-item-model';
import { TransactionItemModel } from 'src/app/services/models/transaction-item-model';

@Component({
  selector: 'app-todo-section-item',
  templateUrl: './todo-section-item.component.html',
  styleUrls: ['./todo-section-item.component.scss'],
})
export class TodoSectionItemComponent implements OnInit {

  @Input() items: TodoItemModel[];
  @Input() title: string;
  @Input() id: number;

  @Output() onSectionItemMenuClicked: EventEmitter<any> = new EventEmitter();
  @Output() onSectionItemAddClicked: EventEmitter<any> = new EventEmitter();

  
  constructor() { }

  sectionAddWasClicked(item: TodoItemModel): void {
    this.onSectionItemAddClicked.emit([item]);
  }

  sectionMenuWasClicked(item: TodoItemModel): void {
    this.onSectionItemMenuClicked.emit([item]);
  }

  ngOnInit() {}

}
