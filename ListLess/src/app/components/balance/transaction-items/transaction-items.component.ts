import { StorageService } from './../../../services/storage.service';
import { Component, OnInit, Input } from '@angular/core';
import { TransactionItemModel, TRANSACTION_TYPE } from 'src/app/services/models/transaction-item-model';

@Component({
	selector: 'app-transaction-items',
	templateUrl: './transaction-items.component.html',
	styleUrls: [ './transaction-items.component.scss' ]
})
export class TransactionItemsComponent {
	@Input() items: TransactionItemModel[];
	@Input() title: string;

	constructor() {
  }

}
