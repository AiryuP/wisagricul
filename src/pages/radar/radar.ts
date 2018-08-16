import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpClient,HttpParams } from "@angular/common/http";

declare var $:any;

@IonicPage()
@Component({
  selector: 'page-radar',
  templateUrl: 'radar.html',
})
export class RadarPage {
  path;
  radarArray;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RadarPage');
  }

  ionViewWillEnter(){
    this.pplay("#radartu",1000); 
    this.getData();
  }

  pplay(x,time){
    clearInterval(a);
    var  num = 0;
    var a = setInterval(()=>{


      let c = $(x).children("div");
      for(let k = 0;k<c.length;k++){
        c[k].style.display = "none";
        $(x).children("div")[num].style.display =  "block";
      }

      num ++;

      if(num > c.length-1){
        num = 0;
      }



    },time)
  }

  getData(){

    this.path = 'http://192.168.2.117:8080/evaluate/radarData.action';

    let httpParams = new HttpParams()

    this.http.post( this.path , httpParams)
      .subscribe( res => {
        console.log("雷达");
        console.log( res );
          if( res != [] || res != '' ){
            this.radarArray = res;
          }else{

          }
      }, error => {
        // 请求发生错误
      }
    );

  }

}
