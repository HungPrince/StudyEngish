import {Component} from '@angular/core';
import {AlertController} from 'ionic-angular';

@Component({
    selector: 'alert',
    templateUrl: 'alerts.html'
})

export class Alerts {

    testRadioOpen: boolean;
    testRadioResult;

    constructor(public alertCtrl: AlertController) {

    }

    showAlert() {
        let alert = this.alertCtrl.create(
            {
                title: 'New friends',
                subTitle: 'Your friend Hai, Hung, Tom, Red, just accept your friend request',
                buttons: ['OK']
            });
        alert.present();
    }

    showPromptAlert() {
        let promptAlert = this.alertCtrl.create(
            {
                title: 'Login',
                inputs: [{
                    name: 'title',
                    placeholder: 'title'
                }],
                buttons: [
                    {
                        text: 'Cancle',
                        handler: data => {
                            console.log('Cancle clicked');
                        }
                    },
                    {
                        text: 'Save',
                        handler: data => {
                            console.log('Data saved');
                        }
                    }
                ]
            });
        promptAlert.present();
    }

    showConfirmAlert() {
        let alertConfirm = this.alertCtrl.create({
            title: 'Delete contact',
            message: 'Are you sure want to delete this contact',
            buttons: [
                {
                    text: 'Delete',
                    handler: () => {
                        console.log('The contact was deleted!');
                    }
                },
                {
                    text: 'Cancel',
                    handler: () => {
                        console.log('You were click cancled!');
                    }
                }
            ]
        });
        alertConfirm.present();
    };

    showRadioAlert() {
        let radioAlert = this.alertCtrl.create();
        radioAlert.setTitle('Lightsaber color');

        radioAlert.addInput({
            type: 'radio',
            label: 'Blue',
            value: 'blue',
            checked: true
        });

        radioAlert.addInput({
            type: 'radio',
            label: 'Red',
            value: 'red'
        });

        radioAlert.addButton('Cancel');
        radioAlert.addButton({
            text: 'Ok',
            handler: data => {
                console.log(data);
                this.testRadioOpen = false;
                this.testRadioResult = data;
            }
        });

        radioAlert.present().then(() => { this.testRadioOpen = true });
    }

}