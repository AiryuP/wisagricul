import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuotaPage } from './quota';

@NgModule({
  declarations: [
    QuotaPage,
  ],
  imports: [
    IonicPageModule.forChild(QuotaPage),
  ],
})
export class QuotaPageModule {}
