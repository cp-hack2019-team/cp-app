import {Component} from '@angular/core';
import {RestService} from '../services/rest.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})

export class ListPage<ListItemType> {
    url: string;
    items: Array<ListItemType>;

    constructor(
        public restService: RestService,
        url: string
    ) {
        this.url = url;
    }

    getItems(): Promise<Array<ListItemType>> {
        return this.restService.getRequest(this.url, null).then((res: Array<ListItemType>) => {
           return res;
        });
    }
}
