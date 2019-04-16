import { Transaction } from './../../services/balance.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transaction-items',
  templateUrl: './transaction-items.component.html',
  styleUrls: ['./transaction-items.component.scss'],
})
export class TransactionItemsComponent implements OnInit {

  @Input() items: Transaction[];
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
