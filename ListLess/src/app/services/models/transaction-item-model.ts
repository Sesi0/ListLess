import { BaseItemModel } from './base/base-item-model';

export enum TRANSACTION_TYPE {
  EXPENSE,
  INCOME,
  TRANSFER_TO,
  TRANSFER_FROM
}

export class TransactionItemModel implements BaseItemModel {
    id: number;
    parentid: number;
    title: string;
    value: number;
    transactionType: TRANSACTION_TYPE;
  }