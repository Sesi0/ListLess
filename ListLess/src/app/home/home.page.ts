import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Transaction } from '../services/balance.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit{

  @ViewChild('todo_list') todo_slides: IonSlides;
  @ViewChild('shopping_list') shopping_slides: IonSlides;
  @ViewChild('balance_list') balance_slides: IonSlides;

  slide_options = {
    effect: 'flip'
  };
  slide_obj: any;
 todo_list = [
    {
      title: 'List1'
    },
    {
      title: 'List2'
    },
    {
      title: 'List3'
    },
  ];
 
  slideSection(who:number,left:boolean) {
    switch(who){
      case 1:{
        this.slide_obj = this.todo_slides;
        break;
      }
      case 2: {
        this.slide_obj = this.shopping_slides;
        break;
      }
      case 3: {
        this.slide_obj = this.balance_slides;
        break;
      }
      default:{
        this.slide_obj = this.todo_slides;
      }
    }
    
    if(!left){
      this.slide_obj.slideNext();
    }
    else{
      this.slide_obj.slidePrev();
    }
  }

  balance: any;
  todo: any;
  transactions: any;

  ngOnInit(): void { 
    this.transactions = new Array();
    this.todo = new Array();
    this.balance = new Array();
    let todo_list = [
      {
        title: 'List1'
      },
      {
        title: 'List2'
      },
      {
        title: 'List3'
      },
    ];
    this.todo.push(todo_list);
    this.balance.push(todo_list);
    this.transactions.push(todo_list);

    console.log(this.todo);
    console.log(this.balance);
    console.log(this.transactions);
 }

  constructor() {
    
  }

}
