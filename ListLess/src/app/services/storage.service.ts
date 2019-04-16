import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ShoppingItemModel } from './models/shopping-item-model';

const ShoppingItemsKey = '1';
const ToDoListItemsKey = '2';
const TransactinItemsKey = '3';

@Injectable({
	providedIn: 'root'
})

export class StorageService {

	constructor(private storage: Storage) {}
	//Add shopping item
	addShoppingItem(item: ShoppingItemModel): Promise<ShoppingItemModel> {
		return this.storage.get(ShoppingItemsKey).then((items: ShoppingItemModel[]) => {
			if (items) {
				items.push(item);
				return this.storage.set(ShoppingItemsKey, [ item ]);
			} else {
				return this.storage.set(ShoppingItemsKey, [ item ]);
			}
		});
	}
	// get shoppingitems
	getShoppingItems(): Promise<ShoppingItemModel[]> {
		return this.storage.get(ShoppingItemsKey);
  }
  
	// get shopping items for a specific shopping list
	getShoppinglist(ShoppingListId: number): Promise<ShoppingItemModel[]> {
		return this.storage.get(ShoppingItemsKey).then((items: ShoppingItemModel[]) => {
			let newItems: ShoppingItemModel[];
			for (let i of items) {
				if (i.parentid === ShoppingListId) {
					newItems.push(i);
				}
			}
			return newItems;
		});
  }
  
	// Update a Shopping item
	updateShoppingItem(item: ShoppingItemModel): Promise<any> {
		return this.storage.get(ShoppingItemsKey).then((items: ShoppingItemModel[]) => {
			if (!items || items.length === 0) {
				return null;
			} else {
				let newItems: ShoppingItemModel[];
				for (let i of items) {
					if (i.id === item.id) {
						newItems.push(item);
					} else {
						newItems.push(i);
					}
				}
				return this.storage.set(ShoppingItemsKey, newItems);
			}
		});
  }
  
	// Delete Shopping Item
	deleteShoppingItem(id: number): Promise<any> {
		return this.storage.get(ShoppingItemsKey).then((items: ShoppingItemModel[]) => {
			if (!items || items.length === 0) {
				return null;
			} else {
				let newItems: ShoppingItemModel[];
				for (let i of items) {
					if (i.id !== id) {
						newItems.push(i);
					}
				}
				return this.storage.set(ShoppingItemsKey, newItems);
			}
		});
	}
}
