import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    //return this.http.get('https://reqres.in/api/users');
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
  }

  getUserPosts(userId){
    console.log("****************************");
    console.log(userId);
    console.log("****************************");
    return this.http.get('https://jsonplaceholder.typicode.com/posts?userId=' + userId);
  }
}
