import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// 二级页面
import { AutomaticPage } from '../automatic/automatic';
import { EarlywarningPage } from '../earlywarning/earlywarning';
import { RadarPage } from '../radar/radar';
import { CloudPage } from '../cloud/cloud';
import { ExamplePage } from '../example/example';
import { QuotaPage } from '../quota/quota';
import { RainfallPage } from '../rainfall/rainfall';
import { ArtificialPage } from '../artificial/artificial';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  tozidongzhan(){
    this.navCtrl.push(AutomaticPage);
  }

  toEW(){
    this.navCtrl.push(EarlywarningPage);
  }
 
  toRadar(){
    this.navCtrl.push(RadarPage);
  }

  toCloud(){
    this.navCtrl.push(CloudPage);
  }
  toExample(){
    this.navCtrl.push(ExamplePage);
  }
  toQuota(){
    this.navCtrl.push(QuotaPage);
  }
  toRainfall(){
    this.navCtrl.push(RainfallPage);
  }
  toArtificial(){
    this.navCtrl.push(ArtificialPage);
  }

}
