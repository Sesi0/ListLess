import { TransactionItemsComponent } from './../components/balance/transaction-items/transaction-items.component';
import { AccountItemModel } from './../services/models/account-item-model';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { TRANSACTION_TYPE } from '../services/models/transaction-item-model';

@Component({
	selector: 'app-balance',
	templateUrl: 'balance.page.html',
	styleUrls: [ 'balance.page.scss' ]
})
export class BalancePage implements OnInit {
	accounts: AccountItemModel[] = [];

	constructor(private storageService: StorageService) {}

	ngOnInit(): void {
		this.refreshItems();
	}

	refreshItems() {
		this.storageService.getAccounts().then((strAccounts) => {
			this.accounts = strAccounts;
		});
	}

	addAccount() {
		this.storageService.addAccount({
			title: 'Test',
			balance: 10,
			color: 'red',
			id: 0,
			transactions: [
				{ title: 'Item1', id: 0, parentid: 0, transactionType: TRANSACTION_TYPE.INCOME, value: 10 }
			]
		});

		this.refreshItems();
	}

	menuItemPopup(itemID:number) {
		alert("Hi! " + itemID);
	}

	addTransaction(accountid:number) {
		this.storageService.addTransactionItem({title: "Item1", id:0, parentid:0, transactionType: TRANSACTION_TYPE.INCOME, value: 37}, accountid);
		this.refreshItems();
	}
}
