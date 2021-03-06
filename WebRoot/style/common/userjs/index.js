$(function(){
	if($("#userName").html() == ""){
		// 页面加载显示所有图标
		$.ajax({
			type : "POST",
			url : "publicIconInit.do",
			success : function(iconData){
				$("#love_kuzhan").show();
				initIcon(iconData,1);
				var oUl = document.getElementById("ul1");
				var aLi = oUl.getElementsByTagName("li");
				initSet(oUl,aLi);
			}
		});
	}else{
		$.ajax({
			type : "POST",
			url : "userIconInit.do",
			success : function(iconData){
				$("#love_common").show();
				initIcon(iconData,2);
				var oUl = document.getElementById("ul2");
				var aLi = oUl.getElementsByTagName("li");
				initSet(oUl,aLi);
			}
		});
	}
	
	// 点击酷站
	$("#menu01").click(function(){
		$("#love_kuzhan").show();
		$("#love_common").hide();
		$("#love_work").hide();
		$("#love_life").hide();
		$("#pt_yun").hide();
		$.ajax({
			type : "POST",
			url : "publicIconInit.do",
			success : function(iconData){
				initIcon(iconData,1);
				// var oUl = document.getElementById("ul1");
				// var aLi = oUl.getElementsByTagName("li");
				// initSet(oUl,aLi);
			}
		});
	});
	// 点击爱常用
	$("#menu02").click(function(){
		if($("#userName").html() == ""){
			alert("该功能注册用户使用！")
			window.location.href="register.jsp";
		}
		$("#love_kuzhan").hide();
		$("#love_common").show();
		$("#love_work").hide();
		$("#love_life").hide();
		$("#pt_yun").hide();
		$.ajax({
			type : "POST",
			url : "userIconInit.do",
			success : function(iconData){
				initIcon(iconData,2);
				var oUl = document.getElementById("ul2");
				var aLi = oUl.getElementsByTagName("li");
				initSet(oUl,aLi);
			}
		});
	});
	
	// 点击爱工作
	$("#menu03").click(function(){
		if($("#userName").html() == ""){
			alert("该功能注册用户使用！")
			window.location.href="register.jsp";
		}
		$("#love_kuzhan").hide();
		$("#love_common").hide();
		$("#love_work").show();
		$("#love_life").hide();
		$("#pt_yun").hide();
		$.ajax({
			type : "POST",
			url : "workIconInit.do",
			success : function(iconData){
				initIcon(iconData,3);
				var oUl = document.getElementById("ul3");
				var aLi = oUl.getElementsByTagName("li");
				initSet(oUl,aLi);
			}
		});
	});
	
	// 点击爱生活
	$("#menu04").click(function(){
		if($("#userName").html() == ""){
			alert("该功能注册用户使用！")
			window.location.href="register.jsp";
		}
		$("#love_kuzhan").hide();
		$("#love_common").hide();
		$("#love_work").hide();
		$("#love_life").show();
		$("#pt_yun").hide();
		$.ajax({
			type : "POST",
			url : "lifeIconInit.do",
			success : function(iconData){
				initIcon(iconData,4);
				var oUl = document.getElementById("ul4");
				var aLi = oUl.getElementsByTagName("li");
				initSet(oUl,aLi);
			}
		});
	});
	
	
	
	// 点击添加icon时
	$(".addIcon").click(function(){
		var name = $(this).attr("data-value");
		$("#addTypeIcon").val(name); // 添加icon到不同的类别
		$("#pk_icon").val("");
		$("#iconname").val("");
		$("#iconaddress").val("");
		$('#myModal2').modal({backdrop:"static", keyboard:false, show:true});
	});
	
	// 点击确定时(修改和增加)
	$("#iconButton").click(function(){
		var v_num = $("#addTypeIcon").val();
		var pk_icon = $("#pk_icon").val();
		var iconname = $("#iconname").val();
		var iconaddress = $("#iconaddress").val();
		if(iconname == "") { $("#iconmsg").html("名称和地址都必须输入"); return false;}
		var controller = "";
		if(pk_icon == ""){ // 表示为新增
			if(v_num == 2){ // 爱常用
				controller = "userAddIcon.do";
			}else if(v_num == 3){ // 爱工作
				controller = "workAddIcon.do";
			}else if(v_num == 4){ // 爱生活
				controller = "lifeAddIcon.do";
			}
			$.ajax({
				type : "POST",
				url : controller,
				data : { "name":iconname, "param_href":iconaddress },
				success : function(data){
					if(data === "true"){
						$('#myModal2').modal({backdrop:"static", keyboard:false, show:false});
						$('#myModal2').modal('hide');
						location.reload();
					}
				}
			});
		}else{ // 表示为修改
			if(v_num == 2){ // 爱常用
				controller = "userEditIcon.do";
				$.ajax({
				type : "POST",
				url : controller,
				data : { "iconname":iconname, "iconaddress":iconaddress,"pk_userIcon":pk_icon },
				success : function(data){
					if(data === "true"){
						$('#myModal2').modal({backdrop:"static", keyboard:false, show:false});
						$('#myModal2').modal('hide');
						location.reload();
					}
				}
			});
			}else if(v_num == 3){ // 爱工作
				controller = "workEditIcon.do";
				$.ajax({
				type : "POST",
				url : controller,
				data : { "iconname":iconname, "iconaddress":iconaddress,"pk_companyIcon":pk_icon },
				success : function(data){
					if(data === "true"){
						$('#myModal2').modal({backdrop:"static", keyboard:false, show:false});
						$('#myModal2').modal('hide');
						location.reload();
					}
				}
			});
			}else if(v_num == 4){ // 爱生活
				controller = "lifeEditIcon.do";
				$.ajax({
				type : "POST",
				url : controller,
				data : { "iconname":iconname, "iconaddress":iconaddress,"pk_icon":pk_icon },
				success : function(data){
					if(data === "true"){
						$('#myModal2').modal({backdrop:"static", keyboard:false, show:false});
						$('#myModal2').modal('hide');
						location.reload();
					}
				}
			});
			}
			
		}
		
	});	
	
});


