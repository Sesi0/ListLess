import { BaseItemModel } from './base/base-item-model';
export class TodoItemModel implements BaseItemModel {
	id: number;
	title: string;
	parentid: number;
	isFinished: boolean;
	fromDateTime: any;
	toDateTime: any;
	description: string;
}
