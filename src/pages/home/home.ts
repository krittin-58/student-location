import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: any;
  constructor(public navCtrl: NavController, public auth: AuthProvider) {
    if (this.auth.user != null) {
      this.user = this.auth.user;
    }

  }

}
