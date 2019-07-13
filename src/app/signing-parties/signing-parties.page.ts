import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signing-parties',
  templateUrl: './signing-parties.page.html',
  styleUrls: ['./signing-parties.page.scss'],
})
export class SigningPartiesPage implements OnInit {

  public data: any = [{ 'name' : { 'first' : '' , 'last' : '' },'address' : { 'street' : '' , 'city' : '' , 'region' : '' , 'zip' : '' , 'country' : '' } , 'phone' : '' }];

  constructor() { }

  ngOnInit() {
  }

  addSignee() {
    this.data.push({ 'name' : { 'first' : '' , 'last' : '' },'address' : { 'street' : '' , 'city' : '' , 'region' : '' , 'zip' : '' , 'country' : '' } , 'phone' : '' });
  }

  alert() {
    
  }

}
