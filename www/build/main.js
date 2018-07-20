webpackJsonp([2],{

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';







;
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(auth, platform, fb, afs, googlePlus) {
        this.auth = auth;
        this.platform = platform;
        this.fb = fb;
        this.afs = afs;
        this.googlePlus = googlePlus;
    }
    AuthProvider.prototype.checkAuthen = function () {
        var _this = this;
        this.auth.authState.subscribe(function (user) {
            console.log(user);
            if (!user) {
                _this.user = null;
            }
            else {
                _this.user = user;
                _this.userCollection = _this.afs.collection("user", function (ref) {
                    return ref.where("email", "==", user.email);
                }); //ref()
                _this.items = _this.userCollection.valueChanges();
                _this.items.forEach(function (element) {
                    console.log(element);
                    if (element[0] != null) {
                        _this.money = element[0].money;
                    }
                    else {
                        _this.money = null;
                    }
                    console.log(_this.money);
                });
            }
        });
    };
    AuthProvider.prototype.signInWithFacebook = function () {
        var _this = this;
        if (this.platform.is("cordova")) {
            return new Promise(function (resolve, reject) {
                _this.fb
                    .login(["public_profile", "user_friends", "email"])
                    .then(function (res) {
                    console.log("Logged into Facebook!", res);
                    __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]()
                        .signInWithCredential(__WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].FacebookAuthProvider.credential(res.authResponse.accessToken))
                        .then(function (success) {
                        console.log("Firebase success", success);
                        resolve(true);
                    })
                        .catch(function (err) {
                        console.log("Firebase error", err);
                        reject(false);
                    });
                })
                    .catch(function (err) {
                    console.log("Error logging into Facebook", err);
                    reject(false);
                });
            });
        }
        else {
            return this.auth.auth
                .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].FacebookAuthProvider())
                .then(function (res) { return console.log(res); });
        }
    };
    AuthProvider.prototype.signInWithGoogle = function () {
        var _this = this;
        if (this.platform.is("cordova")) {
            return new Promise(function (resolve, reject) {
                _this.googlePlus.login({})
                    .then(function (res) {
                    console.log("Logged into Google!", res);
                    __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]()
                        .signInWithCredential(__WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider.credential(null, res.accessToken))
                        .then(function (success) {
                        console.log("Google success", success);
                        resolve(true);
                    })
                        .catch(function (err) {
                        console.log("Google error", err);
                        reject(false);
                    });
                })
                    .catch(function (err) {
                    console.log("Error logging into Google", err);
                    reject(false);
                });
            });
        }
        else {
            return this.auth.auth
                .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider())
                .then(function (res) { return console.log(res); });
        }
    };
    AuthProvider.prototype.signOut = function () {
        this.auth.auth.signOut();
        this.googlePlus.logout();
        this.fb.logout();
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__["a" /* GooglePlus */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









;
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, auth, platform, fb, afs, googlePlus, authP) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.platform = platform;
        this.fb = fb;
        this.afs = afs;
        this.googlePlus = googlePlus;
        this.authP = authP;
        this.auth.authState.subscribe(function (user) {
            console.log(user);
            if (!user) {
                _this.user = null;
            }
            else {
                _this.user = user;
                _this.userCollection = _this.afs.collection("user", function (ref) {
                    return ref.where("email", "==", user.email);
                }); //ref()
                _this.items = _this.userCollection.valueChanges();
                _this.items.forEach(function (element) {
                    console.log(element);
                    if (element[0] != null) {
                        _this.money = element[0].money;
                    }
                    else {
                        _this.money = null;
                    }
                    console.log(_this.money);
                });
            }
        });
        this.authP.checkAuthen();
        // this.auth.authState.subscribe(user => {
        //   console.log(user);
        //   if (!user) {
        //     this.user = null;
        //   }
        //   else {
        //     this.user = user;
        //     this.userCollection = this.afs.collection("user", ref =>
        //       ref.where("email", "==", user.email)
        //     ); //ref()
        //     this.items = this.userCollection.valueChanges();
        //     this.items.forEach(element => {
        //       console.log(element);
        //       if (element[0] != null) {
        //         this.money = element[0].money;
        //       }
        //       else {
        //         this.money = null;
        //       }
        //       console.log(this.money);
        //     });
        //   }
        // });
    }
    LoginPage.prototype.signInWithFacebookP = function () {
        this.authP.signInWithFacebook();
        this.authP.checkAuthen();
    };
    LoginPage.prototype.signInWithGoogleP = function () {
        this.authP.signInWithGoogle();
        this.authP.checkAuthen();
    };
    LoginPage.prototype.signInWithFacebook = function () {
        var _this = this;
        if (this.platform.is("cordova")) {
            return new Promise(function (resolve, reject) {
                _this.fb
                    .login(["public_profile", "user_friends", "email"])
                    .then(function (res) {
                    console.log("Logged into Facebook!", res);
                    __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]()
                        .signInWithCredential(__WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].FacebookAuthProvider.credential(res.authResponse.accessToken))
                        .then(function (success) {
                        console.log("Firebase success", success);
                        resolve(true);
                    })
                        .catch(function (err) {
                        console.log("Firebase error", err);
                        reject(false);
                    });
                })
                    .catch(function (err) {
                    console.log("Error logging into Facebook", err);
                    reject(false);
                });
            });
        }
        else {
            return this.auth.auth
                .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].FacebookAuthProvider())
                .then(function (res) { return console.log(res); });
        }
    };
    LoginPage.prototype.signInWithGoogle = function () {
        var _this = this;
        if (this.platform.is("cordova")) {
            return new Promise(function (resolve, reject) {
                _this.googlePlus.login({})
                    .then(function (res) {
                    console.log("Logged into Google!", res);
                    __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]()
                        .signInWithCredential(__WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider.credential(null, res.accessToken))
                        .then(function (success) {
                        console.log("Google success", success);
                        resolve(true);
                    })
                        .catch(function (err) {
                        console.log("Google error", err);
                        reject(false);
                    });
                })
                    .catch(function (err) {
                    console.log("Error logging into Google", err);
                    reject(false);
                });
            });
        }
        else {
            return this.auth.auth
                .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider())
                .then(function (res) { return console.log(res); });
        }
    };
    LoginPage.prototype.signOut = function () {
        this.auth.auth.signOut();
        this.googlePlus.logout();
        this.fb.logout();
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/krittinj/Desktop/work/student-map/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Log in</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <button *ngIf="user == null" ion-button icon-left block clear (click)="signInWithFacebookP()">\n    <ion-icon name="logo-facebook"></ion-icon>\n    Sign in with Facebook\n  </button>\n  <button *ngIf="user == null" ion-button icon-left block clear (click)="signInWithGoogleP()">\n    <ion-icon name="logo-google"></ion-icon>\n    Sign in with Google\n  </button>\n\n  <p align="center" *ngIf="user != null">Welcome {{user.displayName}}\n    <br>\n    <span *ngIf="money"> Money: {{money}} </span>\n  </p>\n  <button *ngIf="user != null" ion-button icon-left block clear (click)="signOut()">\n    Sign Out\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/krittinj/Desktop/work/student-map/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__["a" /* AuthProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GooglemapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_nearbyplace_nearbyplace__ = __webpack_require__(238);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the GooglemapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GooglemapPage = /** @class */ (function () {
    function GooglemapPage(navCtrl, alertCtrl, navParams, afs, nbp) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.afs = afs;
        this.nbp = nbp;
        this.tmplocation = new google.maps.LatLng(7.892267599999999, 98.38900569999998);
        this.markers = [];
        this.placesmarkers = [];
        this.resetForm();
    }
    GooglemapPage.prototype.resetForm = function () {
        this.tmp = {};
        this.tmp.title = '';
        this.tmp.lat = '';
        this.tmp.lng = '';
        this.tmp.address = '';
        window.localStorage.removeItem('searchlocation');
    };
    GooglemapPage.prototype.loadMap = function () {
        var _this = this;
        var latLng = this.tmplocation;
        var mapOptions = {
            center: latLng,
            scrollwheel: true,
            clickableIcons: true,
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
        //Click Map getLocation
        google.maps.event.addListener(this.map, 'click', function (event) {
            var place = { lat: event.latLng.lat(), lng: event.latLng.lng() };
            console.log(place);
            window.localStorage.setItem('clicklocation', JSON.stringify(place));
            _this.fillFormClick();
        });
        //Autocomplete Search
        var map = this.map;
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
        autocomplete.addListener('place_changed', function () {
            infowindow.close();
            var place = autocomplete.getPlace();
            window.localStorage.setItem('searchlocation', JSON.stringify(place));
            _this.fillFormSearch(JSON.stringify(place));
            if (place.geometry.viewport) {
                map.fitBounds(place.geometry.viewport);
            }
            else {
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
    };
    GooglemapPage.prototype.checkLocation = function () {
        var marker = new google.maps.Marker({
            position: this.tmplocation,
            map: this.map,
            title: 'ตำแหน่งปัจจุบัน',
            icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
        });
        var infowindow = new google.maps.InfoWindow({
            content: 'พบตำแหน่งแล้ว!',
            LatLng: this.tmplocation
        });
        infowindow.open(this.map, marker);
        setTimeout(function () {
            infowindow.close();
        }, 3000);
        this.markers.push(marker);
        this.map.setCenter(this.tmplocation);
        this.loadPlaceNearby(this.tmplocation);
    };
    GooglemapPage.prototype.loadLocationFromFireStore = function () {
        var _this = this;
        this.itemsCollection = this.afs.collection("studentLocation");
        this.items = this.itemsCollection.valueChanges();
        this.items.forEach(function (element) {
            console.log(element);
            for (var i = 0; i < element.length; i++) {
                _this.addMarker(element[i]);
            }
        });
    };
    GooglemapPage.prototype.addMarker = function (location) {
        console.log(location);
        var tmplocation = new google.maps.LatLng(location.lat, location.lng);
        var title = location.title;
        var marker = new google.maps.Marker({
            position: tmplocation,
            map: this.map,
            title: title
        });
        var infowindow = new google.maps.InfoWindow({
            content: location.title + '<br>' + '<a href="http://maps.google.com/?q=' + location.lat + ',' + location.lng + '" target="_blank">Open map</a>',
            LatLng: tmplocation
        });
        marker.addListener('click', function () {
            infowindow.open(this.map, marker);
            setTimeout(function () {
                infowindow.close();
            }, 5000);
        });
        this.markers.push(marker);
        console.log(this.markers);
    };
    GooglemapPage.prototype.loadPlaceNearby = function (tmplocation) {
        var _this = this;
        this.nbp.getPlace(tmplocation)
            .then(function (data) {
            _this.placesnearby = data;
            for (var i = 0; i < _this.placesnearby.results.length; i++) {
                console.log(_this.placesnearby.results[i]);
                _this.addPlaceMarker(_this.placesnearby.results[i]);
            }
        });
    };
    GooglemapPage.prototype.addPlaceMarker = function (place) {
        // let title = location.title;
        var marker = new google.maps.Marker({
            position: place.geometry.location,
            map: this.map,
            icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
        });
        var infowindow = new google.maps.InfoWindow({
            content: place.name,
            LatLng: place.geometry.location
        });
        marker.addListener('click', function () {
            infowindow.open(this.map, marker);
            setTimeout(function () {
                infowindow.close();
            }, 3000);
        });
        this.placesmarkers.push(marker);
    };
    GooglemapPage.prototype.fillFormClick = function () {
        var place = JSON.parse(window.localStorage.getItem('clicklocation'));
        console.log(place);
        this.tmp.title = '';
        this.tmp.lat = place.lat;
        this.tmp.lng = place.lng;
        this.tmp.address = '';
    };
    GooglemapPage.prototype.fillFormSearch = function (tmp) {
        var _this = this;
        setTimeout(function () {
            // let place = JSON.parse(window.localStorage.getItem('searchlocation'));
            var place = JSON.parse(tmp);
            console.log(place);
            _this.tmp.title = place.name;
            _this.tmp.lat = place.geometry.location.lat;
            _this.tmp.lng = place.geometry.location.lng;
            _this.tmp.address = place.formatted_address;
        }, 1000);
    };
    GooglemapPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'สำเร็จ!',
            subTitle: 'บักทึกข้อมูลเรียบร้อยแล้ว',
            buttons: ['ยืนยัน']
        });
        alert.present();
    };
    GooglemapPage.prototype.operation = function (tmp) {
        var _this = this;
        var tmpCollection = this.afs.collection("studentLocation");
        tmpCollection
            .add(tmp)
            .then(function (added) {
            console.log(added.id);
            _this.tmp = {};
            _this.showAlert();
            _this.resetForm();
        })
            .catch(function (e) {
            console.log("Error", e);
        });
    };
    GooglemapPage.prototype.deleteDataFirestore = function () {
        //
    };
    GooglemapPage.prototype.gotoCurrent = function () {
        this.map.setCenter(this.tmplocation);
    };
    GooglemapPage.prototype.setMapOnAll = function (map) {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
        }
    };
    GooglemapPage.prototype.clearMarkers = function () {
        this.setMapOnAll(null);
    };
    GooglemapPage.prototype.showMarkers = function () {
        this.setMapOnAll(this.map);
    };
    GooglemapPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
        this.checkLocation();
        this.loadLocationFromFireStore();
    };
    GooglemapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-googlemap',template:/*ion-inline-start:"/Users/krittinj/Desktop/work/student-map/src/pages/googlemap/googlemap.html"*/'<!--\n  Generated template for the GooglemapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>แผนที่แสดงตำแหน่งบ้านนักเรียน</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div id="floating-panel">\n    <button ion-button (click)="clearMarkers();">Hide Markers</button>\n    <button ion-button (click)="showMarkers();">Show All Markers</button>\n    <button ion-button (click)="gotoCurrent();">Current Location</button>\n  </div>\n\n  <div>\n    <input id="pac-input" class="controls" type="text" placeholder="ค้นหาอัตโนมัติด้วย keyword">\n  </div>\n\n  <div id="map" style="height:500px"></div>\n  <br>\n  <form (ngSubmit)="operation(tmp)"></form>\n  <ion-item>\n    <ion-label>ชื่อสถานที่</ion-label>\n    <ion-input type="text" [(ngModel)]="tmp.title"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Latitude</ion-label>\n    <ion-input readonly="true" type="text" [(ngModel)]="tmp.lat"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Longitude</ion-label>\n    <ion-input readonly="true" type="text" [(ngModel)]="tmp.lng"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Address</ion-label>\n    <ion-input type="text" [(ngModel)]="tmp.address"></ion-input>\n  </ion-item>\n\n  <div padding>\n    <button (click)="operation(tmp)" ion-button block>บันทึกข้อมูล</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/krittinj/Desktop/work/student-map/src/pages/googlemap/googlemap.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_3__providers_nearbyplace_nearbyplace__["a" /* NearbyplaceProvider */]])
    ], GooglemapPage);
    return GooglemapPage;
}());

