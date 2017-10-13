import { Component } from '@angular/core';

import { NavController, LoadingController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import {Loader} from '../../services/loader.service';

@Component({
    selector: 'page-list',
    templateUrl: 'list.html'
})
export class ListPage extends Loader {
    icons: string[];
    items: Array<{ title: string, note: string, icon: string }>;

    constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
        super();
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];

        this.items = [];
        for (let i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }

    itemTapped(event, item) {
        this.presentLoading();
        this.navCtrl.push(ItemDetailsPage, {
            item: item
        });
    }
}
