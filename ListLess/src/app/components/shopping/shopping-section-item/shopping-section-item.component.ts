import { ShoppingItemModel } from './../../../services/models/shopping-item-model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-section-item',
  templateUrl: './shopping-section-item.component.html',
  styleUrls: ['./shopping-section-item.component.scss'],
})
export class ShoppingSectionItemComponent implements OnInit {

  @Input() items: ShoppingItemModel[];
  @Input() title: string;

  constructor() { }

  ngOnInit() {}

}
