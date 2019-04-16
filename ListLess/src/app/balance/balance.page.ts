import { TransactionItemsComponent } from './../components/balance/transaction-items/transaction-items.component';
import { AccountItemModel } from './../services/models/account-item-model';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { TRANSACTION_TYPE, TransactionItemModel } from '../services/models/transaction-item-model';

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

	async addAccount() {
		await this.storageService.addAccount({
			title: 'Test',
			balance: 10,
			color: 'red',
			id: 0,
			transactions: []
		});

		this.refreshItems();
	}

	async menuSectionItemPopup(ev) {
		const popoverController = document.querySelector('ion-popover-controller');
		await popoverController.componentOnReady();

		const popover = await popoverController.create({
			component: 'app-balance-menu-popupe',
			event: ev,
			translucent: true
		});

		return await popover.present();
	}

	async addTransaction(accountid: number) {
		await this.storageService.addTransactionItem(
			{ title: 'Item1', id: 0, parentid: accountid, transactionType: TRANSACTION_TYPE.INCOME, value: 37 },
			accountid
		);
		
		this.refreshItems();
	}
}
