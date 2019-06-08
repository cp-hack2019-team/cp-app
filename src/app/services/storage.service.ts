import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  get(key: string) {
    this.storage.get(key).then(result => {
      return result;
    }).catch(error => {
      console.log('StorageService: ' + error + ' for key ' + key);
      return null;
    });
  }

  set(key: string, value: string) {
    this.storage.set(key, value);
  }
}
