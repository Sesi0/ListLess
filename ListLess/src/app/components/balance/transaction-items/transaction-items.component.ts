import { StorageService } from './../../../services/storage.service';
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

	sectionMenuWasClicked(itemID: number): void {
			this.onSectionItemMenuClicked.emit([itemID]);
	}

	sectionAddWasClicked(item: TransactionItemModel): void {
		this.onSectionItemAddClicked.emit([item]);
}

	constructor() {
  }

}
