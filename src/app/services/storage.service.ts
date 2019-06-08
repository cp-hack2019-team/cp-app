import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  get(key: string) {
    let result = null;
    this.storage.get(key).then(res => {
      result = res;
    }).catch(error => {
      console.log('StorageService: ' + error + ' for key ' + key);
      result = null;
    });
    return result;
  }

  set(key: string, value: string) {
    this.storage.set(key, value);
  }
}
