import { Injectable } from '@angular/core';
import { BaseItem } from './base/base-item';

export class Transaction implements BaseItem {
  title: string;
  icon: string;
  value: number;
  valueColor: string;
}

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  constructor() { }
}
