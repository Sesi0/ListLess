import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ShoppingItemModel } from './models/shopping-item-model';
import { TodoItemModel } from './models/todo-item-model';
import { TransactionItemModel} from './models/transaction-item-model';
import { ShoppingSectionItemModel} from './models/shopping-section-item-model';
import { TodoSectionItemModel } from './models/todo-section-item-model';
import { AccountItemModel } from './models/account-item-model';

const ShoppingSectionItemsKey = "1";
const ToDoListSectionItemsKey = "2";
const AccountItemsKey = "3";

@Injectable({
	providedIn: 'root'
})

export class StorageService {

	constructor(private storage: Storage) {}
	//Add shopping item
	addShoppingItem(item: ShoppingItemModel, ShoppingListId: number): Promise<any> {
		return this.storage.get(ShoppingSectionItemsKey).then((items: ShoppingSectionItemModel[]) => {
			if (items) {
        for (let i of items)
        {
          if(i.id === ShoppingListId)
          {
            i.items.push(item);
          }
        }
        return this.storage.set(ShoppingSectionItemsKey, items);
			} else {
				return null
			}
		});
	}
	// Update a Shopping item
	updateShoppingItem(item: ShoppingItemModel, ShoppingListId: number): Promise<any> {
		return this.storage.get(ShoppingSectionItemsKey).then((items: ShoppingSectionItemModel[]) => {
			if (items) {
        let UpdatedList: ShoppingItemModel[];
        for (let i of items)
        {
          if(i.id === ShoppingListId)
          {
            for(let i2 of i.items)
            {
              if(i2.id === item.id)
              {
                UpdatedList.push(item);
              }
              else{
                UpdatedList.push(i2);
              }
            }
            i.items = UpdatedList;
          }
        }
        return this.storage.set(ShoppingSectionItemsKey, items);
			} else {
				return null
			}
		});
  }
  
