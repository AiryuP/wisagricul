import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpClient,HttpParams } from "@angular/common/http";

declare var BMap;
declare var BMAP_HYBRID_MAP; 

@IonicPage()
@Component({
  selector: 'page-automatic',
  templateUrl: 'automatic.html',
})
export class AutomaticPage {

  map;
  data;
  // path: string = 'http://192.168.2.117:8080/evaluate/actualData.action';
  // path: string = 'http://192.168.2.122:8888/tree/organization/group'
  path: string = 'http://192.168.2.117:8080/evaluate/actualWarningData.action';


  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AutomaticPage');
    this.f();
  }
  ionViewWillEnter(){
    this.initMap();
    this.addquyuzhan();
    // this.getData();
  }

  getData(){
    this.data = [
      {"TEM":"999999","Cnty":"平阴县","Station_Id_C":"D6506","Station_Id_d":"686506","PRS":"999999","Town":"","Station_Name":"安城镇西平洛","Lat":"36.3103","Lon":"116.475","Province":"山东省","City":"济南市","Datetime":"2018-08-13 05:00:00"},
      {"TEM":"999999","Cnty":"平阴县","Station_Id_C":"D6508","Station_Id_d":"686508","PRS":"999999","Town":"","Station_Name":"玫瑰镇公园","Lat":"36.2389","Lon":"116.3797","Province":"山东省","City":"济南市","Datetime":"2018-08-13 05:00:00"},
      {"TEM":"999999","Cnty":"平阴县","Station_Id_C":"D6507","Station_Id_d":"686507","PRS":"999999","Town":"","Station_Name":"孝直镇孝直村委","Lat":"36.1142","Lon":"116.4456","Province":"山东省","City":"济南市","Datetime":"2018-08-13 05:00:00"},
      {"TEM":"30.4","Cnty":"平阴县","Station_Id_C":"D6142","Station_Id_d":"686142","PRS":"999999","Town":"","Station_Name":"平阴安城炮点","Lat":"36.2822","Lon":"116.5247","Province":"山东省","City":"济南市","Datetime":"2018-08-13 05:00:00"},
      {"TEM":"31.7","Cnty":"平阴县","Station_Id_C":"D6069","Station_Id_d":"686069","PRS":"999999","Town":"","Station_Name":"平阴玫瑰花研究所","Lat":"36.2569","Lon":"116.3858","Province":"山东省","City":"济南市","Datetime":"2018-08-13 05:00:00"},
      {"TEM":"31.1","Cnty":"平阴县","Station_Id_C":"54818","Station_Id_d":"54818","PRS":"995.2","Town":"","Station_Name":"平阴","Lat":"36.25","Lon":"116.4167","Province":"山东省","City":"济南市","Datetime":"2018-08-13 05:00:00"},
      {"TEM":"31.2","Cnty":"平阴县","Station_Id_C":"D6141","Station_Id_d":"686141","PRS":"999999","Town":"","Station_Name":"平阴洪范炮点","Lat":"36.1131","Lon":"116.3258","Province":"山东省","City":"济南市","Datetime":"2018-08-13 05:00:00"},
      {"TEM":"30.5","Cnty":"平阴县","Station_Id_C":"D6140","Station_Id_d":"686140","PRS":"999999","Town":"","Station_Name":"平阴孝直炮点","Lat":"36.1272","Lon":"116.415","Province":"山东省","City":"济南市","Datetime":"2018-08-13 05:00:00"},
      {"TEM":"30","Cnty":"平阴县","Station_Id_C":"D6143","Station_Id_d":"686143","PRS":"999999","Town":"","Station_Name":"平阴孔村炮点","Lat":"36.1575","Lon":"116.4325","Province":"山东省","City":"济南市","Datetime":"2018-08-13 05:00:00"},
      {"TEM":"31.9","Cnty":"平阴县","Station_Id_C":"D6068","Station_Id_d":"686068","PRS":"999.4","Town":"","Station_Name":"平阴东阿谷城中学","Lat":"36.1831","Lon":"116.2903","Province":"山东省","City":"济南市","Datetime":"2018-08-13 05:00:00"},
      {"TEM":"31.1","Cnty":"平阴县","Station_Id_C":"D6102","Station_Id_d":"686102","PRS":"999999","Town":"","Station_Name":"平阴县政府","Lat":"36.2897","Lon":"116.4506","Province":"山东省","City":"济南市","Datetime":"2018-08-13 05:00:00"}
    ];
  }


  initMap(){
    	// 百度地图API功能
      this.map = new BMap.Map("map",{mapType: BMAP_HYBRID_MAP});    // 创建Map实例,{mapType: BMAP_HYBRID_MAP}

      this.map.centerAndZoom(new BMap.Point(116.463189,36.297422), 11);  // 初始化地图,设置中心点坐标和地图级别
      //添加地图类型控件
      // map.addControl(new BMap.MapTypeControl);	  
      this.map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
      this.map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
  }

  addquyuzhan(){
    var point = new Array(); //存放标注点经纬信息的数组
    var markers = new Array(); //存放标注点对象的数组
    var datas = new Array(); 
    var myIcon = new BMap.Icon("assets/images/自动站.png", new BMap.Size(24,24));

    var opts = {
      //width : 80,     // 信息窗口宽度
      //height: 60,     // 信息窗口高度
      //backgroundColor: "#000",
      //title : "信息窗口" , // 信息窗口标题
      enableMessage:true//设置允许信息窗发送短息
       };

    datas = [
      {"TEM":"999999","Cnty":"平阴县","Station_Id_C":"D6506","Station_Id_d":"686506","PRS":"999999","Town":"","Station_Name":"安城镇西平洛","Lat":"36.3103","Lon":"116.475","Province":"山东省","City":"济南市","Datetime":"2018-08-13 05:00:00"},
      {"TEM":"999999","Cnty":"平阴县","Station_Id_C":"D6508","Station_Id_d":"686508","PRS":"999999","Town":"","Station_Name":"玫瑰镇公园","Lat":"36.2389","Lon":"116.3797","Province":"山东省","City":"济南市","Datetime":"2018-08-13 05:00:00"},
      {"TEM":"999999","Cnty":"平阴县","Station_Id_C":"D6507","Station_Id_d":"686507","PRS":"999999","Town":"","Station_Name":"孝直镇孝直村委","Lat":"36.1142","Lon":"116.4456","Province":"山东省","City":"济南市","Datetime":"2018-08-13 05:00:00"},
      {"TEM":"30.4","Cnty":"平阴县","Station_Id_C":"D6142","Station_Id_d":"686142","PRS":"999999","Town":"","Station_Name":"平阴安城炮点","Lat":"36.2822","Lon":"116.5247","Province":"山东省","City":"济南市","Datetime":"2018-08-13 05:00:00"},
      {"TEM":"31.7","Cnty":"平阴县","Station_Id_C":"D6069","Station_Id_d":"686069","PRS":"999999","Town":"","Station_Name":"平阴玫瑰花研究所","Lat":"36.2569","Lon":"116.3858","Province":"山东省","City":"济南市","Datetime":"2018-08-13 05:00:00"},
      {"TEM":"31.1","Cnty":"平阴县","Station_Id_C":"54818","Station_Id_d":"54818","PRS":"995.2","Town":"","Station_Name":"平阴","Lat":"36.25","Lon":"116.4167","Province":"山东省","City":"济南市","Datetime":"2018-08-13 05:00:00"},
      {"TEM":"31.2","Cnty":"平阴县","Station_Id_C":"D6141","Station_Id_d":"686141","PRS":"999999","Town":"","Station_Name":"平阴洪范炮点","Lat":"36.1131","Lon":"116.3258","Province":"山东省","City":"济南市","Datetime":"2018-08-13 05:00:00"},
      {"TEM":"30.5","Cnty":"平阴县","Station_Id_C":"D6140","Station_Id_d":"686140","PRS":"999999","Town":"","Station_Name":"平阴孝直炮点","Lat":"36.1272","Lon":"116.415","Province":"山东省","City":"济南市","Datetime":"2018-08-13 05:00:00"},
      {"TEM":"30","Cnty":"平阴县","Station_Id_C":"D6143","Station_Id_d":"686143","PRS":"999999","Town":"","Station_Name":"平阴孔村炮点","Lat":"36.1575","Lon":"116.4325","Province":"山东省","City":"济南市","Datetime":"2018-08-13 05:00:00"},
      {"TEM":"31.9","Cnty":"平阴县","Station_Id_C":"D6068","Station_Id_d":"686068","PRS":"999.4","Town":"","Station_Name":"平阴东阿谷城中学","Lat":"36.1831","Lon":"116.2903","Province":"山东省","City":"济南市","Datetime":"2018-08-13 05:00:00"},
      {"TEM":"31.1","Cnty":"平阴县","Station_Id_C":"D6102","Station_Id_d":"686102","PRS":"999999","Town":"","Station_Name":"平阴县政府","Lat":"36.2897","Lon":"116.4506","Province":"山东省","City":"济南市","Datetime":"2018-08-13 05:00:00"}
    ];

    for( let i =0;i<datas.length;i++){
      point[i] = new BMap.Point(datas[i].Lon,datas[i].Lat);

      markers[i] = new BMap.Marker( point[i],{icon:myIcon});

      this.map.addOverlay(markers[i]);

      markers[i].addEventListener("click",function(e){
        var infoWindow = new BMap.InfoWindow("<divstyle='font-size: 14px;'><span style='color: red;'>"+datas[i].Station_Name+"</span><br/>编号："+datas[i].Station_Id_C+"<br/>温度："+datas[i].TEM+"<br/>雨量："+datas[i].rain+"<br/>风力："+datas[i].windPower+"<br/>风向："+datas[i].windDirection+"<br/>气压："+datas[i].PRS+"</div>",opts);

        this.map.openInfoWindow(infoWindow,point[i]);
        }
      );

      


    }

    
  }


  f(){
      console.log("aaaaaaaaaaaaaaaaaaa");
      // this.http.get( this.path )
      //   .subscribe(data => {
      //     console.log(data);
      //   });

      // .set("id" , '233d9c8c987911e8a5ed8cec4b81c244');
      let httpParams = new HttpParams()

      this.http.post( this.path ,httpParams)
      .subscribe( res => {
        console.log( res )
      }, error => {
        // 请求发生错误
      }
    );

  }



}
