import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ShoppingItemModel } from './models/shopping-item-model';
import { TodoItemModel } from './models/todo-item-model';
import { TransactionItemModel} from './models/transaction-item-model';
import { promise } from 'protractor';

const ShoppingItemsKey = '1';
const ToDoListItemsKey = '2';
const TransactionItemsKey = '3';

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
				return this.storage.set(ShoppingItemsKey, items);
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
  // add todo item
  addToDoItem(item: TodoItemModel) : Promise<TodoItemModel>
  {
    return this.storage.get(ToDoListItemsKey).then((items: TodoItemModel[]) => {
			if (items) {
				items.push(item);
				return this.storage.set(ToDoListItemsKey, items);
			} else {
				return this.storage.set(ToDoListItemsKey, [ item ]);
			}
		});
  }
  // get todo items
  getToDoItems() : Promise<TodoItemModel[]> 
  {
    return this.storage.get(ToDoListItemsKey);
  }
  // get todo items for specific list
  getToDoItemsForList(ToDoListId: number) : Promise<TodoItemModel[]> 
  {
    return this.storage.get(ToDoListItemsKey).then((items: TodoItemModel[]) => {
			let newItems: TodoItemModel[];
			for (let i of items) {
				if (i.parentid === ToDoListId) {
					newItems.push(i);
				}
			}
			return newItems;
		});
  }
  // update todo item
  upddateToDoItem(item: TodoItemModel) : Promise<any>
  {
    return this.storage.get(ToDoListItemsKey).then((items: TodoItemModel[]) => {
			if (!items || items.length === 0) {
				return null;
			} else {
				let newItems: TodoItemModel[];
				for (let i of items) {
					if (i.id === item.id) {
						newItems.push(item);
					} else {
						newItems.push(i);
					}
				}
				return this.storage.set(ToDoListItemsKey, newItems);
			}
		});
  }
  // delete a todo item
  deleteToDoItem(id: number) : Promise<any>
  {
    return this.storage.get(ToDoListItemsKey).then((items: TodoItemModel[]) => {
			if (!items || items.length === 0) {
				return null;
			} else {
				let newItems: TodoItemModel[];
				for (let i of items) {
					if (i.id !== id) {
						newItems.push(i);
					}
				}
				return this.storage.set(ToDoListItemsKey, newItems);
			}
		});
  }
  //create a transaction item
  addTransactionItem(item: TransactionItemModel) : Promise<TransactionItemModel>
  {
    return this.storage.get(TransactionItemsKey).then((items: TransactionItemModel[]) => {
			if (items) {
				items.push(item);
				return this.storage.set(TransactionItemsKey, items);
			} else {
				return this.storage.set(TransactionItemsKey, [ item ]);
			}
		});
  }
  // get transaction items
  getTransactionitems() : Promise<TransactionItemModel[]>
  {
    return this.storage.get(TransactionItemsKey);
  }
  // get transaction items for specific list
  getTransactionItemsForList(AccountId: number) : Promise<TransactionItemModel[]>
  {
    return this.storage.get(TransactionItemsKey).then((items: TransactionItemModel[]) => {
      let newItems: TransactionItemModel[];
      for(let i of items)
      {
        if(i.parentid === AccountId)
        {
          newItems.push(i);
        }
      }
      return newItems;
		});
  }
  //Update Transaction item
  updateTransactionItem(item: TransactionItemModel) : Promise<any>
  {
    return this.storage.get(TransactionItemsKey).then((items: TransactionItemModel[]) => {
      if(!items || items.length === 0)
      {
        return null;
      }
      else{
      let newItems: TransactionItemModel[];
      for(let i of items)
      {
        if(i.id === item.id)
        {
          newItems.push(item);
        }
        else{
          newItems.push(i);
        }
      }
      return this.storage.set(TransactionItemsKey,newItems);
      }
		});
  }
  //Delete TransactionItem
  deleteTransactionItem(id: number) : Promise<any>
  {
    return this.storage.get(TransactionItemsKey).then((items: TransactionItemModel[]) => {
      if(!items || items.length === 0)
      {
        return null;
      }
      else{
      let newItems: TransactionItemModel[];
      for(let i of items)
      {
        if(i.id !== id)
        {
          newItems.push(i);
        }
      }
      return this.storage.set(TransactionItemsKey,newItems);
      }
		});
  }
}
