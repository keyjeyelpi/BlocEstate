import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.page.html',
  styleUrls: ['./step-two.page.scss'],
})
export class SigningPartiesPage implements OnInit {

  public persons: any = [{ "name" : { "first" : "" , "last" : "" },"address" : { "street" : "" , "city" : "" , "region" : "" , "zip" : "" , "country" : "" } , "phone" : "" }];

  constructor() { }

  ngOnInit() {
    this.addSignee();
  }

  addSignee() {
    this.persons.push({ "name" : { "first" : "" , "last" : "" },"address" : { "street" : "" , "city" : "" , "region" : "" , "zip" : "" , "country" : "" } , "phone" : "" });
  }

  alert() {
    
  }

}
