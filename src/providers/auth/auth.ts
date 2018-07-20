//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";
import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook";
import { Platform } from "ionic-angular";

import { GooglePlus } from '@ionic-native/google-plus';

import {
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";

import { Observable } from "rxjs/Observable";
interface Items { money: any };
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  user: any;
  money: any;
  userCollection: AngularFirestoreCollection<Items>; //Firestore collection
  items: Observable<Items[]>; // read collection

  constructor(
    private auth: AngularFireAuth,
    private platform: Platform,
    private fb: Facebook,
    private afs: AngularFirestore,
    private googlePlus: GooglePlus
  ) {

  }

  checkAuthen() {

    this.auth.authState.subscribe(user => {
      console.log(user);
      if (!user) {
        this.user = null;
      }
      else {
        this.user = user;

        this.userCollection = this.afs.collection("user", ref =>
          ref.where("email", "==", user.email)
        ); //ref()
        this.items = this.userCollection.valueChanges();

        this.items.forEach(element => {
          console.log(element);
          if (element[0] != null) {
            this.money = element[0].money;
          }
          else {
            this.money = null;
          }
          console.log(this.money);
        });

      }
    });
  }

  signInWithFacebook() {
    if (this.platform.is("cordova")) {
      return new Promise((resolve, reject) => {
        this.fb
          .login(["public_profile", "user_friends", "email"])
          .then((res: FacebookLoginResponse) => {
            console.log("Logged into Facebook!", res);
            firebase
              .auth()
              .signInWithCredential(
                firebase.auth.FacebookAuthProvider.credential(
                  res.authResponse.accessToken
                )
              )
              .then(success => {
                console.log("Firebase success", success);
                resolve(true);
              })
              .catch(err => {
                console.log("Firebase error", err);
                reject(false);
              });
          })
          .catch(err => {
            console.log("Error logging into Facebook", err);
            reject(false);
          });
      });
    } else {

      return this.auth.auth
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(res => console.log(res));
    }

  }

  signInWithGoogle() {

    if (this.platform.is("cordova")) {
      return new Promise((resolve, reject) => {
        this.googlePlus.login({})
          .then((res) => {
            console.log("Logged into Google!", res);
            firebase
              .auth()
              .signInWithCredential(
                firebase.auth.GoogleAuthProvider.credential(null, res.accessToken)
              )
              .then(success => {
                console.log("Google success", success);
                resolve(true);
              })
              .catch(err => {
                console.log("Google error", err);
                reject(false);
              });
          })
          .catch(err => {
            console.log("Error logging into Google", err);
            reject(false);
          });
      });
    }
    else {
      return this.auth.auth
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(res => console.log(res));
    }
  }

  signOut() {
    this.auth.auth.signOut();
    this.googlePlus.logout();
    this.fb.logout();
  }

}

