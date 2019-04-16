import { BaseItemModel } from './base/base-item-model';

export class ShoppingItemModel implements BaseItemModel
{
  id: number;
  parentid: number;
  title: string;
  isBought: boolean;
  quantity: number;
  estimatedPrice: number;
}