import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-native-storage',
  templateUrl: 'native-storage.html',
})
export class NativeStoragePage {

  name: string;
  surname: string;
  years: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,private nativeStorage: NativeStorage,public alertCtrl: AlertController) {
  }

  public storeIdentity(): void{
    this.nativeStorage.setItem('my-id-card', {
      name: this.name,
      surname: this.surname,
      years: this.years
    })
  .then(
    () => this.showAlert(),
    error => console.error('Error storing item', error)
  );
  }
 public getName(): void{

  this.nativeStorage.getItem('my-id-card')
  .then(
    data => {
      this.name = data.name,
      this.surname = data.surname,
      this.years = data.years
    },
    error => console.error(error)
  );
 }

 showAlert() {
  let alert = this.alertCtrl.create({
    title: 'Save ! ! !',
    subTitle: 'Your id card has been saved !',
    buttons: ['OK']
  });
  alert.present();
}

}
