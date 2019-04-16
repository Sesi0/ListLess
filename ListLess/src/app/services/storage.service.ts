import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ShoppingItemModel } from './models/shopping-item-model';
import { TodoItemModel } from './models/todo-item-model';
import { TransactionItemModel, TRANSACTION_TYPE } from './models/transaction-item-model';
import { ShoppingSectionItemModel } from './models/shopping-section-item-model';
import { TodoSectionItemModel } from './models/todo-section-item-model';
import { AccountItemModel } from './models/account-item-model';

const ShoppingSectionItemsKey = '1';
const ToDoListSectionItemsKey = '2';
const AccountItemsKey = '3';

@Injectable({
	providedIn: 'root'
})
export class StorageService {
	constructor(private storage: Storage) {}
	//Add shopping item
	addShoppingItem(ItemToAdd: ShoppingItemModel, ShoppingListId: number): Promise<any> {
		return this.storage.get(ShoppingSectionItemsKey).then((sections: ShoppingSectionItemModel[]) => {
			if (sections) {
				for (let section of sections) {
					if (section.id === ShoppingListId) {
						if (section.items) {
							ItemToAdd.id = section.items[section.items.length - 1].id + 1;
						} else {
							ItemToAdd.id = 1;
						}
						section.items.push(ItemToAdd);
						section.total = section.total + ItemToAdd.quantity * ItemToAdd.estimatedPrice;
					}
				}
				return this.storage.set(ShoppingSectionItemsKey, sections);
			} else {
				return null;
			}
		});
	}
	// Update a Shopping item
	updateShoppingItem(ItemToUpdate: ShoppingItemModel, ShoppingSectionId: number): Promise<any> {
		return this.storage.get(ShoppingSectionItemsKey).then((sections: ShoppingSectionItemModel[]) => {
			if (sections) {
				let UpdatedItems: ShoppingItemModel[];
				for (let section of sections) {
					if (section.id === ShoppingSectionId) {
						for (let i2 of section.items) {
							if (i2.id === ItemToUpdate.id) {
								UpdatedItems.push(ItemToUpdate);
							} else {
								UpdatedItems.push(i2);
							}
						}
						section.items = UpdatedItems;
						section.total = 0;
						for (let item of section.items) {
							section.total = section.total + item.quantity * item.estimatedPrice;
						}
					}
				}
				return this.storage.set(ShoppingSectionItemsKey, sections);
			} else {
				return null;
			}
		});
	}

