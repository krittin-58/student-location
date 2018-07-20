import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import { NearbyplaceProvider } from '../../providers/nearbyplace/nearbyplace';


interface Items { }
interface Item { }

declare var google;
/**
 * Generated class for the GooglemapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-googlemap',
  templateUrl: 'googlemap.html',
})
export class GooglemapPage {

  map: any;
  tmplocation: any;
  markers: any;
  placesnearby: any;
  placesmarkers: any;
  tmp: any;

  itemsCollection: AngularFirestoreCollection<Items>; //Firestore collection
  items: Observable<Items[]>; // read collection


  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    public afs: AngularFirestore,
    public nbp: NearbyplaceProvider
  ) {
    this.tmplocation = new google.maps.LatLng(7.892267599999999, 98.38900569999998);
    this.markers = [];
    this.placesmarkers = [];
    this.resetForm();
  }


  resetForm() {
    this.tmp = {};
    this.tmp.title = '';
    this.tmp.lat = '';
    this.tmp.lng = '';
    this.tmp.address = '';
    window.localStorage.removeItem('searchlocation');
  }



  loadMap() {
    let latLng = this.tmplocation;
    let mapOptions = {
      center: latLng,
      scrollwheel: true,
      clickableIcons: true,
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);


    //Click Map getLocation
    google.maps.event.addListener(this.map, 'click', (event) => {

      let place = { lat: event.latLng.lat(), lng: event.latLng.lng() };
      console.log(place);
      window.localStorage.setItem('clicklocation', JSON.stringify(place));
      this.fillFormClick();
    });


    //Autocomplete Search
    let map = this.map;
    var input = document.getElementById('pac-input');
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    var infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
      map: map
    });
    marker.addListener('click', function () {
      infowindow.open(map, marker);
    });

    autocomplete.addListener('place_changed', () => {
      infowindow.close();
      var place = autocomplete.getPlace();

      window.localStorage.setItem('searchlocation', JSON.stringify(place));

      this.fillFormSearch(JSON.stringify(place));

      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
      }

      // Set the position of the marker using the place ID and location.
      marker.setPlace({
        placeId: place.place_id,
        location: place.geometry.location
      });

      infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
        'Place ID: ' + place.place_id + '<br>' +
        place.formatted_address);
      infowindow.open(map, marker);
    });


  }


  checkLocation() {
    let marker = new google.maps.Marker({
      position: this.tmplocation,
      map: this.map,
      title: 'ตำแหน่งปัจจุบัน',
      icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    });
    let infowindow = new google.maps.InfoWindow({
      content: 'พบตำแหน่งแล้ว!',
      LatLng: this.tmplocation
    });
    infowindow.open(this.map, marker);
    setTimeout(() => {
      infowindow.close();
    }, 3000);
    this.markers.push(marker);
    this.map.setCenter(this.tmplocation);
    this.loadPlaceNearby(this.tmplocation);
  }

  loadLocationFromFireStore() {

    this.itemsCollection = this.afs.collection("studentLocation");
    this.items = this.itemsCollection.valueChanges();

    this.items.forEach(element => {
      console.log(element);
      for (let i = 0; i < element.length; i++) {
        this.addMarker(element[i]);
      }

    });
  }

  addMarker(location) {

    console.log(location);
    let tmplocation = new google.maps.LatLng(location.lat, location.lng);
    let title = location.title;
    let marker = new google.maps.Marker({
      position: tmplocation,
      map: this.map,
      title: title

    });

    let infowindow = new google.maps.InfoWindow({
      content: location.title + '<br>' + '<a href="http://maps.google.com/?q=' + location.lat + ',' + location.lng + '" target="_blank">Open map</a>',
      LatLng: tmplocation
    });
    marker.addListener('click', function () {
      infowindow.open(this.map, marker);
      setTimeout(() => {
        infowindow.close();
      }, 5000);
    });
    this.markers.push(marker);
    console.log(this.markers);
  }


  loadPlaceNearby(tmplocation) {
    this.nbp.getPlace(tmplocation)
      .then(data => {
        this.placesnearby = data;

        for (let i = 0; i < this.placesnearby.results.length; i++) {
          console.log(this.placesnearby.results[i]);
          this.addPlaceMarker(this.placesnearby.results[i]);
        }
      });
  }

  addPlaceMarker(place) {

    // let title = location.title;
    let marker = new google.maps.Marker({
      position: place.geometry.location,
      map: this.map,
      icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    });

    let infowindow = new google.maps.InfoWindow({
      content: place.name,
      LatLng: place.geometry.location
    });
    marker.addListener('click', function () {
      infowindow.open(this.map, marker);
      setTimeout(() => {
        infowindow.close();
      }, 3000);
    });
    this.placesmarkers.push(marker);
  }





  fillFormClick() {
    let place = JSON.parse(window.localStorage.getItem('clicklocation'));
    console.log(place);
    this.tmp.title = '';
    this.tmp.lat = place.lat;
    this.tmp.lng = place.lng;
    this.tmp.address = '';
  }


  fillFormSearch(tmp) {
    setTimeout(() => {
      // let place = JSON.parse(window.localStorage.getItem('searchlocation'));
      let place = JSON.parse(tmp);
      console.log(place);
      this.tmp.title = place.name;
      this.tmp.lat = place.geometry.location.lat;
      this.tmp.lng = place.geometry.location.lng;
      this.tmp.address = place.formatted_address;
    }, 1000);

  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'สำเร็จ!',
      subTitle: 'บักทึกข้อมูลเรียบร้อยแล้ว',
      buttons: ['ยืนยัน']
    });
    alert.present();
  }

  operation(tmp) {
    let tmpCollection = this.afs.collection<Item>("studentLocation");
    tmpCollection
      .add(tmp)
      .then(added => {
        console.log(added.id);
        this.tmp = {};
        this.showAlert();
        this.resetForm();
      })
      .catch(e => {
        console.log("Error", e);
      });
  }


  deleteDataFirestore() {
    //
  }
  gotoCurrent() {
    this.map.setCenter(this.tmplocation);
  }

  setMapOnAll(map) {
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(map);
    }
  }

  clearMarkers() {
    this.setMapOnAll(null);
  }

  showMarkers() {
    this.setMapOnAll(this.map);
  }

  ionViewDidLoad() {
    this.loadMap();
    this.checkLocation();
    this.loadLocationFromFireStore();
  }

}
