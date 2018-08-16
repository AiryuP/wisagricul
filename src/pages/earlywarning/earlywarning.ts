import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpClient,HttpParams } from "@angular/common/http";

declare var BMap;
declare var BMAP_HYBRID_MAP; 

@IonicPage()
@Component({
  selector: 'page-earlywarning',
  templateUrl: 'earlywarning.html',
})
export class EarlywarningPage {
  // isEW;
  map;
  path;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EarlywarningPage');
    // this.isEW = 1;
  }

  ionViewWillEnter(){
    this.initMap();

    // this.addpaodian();
    this.f();
  }

  initMap(){
    	// 百度地图API功能
      this.map = new BMap.Map("map",{mapType: BMAP_HYBRID_MAP});    // 创建Map实例

      this.map.centerAndZoom(new BMap.Point(116.463189,36.297422), 11);  // 初始化地图,设置中心点坐标和地图级别
      //添加地图类型控件
      // map.addControl(new BMap.MapTypeControl);	  
      this.map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
      this.map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
  }

  f(){

    this.path = 'http://192.168.2.117:8080/evaluate/actualWarningData.action';

    let httpParams = new HttpParams()

    this.http.post( this.path , httpParams)
      .subscribe( res => {
        console.log("预警");
        console.log( res );
          if( res != [] || res != '' ){
            this.addyujing( res );
          }else{

          }
      }, error => {
        // 请求发生错误
      }
    );

  }


  addyujing( res ){
    var point = new Array(); //存放标注点经纬信息的数组
    var markers = new Array(); //存放标注点对象的数组
    var datas = new Array(); //存放数据
    
    datas = res; 

    if( datas.length > 1 ){

      for(let i = 1;i < datas.length; i++){

        if( i%2 == 1 ){
          datas[i].Lon = datas[0].Lon *1 - 0.03*i;
          datas[i].Lat = datas[0].Lat *1 - 0.03*i;
        }else{
          datas[i].Lon = datas[0].Lon *1 + 0.03*i;
          datas[i].Lat = datas[0].Lat *1 + 0.03*i;
        }
      }

      console.log(datas);

    }

    for( let i =0;i<datas.length;i++){

      point[i] = new BMap.Point(datas[i].Lon,datas[i].Lat);
      var myIcon = new BMap.Icon(datas[i].icon, new BMap.Size(31,26));

      markers[i] = new BMap.Marker( point[i],{ icon:myIcon });

      this.map.addOverlay(markers[i]);

      markers[i].addEventListener("click",function(e){
        var infoWindow = new BMap.InfoWindow("<divstyle='font-size: 14px;'><span style='color: red;'>"+datas[i].StationName+"</span><br/><br/>发布时间："+datas[i].YjIssuedate+"</span><br/><br/>预警信息："+datas[i].YjContent+"</div>");

        this.map.openInfoWindow(infoWindow,point[i]);
        }
      );


    }


  }



}
