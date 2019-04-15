import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  @ViewChild('todo_list') todo_slides: IonSlides;

  todo_slide_options = {
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

  nextSlide() {
    this.todo_slides.slideNext();
  }

  prevSlide() {
    this.todo_slides.slidePrev();
  }

  getToDoArray(){
    return this.todo_list;
  }

  constructor() {
    //this.todo_list = this.todo_list;
  }

}
