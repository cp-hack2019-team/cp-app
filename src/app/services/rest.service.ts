import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {StorageService} from './storage.service';

const apiUrl = 'https://cp-2019-server.herokuapp.com/';

@Injectable({
    providedIn: 'root'
})
export class RestService {

    constructor(public http: HttpClient,
                protected storageService: StorageService) {
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

    postRequest(url: string, body: any) {
        console.log(body);
        return new Promise((resolve, reject) => {
            const headers = this.getHeaders();
            this.http.post(RestService.getApiUrl() + url, body, headers)
                .subscribe(res => {
                    console.log('Request result: ' + res); // log
                    resolve(res);
                }, (err) => {
                    console.log('Request error: ' + err); // log
                    reject(err);
                });
        });
    }

    getRequest(url: string) {
        return new Promise((resolve, reject) => {
            const headers = this.getHeaders();
            this.http.get(RestService.getApiUrl() + url, headers)
                .subscribe(res => {
                    console.log('Request result: ' + res); // log
                    resolve(res);
                }, (err) => {
                    console.log('Request error: ' + err); // log
                    reject(err);
                });
        });
    }

    private getHeaders() {
        const token = this.storageService.get('token');
        const headers = {
            headers: {
                'content-type': 'application/json'
            }
        };
        if (token != null) {
            headers.headers['Authorization'] = 'Bearer ' + token;
        }
        console.log(headers);
        return headers;
    }
}
