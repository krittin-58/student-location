import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NearbyplaceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NearbyplaceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NearbyplaceProvider Provider');
  }

  getPlace(tmp) {
    let path = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + tmp.lat() + ',' + tmp.lng() + '&radius=1000&type=atm,food&keyword=food,atm&key=AIzaSyCdTK_xKXAH7QYPTBHv7JU4c9zBZB1Ke64';
    return new Promise(resolve => {
      this.http.get(path)
        .subscribe(data => {
          resolve(data);
        });
    });
  }
  getPlaceData(tmp) {
    let path = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + tmp.lat + ',' + tmp.lng + '&sensor=true&key=AIzaSyCdTK_xKXAH7QYPTBHv7JU4c9zBZB1Ke64';
    return new Promise(resolve => {
      this.http.get(path)
        .subscribe(data => {
          resolve(data);
        });
    });
  }

}
