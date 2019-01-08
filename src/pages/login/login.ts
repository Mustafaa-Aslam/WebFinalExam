import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { AngularFireDatabase } from 'angularfire2/database';
import { RegisterPage } from '../register/register';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginDetails = { email: "", password: "" };
  constructor(public db: AngularFireDatabase, public alertCtrl: AlertController, public fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }


  login() {
    try {
      if (this.fire.auth.signInWithEmailAndPassword(this.loginDetails.email, this.loginDetails.password)) {
        this.alert("Welcome");
        this.navCtrl.setRoot(HomePage);
      }
    }
    catch (error) {
      this.alert("Invalid Details");
    }
  }

  goToRegister() {
    this.navCtrl.push(RegisterPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
