import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage} from '@ionic/storage';
import { HomePage} from '../home/home'
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  userName: String;
  postId: Number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
this.storage.get('form').then((val) => {
  if(val != null){
    let form = JSON.parse(val);
    this.userName = form.userName;
    this.postId = form.postId
  } else {
    this.userName = 'Ana Fatta';
    this.postId = 1;
  }
})


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  saveForm(){
    let form={
      userName : this.userName,
      postId : this.postId
    }
   this.storage.set('form', JSON.stringify(form));
   this.navCtrl.push(HomePage);
  }
}
