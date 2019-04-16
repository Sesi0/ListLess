import { NavController } from '@ionic/angular';
import { ShoppingItemModel } from './../services/models/shopping-item-model';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-shopping',
	templateUrl: 'shopping.page.html',
	styleUrls: [ 'shopping.page.scss' ]
})
export class ShoppingPage implements OnInit {
	items: ShoppingItemModel[];
	title: string;

	constructor() {}

	ngOnInit(): void {
		this.title = 'Item List';

		this.items = new Array();

		for (let index = 0; index < 5; index++) {
			this.items.push({
				title: 'Item' + index,
				estimatedPrice: 10,
				id: 0,
				isBought: false,
				parentid: 0,
				quantity: 3
			});
		}
	}
}
