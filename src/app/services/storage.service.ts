import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  async get(key: string): Promise<string> {
    const res = await this.storage.get(key);
    return res;
  }

  set(key: string, value: string) {
    this.storage.set(key, value);
  }
}
