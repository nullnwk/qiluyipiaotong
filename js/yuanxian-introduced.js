function getAjax(code) {
    if (code == "") {
        $array = '[{ title: "名称：山东省会大剧院", point: "117.084682,36.791164", address: "山东省济南市槐荫区腊山河东路与日照路交叉口西170米路北", tel: "0531-66686633" },  { title: "名称：历山剧院", point: "117.15883,36.383797", address: "山东省济南市历下区和平路59号", tel: "0531-86942380" },  { title: "名称：山东话剧院", point: "117.03064,36.656342", address: "山东省济南市历下区解放路115号（近西部酒城）", tel: "0531-86952054" },  { title: "名称：山东歌舞剧院", point: "117.36844,36.691887", address: "山东省济南市历下区杆南东街123号", tel: "0531-86922658" } ,{ title: "名称：青岛大剧院", point: "120.464035,36.293303", address: "青岛市崂山区云岭路5号", tel: "0532-80665555" },  { title: "名称：青岛话剧院", point: "120.382772,36.086359", address: "青岛市市北区临清路12号丙", tel: "0532-82805166" },  { title: "名称：青岛实验剧场", point: "120.677372,36.3185532", address: "青岛市市北区顺兴路26号", tel: "0532-83811166" },  { title: "名称：青岛市歌舞剧院", point: "120.270289,36.264835", address: "青岛市市北区兴安路15号", tel: "0532-82714673" },]';
        document.getElementById("marker").value = $array;
        map_load();
    }
    if (code == "济南") {
        $array = '[{ title: "名称：山东省会大剧院", point: "117.084682,36.791164", address: "山东省济南市槐荫区腊山河东路与日照路交叉口西170米路北", tel: "0531-66686633" },  { title: "名称：历山剧院", point: "117.15883,36.383797", address: "山东省济南市历下区和平路59号", tel: "0531-86942380" },  { title: "名称：山东话剧院", point: "117.03064,36.656342", address: "山东省济南市历下区解放路115号（近西部酒城）", tel: "0531-86952054" },  { title: "名称：山东歌舞剧院", point: "117.36844,36.691887", address: "山东省济南市历下区杆南东街123号", tel: "0531-86922658" },]';
        document.getElementById("marker").value = $array;
        map_load();
    }
    if (code == "青岛") {
        $array = '[{ title: "名称：青岛大剧院", point: "120.464035,36.293303", address: "青岛市崂山区云岭路5号", tel: "0532-80665555" },  { title: "名称：青岛话剧院", point: "120.382772,36.086359", address: "青岛市市北区临清路12号丙", tel: "0532-82805166" },  { title: "名称：青岛实验剧场", point: "120.677372,36.3185532", address: "青岛市市北区顺兴路26号", tel: "0532-83811166" },  { title: "名称：青岛市歌舞剧院", point: "120.270289,36.264835", address: "青岛市市北区兴安路15号", tel: "0532-82714673" },]';
        document.getElementById("marker").value = $array;
        map_load();
    }


}

var map; //Map实例  
function map_init() {
    var str = document.getElementById("marker").value;
    var markerArr = eval('(' + str + ')');
    console.log(markerArr);
    map = new BMap.Map("map");
    //第1步：设置地图中心点，广州市  
    var point = new BMap.Point(118.279931, 36.322548);
    //第2步：初始化地图,设置中心点坐标和地图级别。  
    map.centerAndZoom(point, 8);
    //第3步：启用滚轮放大缩小  
    map.enableScrollWheelZoom(true);
    //第4步：向地图中添加缩放控件  
    var ctrlNav = new window.BMap.NavigationControl({
        anchor: BMAP_ANCHOR_TOP_LEFT,
        type: BMAP_NAVIGATION_CONTROL_LARGE
    });
    map.addControl(ctrlNav);
    //第5步：向地图中添加缩略图控件
    var ctrlOve = new window.BMap.OverviewMapControl({
        anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
        isOpen: 1
    });
    map.addControl(ctrlOve);

    //第6步：向地图中添加比例尺控件  
    var ctrlSca = new window.BMap.ScaleControl({
        anchor: BMAP_ANCHOR_BOTTOM_LEFT
    });
    map.addControl(ctrlSca);

    //第7步：绘制点    
    for (var i = 0; i < markerArr.length; i++) {
        var p0 = markerArr[i].point.split(",")[0];
        var p1 = markerArr[i].point.split(",")[1];
        var maker = addMarker(new window.BMap.Point(p0, p1), i);
        addInfoWindow(maker, markerArr[i], i);

    }
}

// 添加标注  
function addMarker(point, index) {
    var myIcon = new BMap.Icon("http://api.map.baidu.com/img/markers.png",
        new BMap.Size(23, 25), {
            offset: new BMap.Size(10, 25),
            imageOffset: new BMap.Size(0, 0 - index * 25)
        });
    var marker = new BMap.Marker(point, { icon: myIcon });
    map.addOverlay(marker);
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    var label = new window.BMap.Label(markerArr.title, { offset: new window.BMap.Size(20, -10) });
    marker.setLabel(label);
    return marker;
}

// 添加信息窗口  
function addInfoWindow(marker, poi) {
    //pop弹窗标题  
    var title = '<div style="font-weight:bold;color:#CE5521;font-size:14px">' + poi.title + '</div>';
    //pop弹窗信息  
    var html = [];
    html.push('<table cellspacing="0" style="table-layout:fixed;width:100%;font:12px arial,simsun,sans-serif"><tbody>');
    html.push('<tr>');
    html.push('<td style="vertical-align:top;line-height:16px;width:38px;white-space:nowrap;word-break:keep-all">地址:</td>');
    html.push('<td style="vertical-align:top;line-height:16px"><a href="">' + poi.address + '</a></td>');
    html.push('</tr>');
    html.push('</tbody></table>');
    var infoWindow = new BMap.InfoWindow(html.join(""), { title: title, width: 200 });

    var openInfoWinFun = function () {
        marker.openInfoWindow(infoWindow);
    };
    marker.addEventListener("click", openInfoWinFun);
    return openInfoWinFun;
}

//异步调用百度js  
function map_load() {
    var load = document.createElement("script");
    load.src = "http://api.map.baidu.com/api?v=1.4&callback=map_init";
    document.body.appendChild(load);
}
window.onload = map_load;  