import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Observable, timer} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = 'https://cp-2019-server.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(public http: HttpClient) { }

  static getApiUrl() {
    return apiUrl;
  }
  
  getRecipe(recipeId) {
    return new Promise((resolve, reject) => {
      // let headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
      this.http.get(RestService.getApiUrl() + "getRecipe/" + recipeId)
          .subscribe(res => {
            //	console.log(res); // log
            resolve(res);
          }, (err) => {
            console.log(err); // log
            reject(err);
          });
    });
  }

  getEvent() {
    return new Promise((resolve, reject) => {
      // let headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
      this.http.get(RestService.getApiUrl() + "concert-info")
          .subscribe(res => {
            //	console.log(res); // log
            resolve(res);
          }, (err) => {
            console.log(err); // log
            reject(err);
          });
    });
  }

  signIn(name) {
    return new Promise((resolve, reject) => {
      this.http.get(RestService.getApiUrl() + 'registration/' + name.userName)
          .subscribe(res => {
            console.log(res); // log
            resolve(res);
          }, (err) => {
            console.log(err); // log
            reject(err);
          });
    });
  }

  sendMsg(message) {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      headers.append('content-type', 'application/json');
      let body = new HttpParams();
      body = body.set('text', message.text);
      body = body.set('userId', message.userId);
      this.http.post(RestService.getApiUrl() + 'send-msg', body, {headers: headers})
          .subscribe(res => {
            console.log(res); // log
            resolve(res);
          }, (err) => {
            console.log(err); // log
            reject(err);
          });
    });
  }

  getRequest(url: string) {
    return new Promise((resolve, reject) => {
      // let headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
      this.http.get(url)
          .subscribe(res => {
            //	console.log(res); // log
            resolve(res);
          }, (err) => {
            console.log(err); // log
            reject(err);
          });
    });
  }

}
