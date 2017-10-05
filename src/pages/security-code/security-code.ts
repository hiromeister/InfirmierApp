import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProfilePage} from '../profile/profile';

@IonicPage()
@Component({
  selector: 'page-security-code',
  templateUrl: 'security-code.html',
})
export class SecurityCodePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



  goToProfile(){
    this.navCtrl.push(ProfilePage);
  }

}
