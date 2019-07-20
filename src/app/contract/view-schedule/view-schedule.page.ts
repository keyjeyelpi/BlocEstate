import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-schedule',
  templateUrl: './view-schedule.page.html',
  styleUrls: ['./view-schedule.page.scss'],
})
export class ViewingSchedulePage implements OnInit {

  schedules : any = 
  [
    { "id" : "1" , "image" : "1.jpg" , "location" : "33 West 19th St" , "date" : "Aug. 01" , "time" : "8:30 AM"},
    { "id" : "2" , "image" : "1.jpg" , "location" : "21 East 21th St" , "date" : "Aug. 13" , "time" : "7:00 AM"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
