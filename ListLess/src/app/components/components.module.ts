import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TransactionItemComponent } from './balance/transaction-item/transaction-item.component';

@NgModule({
  declarations: [TransactionItemComponent],
  imports: [
    IonicModule,
    CommonModule,
  ],
  exports: [TransactionItemComponent]
})
export class ComponentsModule { }
