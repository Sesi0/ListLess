import { TransactionItemModel } from 'src/app/services/models/transaction-item-model';
import { BaseItemModel } from './base/base-item-model';

export class AccountItemModel implements BaseItemModel {
	id: number;
	title: string;
    balance: number;
    color: string;
    transactions: TransactionItemModel[];
}
