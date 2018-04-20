import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrderProvider } from '../../providers/order/order'
import { Subscriber } from 'rxjs/Subscriber';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts: Post[];
  comments:Comment[]; 
  postId : Number;
  userName: String;


  constructor(
    public navCtrl: NavController, 
    private orderProvider: OrderProvider ,
    private storage : Storage) {
      this.orderProvider.getAllOrders().subscribe(data => this.posts = data);
   
  }

  ionViewWillEnter(){
    console.log("we are here...");
    this.storage.get('form').then((val) => {
      if(val != null ){
        let form = JSON.parse(val);
        this.postId = form.postId; 
        console.log('setting postId=', this.postId);
        this.userName = form.userName;
      } else {
        this.postId = 1;
        this.userName = 'Ana Fatta';
      }
      this.orderProvider.getComments(this.postId).subscribe(dataCom => {
        this.comments = dataCom; 
        
        console.log(this.comments, this.postId);

      })
     
    });
  }

}

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email:string,
  body: string;
}
