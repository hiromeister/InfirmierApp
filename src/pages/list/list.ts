import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { SecurityCodePage } from '../security-code/security-code';


@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})



export class ListPage {

  posts:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {

    this.http.get('/assets/users.json').map(res => res.json()).subscribe(data => {
        this.posts = data.data;  
        console.log(this.posts);
        
        
    });
  }

  secureCode(){
    this.navCtrl.push(SecurityCodePage);

  }


 

} 


