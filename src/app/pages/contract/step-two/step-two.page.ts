import { Component, OnInit } from '@angular/core';

@Component( {
  selector : 'app-step-two' ,
  templateUrl : './step-two.page.html' ,
  styleUrls : ['./step-two.page.scss' ] ,
} )
export class StepTwoPage implements OnInit {

  public signees: any = [];

  constructor() { }

  ngOnInit() {
    this.addSignee();
  }

  addSignee() {
    this.signees.push( { "name" : { "first" : "" , "last" : "" },"address" : { "street" : "" , "city" : "" , "region" : "" , "zip" : "" , "country" : "" } , "phone" : "" } );
  }

}
