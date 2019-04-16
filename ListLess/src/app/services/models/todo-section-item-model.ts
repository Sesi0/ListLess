import { TodoItemModel } from './todo-item-model';
import { BaseItemModel } from './base/base-item-model';

export class TodoSectionItemModel implements BaseItemModel {
	id: number;
	title: string;
	color: string;
	priorityid: number;
	items: TodoItemModel[];
}
