import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TransactionItemComponent } from './balance/transaction-item/transaction-item.component';
import { TransactionItemsComponent } from './balance/transaction-items/transaction-items.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { TodoSectionItemComponent } from './todo/todo-section-item/todo-section-item.component';

@NgModule({
  declarations: [TransactionItemComponent, TransactionItemsComponent, TodoItemComponent, TodoSectionItemComponent],
  imports: [
    IonicModule,
    CommonModule,
  ],
  exports: [TransactionItemComponent, TransactionItemsComponent, TodoItemComponent, TodoSectionItemComponent]
})
export class ComponentsModule { }
