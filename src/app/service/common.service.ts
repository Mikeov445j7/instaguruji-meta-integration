import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    constructor(
        private _router: Router,
        private toastController: ToastController,
        private loadingCtrl: LoadingController
    ) { }

    logout() {
        localStorage.clear();
        this._router.navigate(['login']);
    }
    /* Storage Service */

    /* Toast Service */
    async showToast(message: string, duration: number = 2) {
        const config: ToastOptions = {
            message: message,
            duration: duration * 1000,
            cssClass: 'toast-bottom',
            position: 'bottom'
        };
        const toast = await this.toastController.create(config);
        toast.present();
    }

    async showToastWithOptions() {
        const toast = await this.toastController.create({
            header: 'Toast header',
            message: 'Click to Close',
            icon: 'information-circle',
            position: 'top',
            buttons: [
                {
                    side: 'start',
                    icon: 'star',
                    text: 'Favorite',
                    handler: () => {
                        console.log('Favorite clicked');
                    }
                }, {
                    text: 'Done',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        await toast.present();
        const { role } = await toast.onDidDismiss();
    }
    /* Toast Service */

    /* Loader Service */
    async showLoader() {
        await this.loadingCtrl.create({
            cssClass: 'custom-loader',
            backdropDismiss: false
        }).then((res) => {
            res.present();
        });
    }

    hideLoader(): void {
        setTimeout(() => {
            this.loadingCtrl.dismiss()
                .then(() => {
                }).catch((err) => {
                    console.log('Error occured : ', err);
                });
        }, 600);
    }

    async autoLoader() {
        await this.loadingCtrl.create({
            message: 'Loader hides after 4 seconds',
            duration: 4000
        }).then((response) => {
            response.present();
            response.onDidDismiss().then((response) => {
                console.log('Loader dismissed', response);
            });
        });
    }

    async customLoader() {
        await this.loadingCtrl.create({
            message: 'Loader with custom style',
            duration: 4000,
            cssClass: 'loader-css-class',
            backdropDismiss: true
        }).then((res) => {
            res.present();
        });
    }
    /* Loader Service */
}

export interface ILoginInfo {
    Username: string;
    Role: "Admin" | "User" | "Client";
    isActive: string;
}