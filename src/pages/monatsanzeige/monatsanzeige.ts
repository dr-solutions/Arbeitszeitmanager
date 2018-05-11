import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-monatsanzeige',
  templateUrl: 'monatsanzeige.html',
})
export class MonatsanzeigePage {

  datum: string = new Date().toISOString();
  monatsnamen: string[] = ['Jänner', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  datumChanged(datum) {
    console.log(datum);
    const monat = datum.month;
    const jahr = datum.year;
  }

}
