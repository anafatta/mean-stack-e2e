import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Post } from '../../pages/home/home';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the OrderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OrderProvider {
   url : string;

  constructor(public http: HttpClient) {
    console.log('Hello OrderProvider Provider');
    this.url="https://jsonplaceholder.typicode.com/posts";
  }

  getAllOrders() : Observable<Post[]> {
     return this.http.get<Post[]>(this.url);
  }
}
