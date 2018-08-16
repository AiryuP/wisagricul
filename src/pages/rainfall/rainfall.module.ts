import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RainfallPage } from './rainfall';

@NgModule({
  declarations: [
    RainfallPage,
  ],
  imports: [
    IonicPageModule.forChild(RainfallPage),
  ],
})
export class RainfallPageModule {}
