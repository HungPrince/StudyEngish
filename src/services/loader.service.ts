import {Injectable} from '@angular/core';
import {LoadingController} from 'ionic-angular';

@Injectable()

export class Loader {
    //constructor(public loadingCtrl: LoadingController) {
    //}
    public loadingCtrl: LoadingController;
    presentLoading() {
        let loader = this.loadingCtrl.create({
            spinner:'ios',
            content: 'Loading...',
            duration: 3000,
        });
        loader.present();
    }
}