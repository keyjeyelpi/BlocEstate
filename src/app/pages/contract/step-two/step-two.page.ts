import { Component, OnInit } from '@angular/core';

@Component( {
  selector : 'app-step-two' ,
  templateUrl : './step-two.page.html' ,
  styleUrls : ['./step-two.page.scss' ] ,
} )
export class StepTwoPage implements OnInit {

  public currentId = 3

  public signees: any = [
    { "id" : "1" , "name" : { "first" : "Kim Joseph" , "last" : "Penaloza" },"address" : { "street" : "315 St Germain Ave " , "city" : "Toronto" , "region" : "Ontario" , "zip" : "M5M 1W4" , "country" : "Canada" } , "phone" : "+1-416-555-0164" },
    { "id" : "2" , "name" : { "first" : "Jan Caleb" , "last" : "Manzano" },"address" : { "street" : "500 Kingston Rd" , "city" : "Toronto" , "region" : "Ontario" , "zip" : "M4L 1V3" , "country" : "Canada" } , "phone" : "+1-416-322-7518" }
  ];

  constructor() { }

  ngOnInit() {
  }

  addSignee() {
    this.signees.push( { "id" : this.currentId , "name" : { "first" : "" , "last" : "" },"address" : { "street" : "" , "city" : "" , "region" : "" , "zip" : "" , "country" : "" } , "phone" : "" } );
    this.currentId++
  }

}
