import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddReminderPage } from '../add-reminder/add-reminder';
import * as firebase from 'firebase/app'
import { LocalNotifications } from '@ionic-native/local-notifications';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  medicines:Array<any> = [];
  public itemRef: firebase.database.Reference = firebase.database().ref('/medicines');
  constructor(public navCtrl: NavController,private localNotifications: LocalNotifications) {
    this.itemRef.on('value', itemSnapshot => {
      this.medicines = [];
      itemSnapshot.forEach( itemSnap => {
        this.medicines.push(itemSnap.val());
        return false;
      });
    });

    

  }

  goToAddReminder(){
    this.navCtrl.push(AddReminderPage);
  }

}
