import { AccountItemModel } from './../../../services/models/account-item-model';
import { TransactionItemComponent } from './../transaction-item/transaction-item.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TransactionItemModel, TRANSACTION_TYPE } from 'src/app/services/models/transaction-item-model';

@Component({
	selector: 'app-transaction-items',
	templateUrl: './transaction-items.component.html',
	styleUrls: [ './transaction-items.component.scss' ]
})
export class TransactionItemsComponent {
	@Input() items: TransactionItemModel[];
	@Input() title: string;
	@Input() id: number;

	@Output() onSectionItemMenuClicked: EventEmitter<any> = new EventEmitter();
	@Output() onSectionItemAddClicked: EventEmitter<any> = new EventEmitter();

	sectionAddWasClicked(item: TransactionItemModel): void {
		this.onSectionItemAddClicked.emit([ item ]);
	}

	sectionMenuWasClicked(item: AccountItemModel): void {
		this.onSectionItemMenuClicked.emit([ item ]);
	}

	constructor() {}
}
