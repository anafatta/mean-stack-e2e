import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrderProvider } from '../../providers/order/order'
import { Subscriber } from 'rxjs/Subscriber';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userid;
  id;
  title;
  body;
  posts: Post[];

  constructor(public navCtrl: NavController, private orderProvider: OrderProvider) {
    orderProvider.getAllOrders().subscribe(data => this.posts = data);

  }

}

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
