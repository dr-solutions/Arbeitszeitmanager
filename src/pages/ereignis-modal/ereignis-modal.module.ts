import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EreignisModalPage } from './ereignis-modal';

@NgModule({
  declarations: [
    EreignisModalPage,
  ],
  imports: [
    IonicPageModule.forChild(EreignisModalPage),
  ],
})
export class EreignisModalPageModule {}
