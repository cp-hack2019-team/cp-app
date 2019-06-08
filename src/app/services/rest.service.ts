import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = 'https://cp-2019-server.herokuapp.com/';

@Injectable({
    providedIn: 'root'
})
export class RestService {

    constructor(public http: HttpClient,
                private localStorage: Storage) {
    }

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
            this.http.get(RestService.getApiUrl() + 'concert-info')
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    console.log(err); // log
                    reject(err);
                });
        });
    }

    postRequest(url: string, body: HttpParams) {
        return new Promise((resolve, reject) => {
            const headers = new HttpHeaders();
            headers.append('content-type', 'application/json');
            const token = localStorage.getItem('token');
            if (token != null) {
                headers.append('Authorization', 'Bearer ' + token);
            }
            this.http.post(RestService.getApiUrl() + url, body, {headers: headers})
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
            const token = localStorage.getItem('token');
            const headers = new HttpHeaders();
            if (token != null) {
                 headers.append('Authorization', 'Bearer ' + token);
            }
            this.http.get(RestService.getApiUrl() + url, {headers: headers})
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    console.log(err); // log
                    reject(err);
                });
        });
    }
}
