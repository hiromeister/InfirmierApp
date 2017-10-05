import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ListPage } from '../list/list';
import { HomePage } from '../home/home';



@IonicPage()
@Component({  
  selector: 'page-add-patient',
  templateUrl: 'add-patient.html',
})
export class AddPatientPage {
  name;
  surname;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  addPatient(){
    console.log("test");
    this.navCtrl.push(ListPage,{name:this.name});
    this.navCtrl.push(ListPage,{surname:this.surname});

    
  }


}
