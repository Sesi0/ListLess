import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

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

 }

  constructor() {
    
  }

}