//# sourceMappingURL=googlemap.js.map

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 170;

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/googlemap/googlemap.module": [
		440,
		1
	],
	"../pages/login/login.module": [
		439,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 213;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NearbyplaceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the NearbyplaceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NearbyplaceProvider = /** @class */ (function () {
    function NearbyplaceProvider(http) {
        this.http = http;
        console.log('Hello NearbyplaceProvider Provider');
    }
    NearbyplaceProvider.prototype.getPlace = function (tmp) {
        var _this = this;
        var path = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + tmp.lat() + ',' + tmp.lng() + '&radius=1000&type=atm,food&keyword=food,atm&key=AIzaSyCdTK_xKXAH7QYPTBHv7JU4c9zBZB1Ke64';
        return new Promise(function (resolve) {
            _this.http.get(path)
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    NearbyplaceProvider.prototype.getPlaceData = function (tmp) {
        var _this = this;
        var path = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + tmp.lat + ',' + tmp.lng + '&sensor=true&key=AIzaSyCdTK_xKXAH7QYPTBHv7JU4c9zBZB1Ke64';
        return new Promise(function (resolve) {
            _this.http.get(path)
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    NearbyplaceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], NearbyplaceProvider);
    return NearbyplaceProvider;
}());

//# sourceMappingURL=nearbyplace.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, auth) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        if (this.auth.user != null) {
            this.user = this.auth.user;
        }
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/krittinj/Desktop/work/student-map/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Profile</h3>\n  <span *ngIf="user">{{user.displayName}}</span>\n\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/Users/krittinj/Desktop/work/student-map/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPage = /** @class */ (function () {
    /*listingsCollection: AngularFirestoreCollection<Items>;
    listings: Observable<Items[]>;
    listingsDoc: AngularFirestoreDocument<Item>;
    listDoc: Observable<Item>;
  
    getListingsFireStore() {
      this.listingsCollection = this.afs.collection("listings");
      this.listings = this.listingsCollection.snapshotChanges().map(actions => {
        return actions.map(action => ({
          $key: action.payload.doc.id,
          ...action.payload.doc.data()
        }));
      });
      console.log(this.listings);
    } */
    function ListPage(navCtrl, navParams, afs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afs = afs;
    }
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/krittinj/Desktop/work/student-map/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngIf="listings">\n    <ion-item *ngFor="let listings of listings | async">\n\n      <ion-grid>\n        <ion-row padding>\n          <ion-col >\n              {{listings.title}}\n\n          </ion-col>\n          <ion-col >\n              {{listings.let}}\n          </ion-col>\n\n          <ion-col>\n              {{listings.lng}}\n          </ion-col>\n            <ion-col>\n                {{listings.address}}\n\n              </ion-col>\n\n        </ion-row>\n      </ion-grid>\n\n<ion-icon name="create" (click)="listingsOperation(listings, \'edit\')" item-end></ion-icon>\n<ion-icon name="trash" (click)="listingsOperation(listings, \'delete\')" item-end></ion-icon>\n\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/krittinj/Desktop/work/student-map/src/pages/list/list.html"*/
        })
        //interface Item{};
        //interface Items{};
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(299);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_firestore__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_auth_auth__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_googlemap_googlemap__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_facebook__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_google_plus__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_google_maps__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_nearbyplace_nearbyplace__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common_http__ = __webpack_require__(239);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var firebaseConfig = {
    apiKey: "AIzaSyBpJloDN5Ot1_kvMZIDYgj-eJiWuD0NRpA",
    authDomain: "student-location.firebaseapp.com",
    databaseURL: "https://student-location.firebaseio.com",
    projectId: "student-location",
    storageBucket: "student-location.appspot.com",
    messagingSenderId: "955299915732"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_googlemap_googlemap__["a" /* GooglemapPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/googlemap/googlemap.module#GooglemapPageModule', name: 'GooglemapPage', segment: 'googlemap', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_18__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_firestore__["b" /* AngularFirestoreModule */].enablePersistence()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_googlemap_googlemap__["a" /* GooglemapPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["a" /* AngularFireAuth */],
                __WEBPACK_IMPORTED_MODULE_12__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_17__providers_nearbyplace_nearbyplace__["a" /* NearbyplaceProvider */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_googlemap_googlemap__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(auth, platform, statusBar, splashScreen) {
        var _this = this;
        this.auth = auth;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        this.auth.authState.subscribe(function (user) {
            console.log(user);
            if (!user) {
                _this.pages = [
                    { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */] },
                    { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
                    { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
                ];
            }
            else {
                _this.user = user;
                _this.pages = [
                    { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */] },
                    { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
                    { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
                    { title: 'Google Map', component: __WEBPACK_IMPORTED_MODULE_7__pages_googlemap_googlemap__["a" /* GooglemapPage */] }
                ];
            }
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/krittinj/Desktop/work/student-map/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/krittinj/Desktop/work/student-map/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[283]);
//# sourceMappingURL=main.js.map