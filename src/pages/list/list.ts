import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

//interface Item{};
//interface Items{};

export class ListPage {
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

  constructor(public navCtrl: NavController, public navParams: NavParams,public afs: AngularFirestore) {

  }
}
