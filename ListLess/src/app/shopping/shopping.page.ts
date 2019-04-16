import { NavController } from '@ionic/angular';
import { ShoppingItemModel } from './../services/models/shopping-item-model';
import { Component, OnInit } from '@angular/core';
import { ShoppingSectionItemModel } from '../services/models/shopping-section-item-model';
import { StorageService } from '../services/storage.service';

@Component({
	selector: 'app-shopping',
	templateUrl: 'shopping.page.html',
	styleUrls: [ 'shopping.page.scss' ]
})
export class ShoppingPage implements OnInit {
	sections: ShoppingSectionItemModel[] = [];

	constructor(private storageService: StorageService) {}

	ngOnInit(): void {
		this.refreshItems();
	}

	refreshItems() {
		this.storageService.getShoppingLists().then((strShoppingLists) => {
			this.sections = strShoppingLists;
		});
	}

	addShoppingList() {
		this.storageService.addShoppingList({
			title: 'Test',
			total: 10,
			color: 'red',
			id: 0,
			priorityid: 0,
			items: [
				{ title: 'Item1', id: 0, parentid: 0, quantity: 1, estimatedPrice: 10, isBought: false }
			]
		});
		this.refreshItems();
	}
}
