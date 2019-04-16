import { Component, OnInit } from '@angular/core';
import { TransactionItemModel, TRANSACTION_TYPE } from '../services/models/transaction-item-model';

@Component({
	selector: 'app-balance',
	templateUrl: 'balance.page.html',
	styleUrls: [ 'balance.page.scss' ]
})
export class BalancePage implements OnInit {
	transactions: TransactionItemModel[];
	title: string;

	ngOnInit(): void {
		this.title = 'Cash';
		this.transactions = new Array();
		let newtrans = new TransactionItemModel();
		newtrans.icon = 'card';
		newtrans.title = 'Item1';
		newtrans.value = 400;
		newtrans.transactionType = TRANSACTION_TYPE.TRANSFER;
		newtrans.id = 0;
		newtrans.parentid = 0;
		this.transactions.push(newtrans);
		this.transactions.push({
			id: 1,
			parentid: 1,
			title: 'Item2',
			icon: 'appstore',
			value: 300,
			transactionType: TRANSACTION_TYPE.EXPENSE
		});
		this.transactions.push({
			id: 1,
			parentid: 1,
			title: 'Item3',
			icon: 'cash',
			value: 10,
			transactionType: TRANSACTION_TYPE.INCOME
		});
	}

	constructor() {}
}
