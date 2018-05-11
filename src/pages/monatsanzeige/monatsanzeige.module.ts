import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MonatsanzeigePage } from './monatsanzeige';

@NgModule({
  declarations: [
    MonatsanzeigePage,
  ],
  imports: [
    IonicPageModule.forChild(MonatsanzeigePage),
  ],
})
export class MonatsanzeigePageModule {}
