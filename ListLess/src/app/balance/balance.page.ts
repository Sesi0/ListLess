import { Component } from '@angular/core';
import { Transaction } from '../services/balance.service';

@Component({
	selector: 'app-balance',
	templateUrl: 'balance.page.html',
	styleUrls: [ 'balance.page.scss' ]
})
export class BalancePage {
  transaction: Transaction;

  constructor() {
    this.transaction = new Transaction();
    this.transaction.title = "Debit Card to Cash";
    this.transaction.icon = "card";
    this.transaction.value = 400;
    this.transaction.valueColor = "primary";
  }
}

