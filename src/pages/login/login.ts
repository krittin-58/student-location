import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
import { AuthProvider } from '../../providers/auth/auth';
interface Items { money: any };



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: any;
  money: any;
  userCollection: AngularFirestoreCollection<Items>; //Firestore collection
  items: Observable<Items[]>; // read collection

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private auth: AngularFireAuth,
    private platform: Platform,
    private fb: Facebook,
    private afs: AngularFirestore,
    private googlePlus: GooglePlus,
    private authP: AuthProvider
  ) {



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

  signInWithFacebookP() {
    this.authP.signInWithFacebook();
    this.authP.checkAuthen();
  }
  signInWithGoogleP() {
    this.authP.signInWithGoogle();
    this.authP.checkAuthen();
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
