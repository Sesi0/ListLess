import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BaseItem } from './base/base-item';

const ShoppingItemsKey = "1";
const ToDoListItemsKey = "2";
const TransactinItemsKey = "3";

export class ShoppingItem implements BaseItem
{
  id: number;
  parentShoppingList: number;
  isBought: boolean;
  title: string;
  quantity: number;
  estimatedPrice: number;
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { 
  }
  //Add shopping item
  addShoppingItem(item: ShoppingItem) : Promise<ShoppingItem>
  {
    return this.storage.get(ShoppingItemsKey).then((items: ShoppingItem[]) =>{
      if(items)
      {
        items.push(item);
        return this.storage.set(ShoppingItemsKey, [item]);
      }
      else{
        return this.storage.set(ShoppingItemsKey, [item]);
      }
    });
  }
  // get shoppingitems
  getShoppingItems() : Promise<any>
  {
    return this.storage.get(ShoppingItemsKey);
  }
  // get shopping items for a specific shopping list
  getShoppinglist(ShoppingListId: number)
  {
    return this.storage.get(ShoppingItemsKey).then((items: ShoppingItem[]) =>{
        let newItems: ShoppingItem[];
        for( let i of items)
        {
          if(i.parentShoppingList === ShoppingListId)
          {
            newItems.push(i);
          }
        }
        return newItems;
    });
  }
  // Update a Shopping item
  updateShoppingItem(item: ShoppingItem)
  {
    return this.storage.get(ShoppingItemsKey).then((items: ShoppingItem[]) =>{
      if(!items || items.length === 0)
      {
        return null;
      }
      else{
        let newItems: ShoppingItem[];
        for( let i of items)
        {
          if(i.id === item.id)
          {
            newItems.push(item);
          }
          else{
            newItems.push(i);
          }
        }
        return this.storage.set(ShoppingItemsKey, newItems);
      }
    });
  }
  // Delete Shopping Item
  deleteShoppingItem(id:number)
  {
    return this.storage.get(ShoppingItemsKey).then((items: ShoppingItem[]) =>{
      if(!items || items.length === 0)
      {
        return null;
      }
      else{
        let newItems: ShoppingItem[];
        for( let i of items)
        {
          if(i.id !== id)
          {
            newItems.push(i);
          }
        }
        return this.storage.set(ShoppingItemsKey, newItems);
      }
    });
  }

}
