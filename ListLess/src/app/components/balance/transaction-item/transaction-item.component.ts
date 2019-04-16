import { Transaction } from './../../../services/balance.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.scss'],
})
export class TransactionItemComponent implements OnInit {

  @Input() transaction: Transaction;

  constructor() { }

  ngOnInit() {}

}
