import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { forEach } from '@angular/router/src/utils/collection';

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
    return this.http.get('https://jsonplaceholder.typicode.com/posts?userId=' + userId);
  }

  getUserAlbums(userId){
    return this.http.get('https://jsonplaceholder.typicode.com/albums?userId=' + userId);
  }

  getAlbumPhotos(albumId){
    return this.http.get('https://jsonplaceholder.typicode.com/photos?albumId=' + albumId);
  }

}
