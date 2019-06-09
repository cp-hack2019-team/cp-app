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

    postRequest(url: string, body: any, params) {
        console.log(body);
        return new Promise((resolve, reject) => {
            let headers = null;
            this.getOptions(params).then(result => {
                headers = result;
                this.http.post(RestService.getApiUrl() + url, body, headers)
                    .subscribe(res => {
                        console.log('Request result:'); // log
                        console.log(res); // log
                        resolve(res);
                    }, (err) => {
                        console.log('Request error:'); // log
                        console.log(err);
                        reject(err);
                    });
            });
        });
    }

    getRequest(url: string, params) {
        return new Promise((resolve, reject) => {
            let headers = null;
            this.getOptions(params).then(result => {
                headers = result;
                this.http.get(RestService.getApiUrl() + url, headers)
                    .subscribe(res => {
                        console.log('Request result:');
                        console.log(res);
                        resolve(res);
                    }, (err) => {
                        console.log('Request error:');
                        console.log(err);
                        reject(err);
                    });
            });
        });
    }

     private async getOptions(params) {
        const token = await this.storageService.get('token');
        const headers = {
            headers: {
                'content-type': 'application/json'
            },
            params: {

            }
        };
        if (token != null) {
            headers.headers['Authorization'] = 'Bearer ' + token;
        }
        if (params != null) {
            headers.params = params;
        }
        return headers;
    }
}
