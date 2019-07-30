import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.page.html',
  styleUrls: ['./property-details.page.scss'],
})
export class PropertyDetailsPage implements OnInit {

  public propertyDetails: any = [
    {
      "ID": "",
      "ListingID": "",
      "LastUpdated": "Jul. 26, 2019",
      "Businesses": [
        {
          "BusinessType": "",
          "BusinessSubType": "",
          "EstablishedDate": "",
          "Franchise": "",
          "Name": "BlocEstate",
          "OperatingSince": ""
        }
      ],
      "Buildings": [
        {
          "BathroomsTotal": "3",
          "BedroomsTotal": "4",
          "Age": "12",
          "Amenities": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "CeilingHeight": "20ft",
          "ConstructedDate": "Apr. 23, 2010",
          "RenovatedDate": "Apr. 08, 2018",
          "FireplaceTotal": "3",
          "Fixture": "4",
          "Rooms": [
            {
              "Type": "Studio",
              "Width": "15",
              "Level": "2",
              "Length": "30",
              "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis mattis turpis, non volutpat leo congue ultrices. Pellentesque justo velit, fermentum euismod odio pulvinar, mollis laoreet sapien. Aenean a ex id velit mattis placerat non nec enim. Nulla facilisi. Morbi tempus, leo eget efficitur lobortis, libero tortor mollis dui, eget porttitor ex lacus sed odio. Pellentesque id felis commodo, sollicitudin erat nec, molestie odio. Praesent nunc dolor, maximus sed elit vitae, malesuada varius nisi. Fusce at porttitor felis. Vivamus dapibus aliquam orci ut luctus. Ut a accumsan ipsum, sit amet semper nisl. Donec sagittis in magna in sagittis. Nunc non egestas nibh. Ut dapibus mi malesuada mi dapibus efficitur. Fusce sem nibh, sollicitudin et nibh vitae, pharetra posuere risus."
            },
            {
              "Type": "Studio",
              "Width": "15",
              "Level": "2",
              "Length": "30",
              "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis mattis turpis, non volutpat leo congue ultrices. Pellentesque justo velit, fermentum euismod odio pulvinar, mollis laoreet sapien. Aenean a ex id velit mattis placerat non nec enim. Nulla facilisi. Morbi tempus, leo eget efficitur lobortis, libero tortor mollis dui, eget porttitor ex lacus sed odio. Pellentesque id felis commodo, sollicitudin erat nec, molestie odio. Praesent nunc dolor, maximus sed elit vitae, malesuada varius nisi. Fusce at porttitor felis. Vivamus dapibus aliquam orci ut luctus. Ut a accumsan ipsum, sit amet semper nisl. Donec sagittis in magna in sagittis. Nunc non egestas nibh. Ut dapibus mi malesuada mi dapibus efficitur. Fusce sem nibh, sollicitudin et nibh vitae, pharetra posuere risus."
            },
            {
              "Type": "Studio",
              "Width": "15",
              "Level": "2",
              "Length": "30",
              "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis mattis turpis, non volutpat leo congue ultrices. Pellentesque justo velit, fermentum euismod odio pulvinar, mollis laoreet sapien. Aenean a ex id velit mattis placerat non nec enim. Nulla facilisi. Morbi tempus, leo eget efficitur lobortis, libero tortor mollis dui, eget porttitor ex lacus sed odio. Pellentesque id felis commodo, sollicitudin erat nec, molestie odio. Praesent nunc dolor, maximus sed elit vitae, malesuada varius nisi. Fusce at porttitor felis. Vivamus dapibus aliquam orci ut luctus. Ut a accumsan ipsum, sit amet semper nisl. Donec sagittis in magna in sagittis. Nunc non egestas nibh. Ut dapibus mi malesuada mi dapibus efficitur. Fusce sem nibh, sollicitudin et nibh vitae, pharetra posuere risus."
            },
            {
              "Type": "Studio",
              "Width": "14",
              "Level": "2",
              "Length": "28",
              "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis mattis turpis, non volutpat leo congue ultrices. Pellentesque justo velit, fermentum euismod odio pulvinar, mollis laoreet sapien. Aenean a ex id velit mattis placerat non nec enim. Nulla facilisi. Morbi tempus, leo eget efficitur lobortis, libero tortor mollis dui, eget porttitor ex lacus sed odio. Pellentesque id felis commodo, sollicitudin erat nec, molestie odio. Praesent nunc dolor, maximus sed elit vitae, malesuada varius nisi. Fusce at porttitor felis. Vivamus dapibus aliquam orci ut luctus. Ut a accumsan ipsum, sit amet semper nisl. Donec sagittis in magna in sagittis. Nunc non egestas nibh. Ut dapibus mi malesuada mi dapibus efficitur. Fusce sem nibh, sollicitudin et nibh vitae, pharetra posuere risus."
            },
            {
              "Type": "Studio",
              "Width": "10",
              "Level": "2",
              "Length": "20",
              "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis mattis turpis, non volutpat leo congue ultrices. Pellentesque justo velit, fermentum euismod odio pulvinar, mollis laoreet sapien. Aenean a ex id velit mattis placerat non nec enim. Nulla facilisi. Morbi tempus, leo eget efficitur lobortis, libero tortor mollis dui, eget porttitor ex lacus sed odio. Pellentesque id felis commodo, sollicitudin erat nec, molestie odio. Praesent nunc dolor, maximus sed elit vitae, malesuada varius nisi. Fusce at porttitor felis. Vivamus dapibus aliquam orci ut luctus. Ut a accumsan ipsum, sit amet semper nisl. Donec sagittis in magna in sagittis. Nunc non egestas nibh. Ut dapibus mi malesuada mi dapibus efficitur. Fusce sem nibh, sollicitudin et nibh vitae, pharetra posuere risus."
            }
          ],
          "StoriesTotal": "2",
          "SizeExterior": "60m x 40m",
          "SizeInterior": "60m x 40m",
          "Type": "",
          "Land": [
            {
              "SizeTotal": "75m x 50m",
              "ClearedTotal": "75m x 50m",
              "Amenities": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
          ],
          "Agents": [
            {
              "ID": "",
              "Name": "John Doe",
              "Position": "Broker",
              "Addresses": [
                {
                  "StreetAddress": "33 West Constant",
                  "City": "Toronto",
                  "Province": "Ontario",
                  "PostalCode": "3119",
                  "Country": "Canada"
                }
              ],
              "Phones": [
                {
                  "Number": "+1-416-555-0134",
                  "ContactType": "Home"
                }
              ],
              "Websites": [
                {
                  "URL": "https://www.BlocEstate.com",
                  "ContactType": "Company"
                }
              ],
              "Offices": [
                {
                  "Name": "Dummy Organization",
                  "OrganizationType": "Dummy",
                  "Franchisor": "Jane Doe",
                  "Addresses": [
                    {
                      "StreetAddress": "Street",
                      "City": "City",
                      "Province": "Province",
                      "PostalCode": "Postal",
                      "Country": "Country"
                    }
                  ],
                "Phones": [
                  {
                    "Number": "+1-416-555-0134",
                    "ContactType": "Home"
                  }
                ],
                "Websites": [
                  {
                    "URL": "https://www.BlocEstate.com",
                    "ContactType": "Company"
                  }
                ],
                "LastUpdated": ""
                }
              ]
            },
            {
              "ID": "",
              "Name": "John Doe",
              "Position": "Broker",
              "Addresses": [
                {
                  "StreetAddress": "33 West Constant",
                  "City": "Toronto",
                  "Province": "Ontario",
                  "PostalCode": "3119",
                  "Country": "Canada"
                }
              ],
              "Phones": [
                {
                  "Number": "+1-416-555-0134",
                  "ContactType": "Home"
                }
              ],
              "Websites": [
                {
                  "URL": "https://www.BlocEstate.com",
                  "ContactType": "Company"
                }
              ],
              "Offices": [
                {
                  "Name": "Dummy Organization",
                  "OrganizationType": "Dummy",
                  "Franchisor": "Jane Doe",
                  "Addresses": [
                    {
                      "StreetAddress": "Street",
                      "City": "City",
                      "Province": "Province",
                      "PostalCode": "Postal",
                      "Country": "Country"
                    }
                  ],
                "Phones": [
                  {
                    "Number": "+1-416-555-0134",
                    "ContactType": "Home"
                  }
                ],
                "Websites": [
                  {
                    "URL": "https://www.BlocEstate.com",
                    "ContactType": "Company"
                  }
                ],
                "LastUpdated": ""
                }
              ]
            },
            {
              "ID": "",
              "Name": "John Doe",
              "Position": "Broker",
              "Addresses": [
                {
                  "StreetAddress": "33 West Constant",
                  "City": "Toronto",
                  "Province": "Ontario",
                  "PostalCode": "3119",
                  "Country": "Canada"
                }
              ],
              "Phones": [
                {
                  "Number": "+1-416-555-0134",
                  "ContactType": "Home"
                }
              ],
              "Websites": [
                {
                  "URL": "https://www.BlocEstate.com",
                  "ContactType": "Company"
                }
              ],
              "Offices": [
                {
                  "Name": "Dummy Organization",
                  "OrganizationType": "Dummy",
                  "Franchisor": "Jane Doe",
                  "Addresses": [
                    {
                      "StreetAddress": "Street",
                      "City": "City",
                      "Province": "Province",
                      "PostalCode": "Postal",
                      "Country": "Country"
                    }
                  ],
                "Phones": [
                  {
                    "Number": "+1-416-555-0134",
                    "ContactType": "Home"
                  }
                ],
                "Websites": [
                  {
                    "URL": "https://www.BlocEstate.com",
                    "ContactType": "Company"
                  }
                ],
                "LastUpdated": ""
                }
              ]
            }
          ],
          "Address": [
            {
              "StreetAddress": "",
              "City": "",
              "Province": "",
              "PostalCode": "",
              "Country": ""
            }
          ],
          "AlternateUrls": [
            {
              "ID": "",
              "BrochureLink": "",
              "MapLink": "",
              "PhotoLink": "",
              "SoundLink": "",
              "VideoLink": ""
            }
          ],
          "AmenitiesNearby": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis mattis turpis, non volutpat leo congue ultrices. Pellentesque justo velit, fermentum euismod odio pulvinar, mollis laoreet sapien. Aenean a ex id velit mattis placerat non nec enim. Nulla facilisi. ",
          "Features": "Morbi tempus, leo eget efficitur lobortis, libero tortor mollis dui, eget porttitor ex lacus sed odio. Pellentesque id felis commodo, sollicitudin erat nec, molestie odio. Praesent nunc dolor, maximus sed elit vitae, malesuada varius nisi. Fusce at porttitor felis. ",
          "Lease": "Lease Name",
          "LeasePerTime": "N/A",
          "LeasePerUnit": "N/A",
          "LeaseType": "N/A",
          "ListingContractDate": "Oct. 28, 2019",
          "LocationDescription": "Donec sagittis in magna in sagittis. Nunc non egestas nibh. Ut dapibus mi malesuada mi dapibus efficitur. Fusce sem nibh, sollicitudin et nibh vitae, pharetra posuere risus. Vivamus dapibus aliquam orci ut luctus. Ut a accumsan ipsum, sit amet semper nisl.",
          "Machinery": "N/A",
          "MaintenanceFee": "799",
          "OwnershipType": "Broker",
          "ParkingSpaceTotal": "3",
          "Photos": [
            {
              "SequenceID": "1.jpg",
              "Description": "",
              "LastUpdated": ""
            }
          ],
          "Price": "6,000,000",
          "PricePerTime": "",
          "PropertyType": "",
          "PublicRemarks": "",
          "Structure": "",
          "TransactionType": "Online",
          "TotalBuildings": "1",
          "UtilitiesAvailable": [
            {
              "Type": "",
              "Description": ""
            }
          ]
        }
      ]
    }
  ]


  constructor( public modalController : ModalController ) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
