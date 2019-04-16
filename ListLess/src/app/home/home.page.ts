import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit{


  ngOnInit(): void {
    
  }
  @ViewChild('todo_list') todo_slides: IonSlides;
  @ViewChild('shopping_list') shopping_slides: IonSlides;
  @ViewChild('balance_list') balance_slides: IonSlides;

  slide_options = {
    effect: 'flip'
  };
  
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
 
  nextSlideToDo() {
    this.todo_slides.slideNext();
  }

  prevSlideToDo() {
    this.todo_slides.slidePrev();
  }

  constructor() {
    
  }

}
