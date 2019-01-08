import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { HomePage } from '../home/home';
import {Camera, CameraOptions} from '@ionic-native/camera'
import { LocalNotifications } from '@ionic-native/local-notifications';

/**
 * Generated class for the AddReminderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-reminder',
  templateUrl: 'add-reminder.html',
})
export class AddReminderPage {

  options: CameraOptions = {
    quality: 70,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  medicine: any = {
    name: "",
    qty: "",
    date: "",
    time: ""
  }
  clickedImage:any;
  constructor(public navCtrl: NavController, private localNotifications: LocalNotifications, public alertCtrl:AlertController, public camera:Camera, public navParams: NavParams, public db: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddReminderPage');
  }

  insertReminder() {
    let newDate = new Date(this.medicine.date+" "+this.medicine.time);
    if (this.db.list('/medicines').push(this.medicine)) {
      this.navCtrl.setRoot(HomePage);
      console.log(this.medicine.date+" "+this.medicine.time);
      this.localNotifications.schedule({
        text: this.medicine.name + "Has expired, please remove it from the shelves",
        trigger: {at: newDate},
        led: 'FF0000',
        sound: null,
     }); 
     let alert = this.alertCtrl.create({
      title: 'Congratulation!',
      subTitle: 'Notification setup successfully at '+this.medicine.date,
      buttons: ['OK']
    });
    alert.present();

    }
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  openCam(){
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.clickedImage = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      this.alert("Camera Not Found")
     });
  }

}
