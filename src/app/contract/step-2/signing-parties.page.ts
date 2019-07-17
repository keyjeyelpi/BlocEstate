import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signing-parties',
  templateUrl: './signing-parties.page.html',
  styleUrls: ['./signing-parties.page.scss'],
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
