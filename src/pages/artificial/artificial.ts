import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var BMap;
declare var BMAP_HYBRID_MAP;

@IonicPage()
@Component({
  selector: 'page-artificial',
  templateUrl: 'artificial.html',
})
export class ArtificialPage {

  map;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArtificialPage');
  }

  ionViewWillEnter(){
    this.initMap();
    this.addpaodian();
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


  addpaodian(){
    var point = new Array(); //存放标注点经纬信息的数组
    var markers = new Array(); //存放标注点对象的数组
    var datas = new Array(); //存放数据
    var myIcon = new BMap.Icon("assets/images/自动站.png", new BMap.Size(24,24));

    datas = [
      {x:116.415,y:36.1272222222222,name:"平阴孝直炮点",num:"D6140"},
      {x:116.325833333333,y:36.1130555555556,name:"平阴洪范炮点",num:"D6141"},
      {x:116.524722222222,y:36.2822222222222,name:"平阴安城炮点",num:"D6142"},
      {x:116.4325,y:36.1575,name:"平阴孔村炮点",num:"D6143"},
    ];

    for( let i =0;i<datas.length;i++){
      point[i] = new BMap.Point(datas[i].x,datas[i].y);

      markers[i] = new BMap.Marker( point[i],{icon:myIcon});

      this.map.addOverlay(markers[i]);

      markers[i].addEventListener("click",function(e){
        var infoWindow = new BMap.InfoWindow("<divstyle='font-size: 14px;'><span style='color: red;'>"+datas[i].name+"</span><br/>编号："+datas[i].num+"<br/>经度："+datas[i].x+"<br/>纬度："+datas[i].y+"</div>");

        this.map.openInfoWindow(infoWindow,point[i]);
        }
      );


    }


  }

}
