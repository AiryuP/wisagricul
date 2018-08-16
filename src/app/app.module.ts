import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// http
import { HttpClientModule } from '@angular/common/http';

// 子页面
import { AutomaticPage } from '../pages/automatic/automatic';//自动站
import { EarlywarningPage } from '../pages/earlywarning/earlywarning';//预警
import { RadarPage } from '../pages/radar/radar';//雷达图
import { CloudPage } from '../pages/cloud/cloud';//云图
import { ExamplePage } from '../pages/example/example'; //示范点
import { QuotaPage } from '../pages/quota/quota'; // 指标库 
import { RainfallPage } from '../pages/rainfall/rainfall';//雨量统计
import { ArtificialPage } from '../pages/artificial/artificial';

// 


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AutomaticPage,
    EarlywarningPage,
    RadarPage,
    CloudPage,
    ExamplePage,
    QuotaPage,
    RainfallPage,
    ArtificialPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AutomaticPage,
    EarlywarningPage,
    RadarPage,
    CloudPage,
    ExamplePage,
    QuotaPage,
    RainfallPage,
    ArtificialPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