	// Delete Shopping Item
	deleteShoppingItem(item: ShoppingItemModel, ShoppingListId: number): Promise<any> {
		return this.storage.get(ShoppingSectionItemsKey).then((sections: ShoppingSectionItemModel[]) => {
			if (sections) {
				let UpdatedList: ShoppingItemModel[];
				for (let section of sections) {
					if (section.id === ShoppingListId) {
						for (let i2 of section.items) {
							if (i2.id !== item.id) {
								UpdatedList.push(i2);
							}
						}
						section.items = UpdatedList;
						section.total = 0;
						for (let item of section.items) {
							section.total = section.total + item.quantity * item.estimatedPrice;
						}
					}
				}
				return this.storage.set(ShoppingSectionItemsKey, sections);
			} else {
				return null;
			}
		});
	}
	// add todo item
	addToDoItem(ItemToAdd: TodoItemModel, ToDoListId: number): Promise<any> {
		return this.storage.get(ToDoListSectionItemsKey).then((sections: TodoSectionItemModel[]) => {
			if (sections) {
				for (let section of sections) {
					if (section.id === ToDoListId) {
						if (section.items) {
							ItemToAdd.id = section.items[section.items.length - 1].id + 1;
						} else {
							ItemToAdd.id = 1;
						}
						section.items.push(ItemToAdd);
					}
				}
				return this.storage.set(ToDoListSectionItemsKey, sections);
			} else {
				return null;
			}
		});
	}
	// update todo item
	upddateToDoItem(ItemToUpdate: TodoItemModel, ToDoListId: number): Promise<any> {
		return this.storage.get(ToDoListSectionItemsKey).then((sections: TodoSectionItemModel[]) => {
			if (sections) {
				let UpdatedList: TodoItemModel[];
				for (let section of sections) {
					if (section.id === ToDoListId) {
						for (let i2 of section.items) {
							if (i2.id === ItemToUpdate.id) {
								UpdatedList.push(ItemToUpdate);
							} else {
								UpdatedList.push(i2);
							}
						}
						section.items = UpdatedList;
					}
				}
				return this.storage.set(ToDoListSectionItemsKey, sections);
			} else {
				return null;
			}
		});
	}
	// delete a todo item
	deleteToDoItem(ItemToDelete: TodoItemModel, ToDoListId: number): Promise<any> {
		return this.storage.get(ToDoListSectionItemsKey).then((sections: TodoSectionItemModel[]) => {
			if (sections) {
				let UpdatedList: TodoItemModel[];
				for (let section of sections) {
					if (section.id === ToDoListId) {
						for (let i2 of section.items) {
							if (i2.id === ItemToDelete.id) {
								UpdatedList.push(ItemToDelete);
							} else {
								UpdatedList.push(i2);
							}
						}
						section.items = UpdatedList;
					}
				}
				return this.storage.set(ToDoListSectionItemsKey, sections);
			} else {
				return null;
			}
		});
	}
	// Get all to do items for current date
	/*getToDoItemsForCurrentDate() : Promise<any>
  {

  }*/
	//create a transaction item
	addTransactionItem(
		TransactionToAdd: TransactionItemModel,
		AccountId: number,
		ToAccountId: number = -1
	): Promise<any> {
		return this.storage.get(AccountItemsKey).then((accounts: AccountItemModel[]) => {
			if (accounts) {
				for (let account of accounts) {
					if (account.id === AccountId) {
						if (account.transactions) {
							TransactionToAdd.id = account.transactions[account.transactions.length - 1].id + 1;
						} else {
							TransactionToAdd.id = 1;
						}

						account.transactions.push(TransactionToAdd);
						if (TransactionToAdd.transactionType === TRANSACTION_TYPE.EXPENSE) {
							account.balance = account.balance - TransactionToAdd.value;
						} else if (TransactionToAdd.transactionType === TRANSACTION_TYPE.INCOME) {
							account.balance = account.balance + TransactionToAdd.value;
						} else if (TransactionToAdd.transactionType === TRANSACTION_TYPE.TRANSFER_TO) {
							account.balance = account.balance + TransactionToAdd.value;
						} else {
							account.balance = account.balance - TransactionToAdd.value;
							let NewTransaction: TransactionItemModel;
							NewTransaction.id = -1;
							NewTransaction.parentid = ToAccountId;
							NewTransaction.title = TransactionToAdd.title;
							NewTransaction.value = TransactionToAdd.value;
							NewTransaction.transactionType = TRANSACTION_TYPE.TRANSFER_TO;
							this.addTransactionItem(NewTransaction, ToAccountId, AccountId);
						}
					}
				}
				return this.storage.set(AccountItemsKey, accounts);
			} else {
				return null;
			}
		});
	}
	//Update Transaction item
	updateTransactionItem(TransactionToUpdate: TransactionItemModel, AccountId: number): Promise<any> {
		return this.storage.get(AccountItemsKey).then((accounts: AccountItemModel[]) => {
			if (accounts) {
				let UpdatedList: TransactionItemModel[];
				for (let account of accounts) {
					if (account.id === AccountId) {
						for (let i2 of account.transactions) {
							if (i2.id === TransactionToUpdate.id) {
								UpdatedList.push(TransactionToUpdate);
							} else {
								UpdatedList.push(i2);
							}
						}
						account.transactions = UpdatedList;
						account.balance = 0;
						for (let transaction of account.transactions) {
							account.balance = account.balance + transaction.value;
						}
					}
				}
				return this.storage.set(AccountItemsKey, accounts);
			} else {
				return null;
			}
		});
	}
	//Delete TransactionItem
	deleteTransactionItem(id: number, AccountId: number): Promise<any> {
		return this.storage.get(AccountItemsKey).then((accounts: AccountItemModel[]) => {
			if (accounts) {
				let UpdatedList: TransactionItemModel[];
				for (let account of accounts) {
					if (account.id === AccountId) {
						for (let i2 of account.transactions) {
							if (i2.id !== id) {
								UpdatedList.push(i2);
							}
						}
						account.transactions = UpdatedList;
					}
				}
				return this.storage.set(AccountItemsKey, accounts);
			} else {
				return null;
			}
		});
	}
	// add Shopping list
	addShoppingList(ShoppingListToAdd: ShoppingSectionItemModel): Promise<ShoppingSectionItemModel> {
		ShoppingListToAdd.id = this.IncrementShoppingList();
		return this.storage.get(ShoppingSectionItemsKey).then((sections: ShoppingSectionItemModel[]) => {
			if (sections) {
				sections.push(ShoppingListToAdd);
				return this.storage.set(ShoppingSectionItemsKey, sections);
			} else {
				return this.storage.set(ShoppingSectionItemsKey, [ ShoppingListToAdd ]);
			}
		});
	}
	// get shopping lsits
	getShoppingLists(): Promise<ShoppingSectionItemModel[]> {
		return this.storage.get(ShoppingSectionItemsKey);
	}
	//update shopping list
	updateShoppingList(ShoppingListToupdate: ShoppingSectionItemModel): Promise<any> {
		return this.storage.get(ShoppingSectionItemsKey).then((sections: ShoppingSectionItemModel[]) => {
			if (!sections || sections.length === 0) {
				return null;
			} else {
				let newItems: ShoppingSectionItemModel[];
				for (let section of sections) {
					if (section.id === ShoppingListToupdate.id) {
						newItems.push(ShoppingListToupdate);
					} else {
						newItems.push(section);
					}
				}
				return this.storage.set(ShoppingSectionItemsKey, newItems);
			}
		});
	}
	//delete Shopping List
	deleteShoppingList(id: number): Promise<any> {
		return this.storage.get(ShoppingSectionItemsKey).then((sections: ShoppingSectionItemModel[]) => {
			if (!sections || sections.length === 0) {
				return null;
			} else {
				let newItems: ShoppingSectionItemModel[];
				for (let section of sections) {
					if (section.id !== id) {
						newItems.push(section);
					}
				}
				return this.storage.set(ShoppingSectionItemsKey, newItems);
			}
		});
	}
	// add ToDo List
	addToDoList(SectionToAdd: TodoSectionItemModel) {
		SectionToAdd.id = this.IncrementToDoList();
		return this.storage.get(ToDoListSectionItemsKey).then((sections: TodoSectionItemModel[]) => {
			if (sections) {
				sections.push(SectionToAdd);
				return this.storage.set(ToDoListSectionItemsKey, sections);
			} else {
				return this.storage.set(ToDoListSectionItemsKey, [ SectionToAdd ]);
			}
		});
	}
	// get ToDo lists
	getToDoLists(): Promise<TodoSectionItemModel[]> {
		return this.storage.get(ToDoListSectionItemsKey);
	}
	// update ToDo lsit
	updateToDoList(SectionToUpdate: TodoSectionItemModel): Promise<any> {
		return this.storage.get(ToDoListSectionItemsKey).then((sections: TodoSectionItemModel[]) => {
			if (!sections || sections.length === 0) {
				return null;
			} else {
				let UpdatedLsit: TodoSectionItemModel[];
				for (let section of sections) {
					if (section.id === SectionToUpdate.id) {
						UpdatedLsit.push(SectionToUpdate);
					} else {
						UpdatedLsit.push(section);
					}
				}
				return this.storage.set(ToDoListSectionItemsKey, UpdatedLsit);
			}
		});
	}
	// delete ToDo list
	deleteToDoList(id: number): Promise<any> {
		return this.storage.get(ToDoListSectionItemsKey).then((sections: TodoSectionItemModel[]) => {
			if (!sections || sections.length === 0) {
				return null;
			} else {
				let UpdatedLsit: TodoSectionItemModel[];
				for (let section of sections) {
					if (section.id !== id) {
						UpdatedLsit.push(section);
					}
				}
				return this.storage.set(ToDoListSectionItemsKey, UpdatedLsit);
			}
		});
	}
	// add an account
	addAccount(AccountToAdd: AccountItemModel): Promise<AccountItemModel> {
		AccountToAdd.id = this.incrementAccounts();
		return this.storage.get(AccountItemsKey).then((accounts: AccountItemModel[]) => {
			if (accounts) {
				accounts.push(AccountToAdd);
				return this.storage.set(AccountItemsKey, accounts);
			} else {
				return this.storage.set(AccountItemsKey, [ AccountToAdd ]);
			}
		});
	}
	// get Accounts
	getAccounts(): Promise<AccountItemModel[]> {
		return this.storage.get(AccountItemsKey);
	}
	//Update an account
	updateAccount(AccountToUpdate: AccountItemModel): Promise<any> {
		return this.storage.get(AccountItemsKey).then((accounts: AccountItemModel[]) => {
			if (!accounts || accounts.length === 0) {
				return null;
			} else {
				let UpdatedLsit: AccountItemModel[];
				for (let account of accounts) {
					if (account.id === AccountToUpdate.id) {
						UpdatedLsit.push(AccountToUpdate);
					} else {
						UpdatedLsit.push(account);
					}
				}
				return this.storage.set(AccountItemsKey, UpdatedLsit);
			}
		});
	}
	//Delete an account
	deleteAccount(id: number): Promise<any> {
		return this.storage.get(AccountItemsKey).then((accounts: AccountItemModel[]) => {
			if (!accounts || accounts.length === 0) {
				return null;
			} else {
				let UpdatedLsit: AccountItemModel[];
				for (let account of accounts) {
					if (account.id === id) {
						UpdatedLsit.push(account);
					}
				}
				return this.storage.set(AccountItemsKey, UpdatedLsit);
			}
		});
	}
	incrementAccounts(): number {
		this.storage.get(AccountItemsKey).then((accounts: AccountItemModel[]) => {
			if (!accounts || accounts.length === 0) {
				return 1;
			} else {
				return accounts[accounts.length - 1].id + 1;
			}
		});
		return 1;
	}
	IncrementShoppingList(): number {
		this.storage.get(ShoppingSectionItemsKey).then((sections: AccountItemModel[]) => {
			if (!sections || sections.length === 0) {
				return 1;
			} else {
				return sections[sections.length - 1].id + 1;
			}
		});
		return 1;
	}
	IncrementToDoList(): number {
		this.storage.get(ToDoListSectionItemsKey).then((sections: AccountItemModel[]) => {
			if (!sections || sections.length === 0) {
				return 1;
			} else {
				return sections[sections.length - 1].id + 1;
			}
		});
		return 1;
	}
}
