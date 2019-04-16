import { BaseItemModel } from './base/base-item-model';

export class TransactionItemModel implements BaseItemModel {
    id: number;
    parentid: number;
    title: string;
    icon: string;
    value: number;
    valueColor: string;
  }