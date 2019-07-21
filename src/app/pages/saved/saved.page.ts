import { Component } from '@angular/core';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.page.html',
  styleUrls: ['./saved.page.scss'],
})
export class SavedPage {

  properties = {
    likes: [
      {
        imageUrl: `assets/imgs/etc/property-1.jpg`,
        description: {
          address: `66 Corusant Way, King West, Toronto`,
          price: `$799,999 - Maintenance Fee $420`
        }
      },
      {
        imageUrl: `assets/imgs/etc/property-1.jpg`,
        description: {
          address: `66 Corusant Way, King West, Toronto`,
          price: `$799,999 - Maintenance Fee $420`
        }
      },
    ],
    favorites: [
      {
        imageUrl: `assets/imgs/etc/property-2.jpg`,
        description: {
          address: `66 Corusant Way, King West, Toronto`,
          price: `$799,999 - Maintenance Fee $420`
        }
      },
      {
        imageUrl: `assets/imgs/etc/property-2.jpg`,
        description: {
          address: `66 Corusant Way, King West, Toronto`,
          price: `$799,999 - Maintenance Fee $420`
        }
      },
      {
        imageUrl: `assets/imgs/etc/property-2.jpg`,
        description: {
          address: `66 Corusant Way, King West, Toronto`,
          price: `$799,999 - Maintenance Fee $420`
        }
      },
      {
        imageUrl: `assets/imgs/etc/property-2.jpg`,
        description: {
          address: `66 Corusant Way, King West, Toronto`,
          price: `$799,999 - Maintenance Fee $420`
        }
      },
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
