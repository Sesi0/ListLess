import { ListItemComponent } from './../app/components/list-item/list-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ListItemComponent],
  imports: [
    IonicModule,
    CommonModule,
  ],
  exports: [ListItemComponent]
})
export class ComponentsModule { }