	// Delete Shopping Item
	deleteShoppingItem(item: ShoppingItemModel, ShoppingListId: number): Promise<any> {
		return this.storage.get(ShoppingSectionItemsKey).then((items: ShoppingSectionItemModel[]) => {
			if (items) {
        let UpdatedList: ShoppingItemModel[];
        for (let i of items)
        {
          if(i.id === ShoppingListId)
          {
            for(let i2 of i.items)
            {
              if(i2.id !== item.id)
              {
                UpdatedList.push(i2);
              }
            }
            i.items = UpdatedList;
          }
        }
        return this.storage.set(ShoppingSectionItemsKey, items);
			} else {
				return null
			}
		});
  }
  // add todo item
  addToDoItem(item: TodoItemModel, ToDoListId: number) : Promise<any>
  {
    return this.storage.get(ToDoListSectionItemsKey).then((items: TodoSectionItemModel[]) => {
			if (items) {
        for (let i of items)
        {
          if(i.id === ToDoListId)
          {
            i.items.push(item);
          }
        }
        return this.storage.set(ShoppingSectionItemsKey, items);
			} else {
				return null
			}
		});
  }
  // update todo item
  upddateToDoItem(item: TodoItemModel, ToDoListId: number): Promise<any> {
		return this.storage.get(ToDoListSectionItemsKey).then((items: TodoSectionItemModel[]) => {
			if (items) {
        let UpdatedList: TodoItemModel[];
        for (let i of items)
        {
          if(i.id === ToDoListId)
          {
            for(let i2 of i.items)
            {
              if(i2.id === item.id)
              {
                UpdatedList.push(item);
              }
              else{
                UpdatedList.push(i2);
              }
            }
            i.items = UpdatedList;
          }
        }
        return this.storage.set(ToDoListSectionItemsKey, items);
			} else {
				return null
			}
		});
  }
  // delete a todo item
  deleteToDoItem(item: TodoItemModel, ToDoListId: number): Promise<any> {
		return this.storage.get(ToDoListSectionItemsKey).then((items: TodoSectionItemModel[]) => {
			if (items) {
        let UpdatedList: TodoItemModel[];
        for (let i of items)
        {
          if(i.id === ToDoListId)
          {
            for(let i2 of i.items)
            {
              if(i2.id === item.id)
              {
                UpdatedList.push(item);
              }
              else{
                UpdatedList.push(i2);
              }
            }
            i.items = UpdatedList;
          }
        }
        return this.storage.set(ToDoListSectionItemsKey, items);
			} else {
				return null
			}
		});
  }
  //create a transaction item
  addTransactionItem(item: TransactionItemModel, AccountId: number) : Promise<any>
  {
    return this.storage.get(AccountItemsKey).then((items: AccountItemModel[]) => {
			if (items) {
        for (let i of items)
        {
          if(i.id === AccountId)
          {
            i.transactions.push(item);
          }
        }
        return this.storage.set(ShoppingSectionItemsKey, items);
			} else {
				return null
			}
		});
  }
  //Update Transaction item
  updateTransactionItem(item: TransactionItemModel, AccountId: number) : Promise<any>
  {
    return this.storage.get(AccountItemsKey).then((items: AccountItemModel[]) => {
			if (items) {
        let UpdatedList: TransactionItemModel[];
        for (let i of items)
        {
          if(i.id === AccountId)
          {
            for(let i2 of i.transactions)
            {
              if(i2.id === item.id)
              {
                UpdatedList.push(item);
              }
              else{
                UpdatedList.push(i2);
              }
            }
            i.transactions = UpdatedList;
          }
        }
        return this.storage.set(ShoppingSectionItemsKey, items);
			} else {
				return null
			}
		});
  }
  //Delete TransactionItem
  deleteTransactionItem(id: number, AccountId: number) : Promise<any>
  {
    return this.storage.get(AccountItemsKey).then((items: AccountItemModel[]) => {
			if (items) {
        let UpdatedList: TransactionItemModel[];
        for (let i of items)
        {
          if(i.id === AccountId)
          {
            for(let i2 of i.transactions)
            {
              if(i2.id !== id)
              {
                UpdatedList.push(i2);
              }
            }
            i.transactions = UpdatedList;
          }
        }
        return this.storage.set(ShoppingSectionItemsKey, items);
			} else {
				return null
			}
		});
  }
  // add Shopping list
  addShoppingList(item: ShoppingSectionItemModel) : Promise<ShoppingSectionItemModel>
  {
    return this.storage.get(ShoppingSectionItemsKey).then((items: ShoppingSectionItemModel[]) => {
			if (items) {
				items.push(item);
				return this.storage.set(ShoppingSectionItemsKey, items);
			} else {
				return this.storage.set(ShoppingSectionItemsKey, [ item ]);
			}
		});
  }
  // get shopping lsits
  getShoppingLists() : Promise<ShoppingSectionItemModel[]>
  {
    return this.storage.get(ShoppingSectionItemsKey);
  }
  //update shopping list
  updateShoppingList(item: ShoppingSectionItemModel) : Promise<any>
  {
    return this.storage.get(ShoppingSectionItemsKey).then((items: ShoppingSectionItemModel[]) => {
			if (!items || items.length === 0) {
				return null;
			} else {
        let newItems: ShoppingSectionItemModel[];
        for (let i of items)
        {
          if(i.id === item.id)
          {
            newItems.push(item);
          }
          else{
            newItems.push(i);
          }
        }
        return this.storage.set(ShoppingSectionItemsKey, newItems);
			}
		});
  }
  //delete Shopping List
  deleteShoppingList(id: number) : Promise<any>
  {
    return this.storage.get(ShoppingSectionItemsKey).then((items: ShoppingSectionItemModel[]) => {
			if (!items || items.length === 0) {
				return null;
			} else {
        let newItems: ShoppingSectionItemModel[];
        for (let i of items)
        {
          if(i.id !== id)
          {
            newItems.push(i);
          }
        }
        return this.storage.set(ShoppingSectionItemsKey, newItems);
			}
		});
  }
  // add ToDo List
  addToDoList(item: TodoSectionItemModel)
  {
    return this.storage.get(ToDoListSectionItemsKey).then((items: TodoSectionItemModel[]) =>{
      if(items)
      {
        items.push(item);
        return this.storage.set(ToDoListSectionItemsKey, items);
      }
      else{
        return this.storage.set(ToDoListSectionItemsKey, [item]);
      }
    });
  }
  // get ToDo lists
  getToDoLists() : Promise<TodoSectionItemModel>
  {
    return this.storage.get(ToDoListSectionItemsKey);
  }
  // update ToDo lsit
  updateToDoList(item: TodoSectionItemModel) : Promise<any>
  {
    return this.storage.get(ToDoListSectionItemsKey).then((items: TodoSectionItemModel[]) =>{
      if(!items || items.length === 0)
      {
        return null;
      }
      else {
        let UpdatedLsit: TodoSectionItemModel[];
        for(let i of items)
        {
          if(i.id === item.id)
          {
            UpdatedLsit.push(item);
          }
          else{
            UpdatedLsit.push(i);
          }
        }
        return this.storage.set(ToDoListSectionItemsKey,UpdatedLsit);
      }
    });
  }
  // delete ToDo list
  deleteToDoList(id: number) : Promise<any>
  {
    return this.storage.get(ToDoListSectionItemsKey).then((items: TodoSectionItemModel[]) =>{
      if(!items || items.length === 0)
      {
        return null;
      }
      else {
        let UpdatedLsit: TodoSectionItemModel[];
        for(let i of items)
        {
          if(i.id !== id)
          {
            UpdatedLsit.push(i);
          }
        }
        return this.storage.set(ToDoListSectionItemsKey,UpdatedLsit);
      }
    });
  }
  // add an account
  addAccount(item: AccountItemModel) : Promise<AccountItemModel>
  {
    return this.storage.get(AccountItemsKey).then((items: AccountItemModel[]) =>{
      if(items)
      {
        items.push(item);
        return this.storage.set(AccountItemsKey, items);
      }
      else{
        return this.storage.set(AccountItemsKey, [item]);
      }
    });
  }
  // get Accounts
  getAccounts() : Promise<AccountItemModel>
  {
    return this.storage.get(AccountItemsKey);
  }
  //Update an account
  updateAccount(item: AccountItemModel) : Promise<any>
  {
    return this.storage.get(AccountItemsKey).then((items: AccountItemModel[]) =>{
      if(!items || items.length === 0)
      {
        return null;
      }
      else {
        let UpdatedLsit: AccountItemModel[];
        for(let i of items)
        {
          if(i.id === item.id)
          {
            UpdatedLsit.push(item);
          }
          else{
            UpdatedLsit.push(i);
          }
        }
        return this.storage.set(AccountItemsKey,UpdatedLsit);
      }
    });
  }
  //Delete an account
  dleteAccount(id: number) : Promise<any>
  {
    return this.storage.get(AccountItemsKey).then((items: AccountItemModel[]) =>{
      if(!items || items.length === 0)
      {
        return null;
      }
      else {
        let UpdatedLsit: AccountItemModel[];
        for(let i of items)
        {
          if(i.id === id)
          {
            UpdatedLsit.push(i);
          }
        }
        return this.storage.set(AccountItemsKey,UpdatedLsit);
      }
    });
  }
}
