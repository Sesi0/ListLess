import { BaseItemModel } from './base/base-item-model';
import { ShoppingItemModel } from './shopping-item-model';

export class ShoppingSectionItemModel implements BaseItemModel {
	id: number;
    title: string;
    total: number;
    color: string;
    priorityid: number;
    items: ShoppingItemModel[];
}
