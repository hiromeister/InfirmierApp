import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
posts: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {

    this.http.get('/assets/users.json').map(res => res.json()).subscribe(data => {
        this.posts = data.data;  
        console.log(this.posts);
        
        
    });
  }

}
