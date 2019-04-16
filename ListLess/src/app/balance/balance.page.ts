import { Transaction } from './../services/balance.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-balance',
	templateUrl: 'balance.page.html',
	styleUrls: [ 'balance.page.scss' ]
})
export class BalancePage implements OnInit {

  transactions: Transaction[];
  title: string;
  
  ngOnInit(): void {
		this.title = 'Cash';
		this.transactions = new Array();
		let newtrans = new Transaction();
		newtrans.icon = 'card';
		newtrans.title = 'Item1';
		newtrans.value = 400;
		newtrans.valueColor = 'primary';
		this.transactions.push(newtrans);
    this.transactions.push({ title: 'Item2', icon: 'trash', value: 300, valueColor: 'danger' });
	}

	constructor() {}
}
