import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { GooglemapPage } from '../pages/googlemap/googlemap';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{ title: string, component: any }>;

  user: any;

  constructor(private auth: AngularFireAuth, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.auth.authState.subscribe(user => {
      console.log(user);
      if (!user) {
        this.pages = [
          { title: 'Login', component: LoginPage },
          { title: 'Home', component: HomePage },
          { title: 'List', component: ListPage },
        ];
      }
      else {
        this.user = user;
        this.pages = [
          { title: 'Login', component: LoginPage },
          { title: 'Home', component: HomePage },
          { title: 'List', component: ListPage },
          { title: 'Google Map', component: GooglemapPage }
        ];
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
