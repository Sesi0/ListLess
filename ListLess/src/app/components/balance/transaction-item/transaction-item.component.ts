import { Component, OnInit, Input } from '@angular/core';
import { TransactionItemModel } from 'src/app/services/models/transaction-item-model';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.scss'],
})
export class TransactionItemComponent implements OnInit {

  @Input() transaction: TransactionItemModel;

  constructor() { }

  ngOnInit() {}

}
