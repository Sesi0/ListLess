import { ShoppingItemModel } from './../../../services/models/shopping-item-model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-shopping-item',
	templateUrl: './shopping-item.component.html',
	styleUrls: [ './shopping-item.component.scss' ]
})
export class ShoppingItemComponent implements OnInit {
	@Input() item: ShoppingItemModel;

	constructor() {}

	ngOnInit() {}

	removeItem() {
		alert("Hello!");
	}
}
