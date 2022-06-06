import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Event } from '../models/event.module';

@Component({
  selector: 'app-first-event-cat',
  templateUrl: './first-event-cat.component.html',
  styleUrls: ['./first-event-cat.component.css']
})
export class FirstEventCatComponent implements OnInit {

  events: Event[] = [  
    new Event('Most Loved By Parents'),  
    new Event('Editor’s Picks This Week'),  
    new Event('Try Something New in 2021')  
  ]; 
  constructor() { }

  ngOnInit(): void {
  }
  customOptions: OwlOptions = { 
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay:true,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }

  // events = [
  //   {heading: 'Most Loved By Parents'},
  //   {heading: 'Editor’s Picks This Week'},
  //   {heading: 'Try Something New in 2021'},
  // ]
}
