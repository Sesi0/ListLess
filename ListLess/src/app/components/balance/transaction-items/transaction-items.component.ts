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

	sectionAddWasClicked(itemId: number): void {
		this.onSectionItemAddClicked.emit([ itemId ]);
	}

	sectionMenuWasClicked(event: any): void {
		this.onSectionItemMenuClicked.emit([ event ]);
	}

	constructor() {}
}
