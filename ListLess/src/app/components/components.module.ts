import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TransactionItemComponent } from './balance/transaction-item/transaction-item.component';
import { TransactionItemsComponent } from './balance/transaction-items/transaction-items.component';

@NgModule({
  declarations: [TransactionItemComponent, TransactionItemsComponent],
  imports: [
    IonicModule,
    CommonModule,
  ],
  exports: [TransactionItemComponent, TransactionItemsComponent]
})
export class ComponentsModule { }