/********************************************************
	this is drag!
********************************************************/
var ismousedown;

function initSet(oUl,aLi) {
	// var oUl = document.getElementById("ul1"); //ul1元素
	// var aLi = oUl.getElementsByTagName("li"); //li元素
	var disX = 0;
	var disY = 0;
	var minZindex = 1; //层数
	var aPos = [];
	var ids = [];
	var objo;
	
	var mouseDownTop; // 鼠标按下时的位置
	var mouseDownLeft;
	
	// 对ul每一个li元素赋值
	for (var i = 0; i < aLi.length; i++) { //li元素位置赋值
		var t = aLi[i].offsetTop;
		var l = aLi[i].offsetLeft;
		aLi[i].style.top = t + "px";
		aLi[i].style.left = l + "px";
		aPos[i] = {
			left : l,
			top : t
		};
		aLi[i].index = i;
		aLi[i].setAttribute("canPZ", 1); //1代表 是可以参与计算是否碰撞

	}
	for (var i = 0; i < aLi.length; i++) {
		aLi[i].style.position = "absolute";
		aLi[i].style.margin = 0;
		setDrag(aLi[i]); //为每个元素注册拖拽事件
	}
	//拖拽事件的定义
	function setDrag(obj) {
		var scrollLeft,scrollTop;
		obj.onmouseover = function () { //鼠标移动至上方
			objo = obj;
			obj.style.cursor = "pointer";
		}
		obj.onmousedown = function (event) { //鼠标按下 onmousedown 
			
			// 计算鼠标按下时的位置
			mouseDownTop = event.clientX;
			mouseDownLeft = event.clientY;
			
			objo = obj;
			ismousedown = true;
			// console.log("ismousedown 【" + ismousedown+"】   obj.index:【"+obj.index);
			event = window.event || event;
			scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
			obj.style.zIndex = minZindex++;
			// console.log("scrollTopLeft" + scrollTop + ":" + scrollLeft);
			//当鼠标按下时计算鼠标与拖拽对象的距离
			disX = event.clientX + scrollLeft - obj.offsetLeft;
			disY = event.clientY + scrollTop - obj.offsetTop;
			
			// console.log("disXY" + disX + ":" + disY);
//				ismove = true;
			// console.log("鼠标按下的obj:【" + obj.index+"】value:【"+obj.id);
			clearInterval(obj.timer);
			return false; //低版本出现禁止符号
		}
		document.onmousemove = function (event) {
			//console.log("ismousedown【"+ismousedown+"】");
			// console.log("移动前obj:【" + objo.index+"】value:【"+objo.id);
			if (ismousedown) {

				event = window.event || event;
				// console.log("minZindex" + minZindex);
				// console.log("移动中的obj:【" + objo.index+"】value:【"+objo.id);
//					ismove = false;
				//当鼠标拖动时计算div的位置
				// console.log("disX" + disX);
				scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
				// console.log("scrollLeft" + scrollLeft);
				var l = event.clientX - disX + scrollLeft;
				var t = event.clientY - disY + scrollTop;
				// console.log("鼠标位置:" + event.clientX + ":" + event.clientY);
				//console.log("移动到的位置"+l + ":" + t);
				objo.style.left = l + "px";
				objo.style.top = t + "px";
				// for (var i = 0; i < aLi.length; i++) {
				// aLi[i].className = "";
				// }
				var oNear = findMin(objo);
				if (oNear) {
					// console.log(oNear.index + ":" + oNear.index);
					//oNear.className = "active";
					//-----------
					if (objo.index < oNear.index) { //从小到大
						var temobj = objo;
						for (var i = objo.index; i < oNear.index; i++) {
							for (var j = 0; j < aLi.length; j++) { //li元素位置赋值
								if (aLi[j].index == i + 1) {
									temobj = aLi[j];
									break;
								};
							}
							temobj.className = "";
							temobj.style.zIndex = minZindex++;
							objo.style.zIndex = minZindex++;
							startMove(temobj, aPos[i]);

							temobj.index -= 1;
							objo.index += 1;
						}
					} else { //从大到小
						var temobj = objo;
						for (var i = objo.index; i > oNear.index; i--) {
							for (var j = 0; j < aLi.length; j++) { //li元素位置赋值
								if (aLi[j].index == i - 1) {
									temobj = aLi[j];
									break;
								};
							}
							temobj.className = "";
							temobj.style.zIndex = minZindex++;
							objo.style.zIndex = minZindex++;
							startMove(temobj, aPos[objo.index]);
							temobj.index += 1; //交换index
							objo.index -= 1;
						}
					}
					//-----------
				}
			}
		}
		obj.onmouseup = function (event) { //鼠标按下后抬起 onmouseup ondrop
			ismousedown = false;
			//console.log("鼠标按下后抬起 ismousedown" + ismousedown);
			//document.onmousemove = null; //当鼠标弹起时移出移动事件
			//document.onmouseup = null; //移出up事件，清空内存
			//检测是否碰上，再交换位置
			
			
			var oNear = findMin(objo);
			if (oNear) {
				//----------
				oNear.className = "";
				oNear.style.zIndex = minZindex++;
				objo.style.zIndex = minZindex++;
				startMove(oNear, aPos[objo.index]);
				startMove(objo, aPos[oNear.index]);

				var tempindex = objo.index;
				objo.index = oNear.index;
				oNear.index = tempindex;
				//-----------

			} else {
				startMove(objo, aPos[objo.index]);
			}

			//获取最后的顺序输出给后台 开始
			var s="";
			for (var iindex = 0; iindex < aLi.length; iindex++) {
				//console.log("aLi["+iindex+"]     【"+aLi[iindex].index);
				for (var j = 0; j < aLi.length; j++) { //li元素位置赋值
					if (aLi[j].index == iindex) {
						//ids[iindex]=aLi[j].id;
						s+=","+aLi[j].id;
						//console.log("index为["+iindex+"]的obj的id为  【"+aLi[j].index+"】id为   【"+aLi[j].id);
						break;
					};

				}
			}
			s=s.substr(1);
//				console.log("传给后台："+s);
			//获取最后的顺序输出给后台 结束

			var mouseUpTop = event.clientX;
			var mouseUpLeft = event.clientY;
//				console.log(mouseDownTop + ", " + mouseUpTop);
			
			if(mouseDownTop == mouseUpTop && mouseDownLeft == mouseUpLeft){
				//console.log(obj.href);
				objo.removeAttribute("onClick");
				objo.href="http://www.pinton.com.cn";
			}else{
				objo.setAttribute("onClick","return false");
				
				//此处给li元素增加一个属性用于区分用户点击的是那个功能
				var	v_num = $(event.target).parent().parent().parent().attr('data-menu'); 
				iconUpdate(s,v_num);
			}
			
		}
	}
	
	//碰撞检测
	function colTest(obj1, obj2) {
		if (!obj1)
			return false;
		var t1 = obj1.offsetTop;
		var r1 = obj1.offsetWidth + obj1.offsetLeft;
		//var b1 = obj1.offsetHeight+obj1.offsetTop;
		//var l1 = obj1.offsetLeft;

		var t2 = obj2.offsetTop;
		var r2 = obj2.offsetWidth + obj2.offsetLeft;
		//var b2 = obj2.offsetHeight+obj2.offsetTop;
		//var l2 = obj2.offsetLeft;
		//对象的x边距相差80px时,y边距相差70px,才开始考虑是否碰撞
		//避免抖动 disx和disy要比对象的宽度200和高度150的1/2要小即可
		var disx = 80;
		var disy = 70;
		//obj2.getAttribute("canPZ")==0 此处是为了避免抖动现象,移动中的对象真正停止之后才计算是否碰撞
		if (obj2.getAttribute("canPZ") == 0 || Math.abs(t1 - t2) > disy || Math.abs(r1 - r2) > disx) {
			return false;
		} else {
			//console.log(obj2.index+":"+obj2.getAttribute("canPZ"));
			return true;
		}
	}
	
	//勾股定理求距离
	function getDis(obj1, obj2) {
		var a = obj1.offsetLeft - obj2.offsetLeft;
		var b = obj1.offsetTop - obj2.offsetTop;
		return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
	}
	
	//找到距离最近的
	function findMin(obj){
		var minDis = 999999999;
		var minIndex = -1;
		for(var i=0;i<aLi.length;i++){
			if(obj==aLi[i])continue;
			if(colTest(obj,aLi[i])){
				var dis = getDis(obj,aLi[i]);
				if(dis<minDis){
					minDis = dis;
					minIndex = i;
				}
			}
		}
		if(minIndex==-1){
			return null;
		}else{
			return aLi[minIndex];
		}
	}
	
	/************************
	 * 
	 * 更新Icon位置信息-------
	 * 
	 ************************/ 
	function iconUpdate(s,v_num){
		var controller = "";
		if(v_num == 2){ // 爱常用
			controller = "userIconUpdate.do";
		}else if(v_num == 3){ // 爱工作
			controller = "workIconUpdate.do";
		}else if(v_num == 4){ // 爱生活
			controller = "lifeIconUpdate.do";
		}
		$.ajax({
			type : "POST",
			url : controller,
			data : { "sortString":s },
			success : function(iconData){
			}
		});
	}
	function iconEdit(id,v_num){
		var controller = "";
		if(v_num == 2){ // 爱常用
			controller = "findUserIconById.do";
			$.ajax({
			type : "POST",
			url : controller,
			data : { "iconId":id },
			success : function(iconData){
				var data = eval("("+iconData+")");
				$("#addTypeIcon").val(v_num);
				$("#pk_icon").val(data.pk_userIcon);
				$('#myModal2').modal({backdrop:"static", keyboard:false, show:true});
				$("#iconname").val(data.param_title);
				$("#iconaddress").val(data.param_href);
			}
		});
		}else if(v_num == 3){ // 爱工作
			controller = "findWorkIconById.do";
			$.ajax({
			type : "POST",
			url : controller,
			data : { "iconId":id },
			success : function(iconData){
				var data = eval("("+iconData+")");
				$("#addTypeIcon").val(v_num);
				$("#pk_icon").val(data.pk_companyIcon);
				$('#myModal2').modal({backdrop:"static", keyboard:false, show:true});
				$("#iconname").val(data.param_title);
				$("#iconaddress").val(data.param_href);
			}
		});
		}else if(v_num == 4){ // 爱生活
			controller = "findLifeIconById.do";
			$.ajax({
			type : "POST",
			url : controller,
			data : { "iconId":id },
			success : function(iconData){
				var data = eval("("+iconData+")");
				$("#addTypeIcon").val(v_num);
				$("#pk_icon").val(data.pk_liftIcon);
				$('#myModal2').modal({backdrop:"static", keyboard:false, show:true});
				$("#iconname").val(data.param_title);
				$("#iconaddress").val(data.param_href);
			}
		});
		}
		
	}
	
	/************************
	 * 
	 * 点击时-------
	 * 
	 ************************/ 
	$(document).click(function (e) { 
		var	v_id = $(e.target).attr('id'); 
		if(v_id == null) return; // 避免v_id为null时，firebug报错
		if(v_id.substring(0,3) == "del") { // 
			var obj_child = $("#"+v_id); 
			var objIndex = obj_child.parent().parent()[0].index;
			$(obj_child).parent().parent().remove();
			// 删除之后，后面的内容向前移动一个单元
//				console.log("objIndex:      "+objIndex);
			var temobj;
			for(var i=objIndex; i<aLi.length;i++){
				for(var j=0;j<aLi.length;j++){//元素位置赋值
					if(aLi[j].index == i+1){
						temobj=aLi[j];
						break;
					};
				}
				
				temobj.className = "";
				// temobj.style.zIndex = minZindex++;
				startMove(temobj,aPos[i]);
				temobj.index -= 1;
			}
			
			//获取最后的顺序输出给后台 开始
			var sortString="";
			for (var iindex = 0; iindex < aLi.length; iindex++) {
				 // console.log("aLi["+iindex+"]--> "+aLi[iindex].index);
				for (var j = 0; j < aLi.length; j++) { //元素位置赋值
					if (aLi[j].index == iindex) {
						//ids[iindex]=aLi[j].id;
						sortString+=","+aLi[j].id;
						// console.log("index为["+iindex+"]的obj的id为  【"+aLi[j].index+"】id为   【"+aLi[j].id);
						break;
					};

				}
			} 
			sortString=sortString.substr(1);
//				console.log("传给后台："+sortString);
			//获取最后的顺序输出给后台 结束
			
			// 执行删除方法，使用和移动同样的处理
			var	v_num = $(e.target).parent().parent().attr('data-menu'); 
			iconUpdate(sortString,v_num);
		}
		if(v_id.substring(0,3) == "edi"){
			$("#iconname").val(""); $("#iconaddress").val("");
			var obj_child = $("#"+v_id); 
			var objId = obj_child.parent().parent()[0].id;
//				$(obj_child).parent().remove();
//				$("#"+objId).click(function(){
			var	v_num = $(e.target).parent().parent().attr('data-menu'); 
			iconEdit(objId,v_num);
			
		}
	});
		
}

	//通过class获取元素
	function getClass(cls){
	    var ret = [];
	    var els = document.getElementsByTagName("*");
	    for (var i = 0; i < els.length; i++){
	        //判断els[i]中是否存在cls这个className;.indexOf("cls")判断cls存在的下标，如果下标>=0则存在;
	        if(els[i].className === cls || els[i].className.indexOf("cls")>=0 || els[i].className.indexOf(" cls")>=0 || els[i].className.indexOf(" cls ")>0){
	            ret.push(els[i]);
	        }
	    }
	    return ret;
	}
	function getStyle(obj,attr){//解决JS兼容问题获取正确的属性值
		return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];
	}
	function startMove(obj,json){
		clearInterval(obj.timer);
		obj.setAttribute("canPZ",0);
		obj.timer = setInterval(function(){
			var isStop = true;
			for(var attr in json){
				var iCur = 0;
				//判断运动的是不是透明度值
				if(attr=="opacity"){
					iCur = parseInt(parseFloat(getStyle(obj,attr))*100);
				}else{
					iCur = parseInt(getStyle(obj,attr));
				}
				var ispeed = (json[attr]-iCur)/8;
				//运动速度如果大于0则向下取整，如果小于0想上取整；
				ispeed = ispeed>0?Math.ceil(ispeed):Math.floor(ispeed);
				//判断所有运动是否全部完成
				if(iCur!=json[attr]){
					isStop = false;
				}
				//运动开始
				if(attr=="opacity"){
					obj.style.filter = "alpha:(opacity:"+(json[attr]+ispeed)+")";
					obj.style.opacity = (json[attr]+ispeed)/100;
				}else{
					obj.style[attr] = iCur+ispeed+"px";
				}obj.style[attr] 
				//console.log(obj.index+":"+obj.style[attr] );
			}
			//判断是否全部完成
			//console.log("isStop:"+isStop );
			//console.log("canPZ:"+canPZ );
			if(isStop){
				obj.setAttribute("canPZ",1);;
				clearInterval(obj.timer);		
			}
		},30);
	}
	
	function initIcon(iconData,num){
		var data = eval("("+iconData+")");
		var $add = $("#ul" + num);
//			[{"name":"a","param_id":"1","param_title":"百度","param_href":"https://www.baidu.com"},{"name":"a","param_id":"2","param_title":"百度","param_href":"https://www.baidu.com"}]
		$add.children().remove();
		$.each(data, function(i, value){
			$add.append("<li id="+value.pk_userIcon+" data-menu='"+num+"' ><div> " +
					"<a href='"+value.param_href+"' title='"+value.pk_userIcon +"' target='_blank'> " +
//						"<a title='"+value.param_title +"' target='_blank'> " +
					"<img src='"+value.icon_path+"' width='115' height='70' ></img> " +
						// "<em>"+value.param_title+"</em></a></div> " +  // 右下角数字显示
					"<a id='del"+value.iconsort+"'>del</a> " +
					"<a id='edit"+value.iconsort+"'>edit</a> " +
					"</li>");
		});
	}
	
