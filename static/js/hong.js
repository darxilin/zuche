//判断某年份是否为闰年
function isLeapYear(year) {
	if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
		return true;
	}
	return false;
}
//将日期格式化输出 “2015|08|24”
function formatDate(oDate, str) {
	var year = oDate.getFullYear();
	var month = oDate.getMonth() + 1;
	var day = oDate.getDate();

	/*if(month<10){
		month = "0"+month;
	}
	if(day<10){
		day = "0"+day;
	}*/

	var val = year + str + format(month) + str + format(day);

	return val;

}
//获得某个月份的天数
function getDays(oDate, month) {
	var year = oDate.getFullYear();
	switch(month) {
		case 4:
		case 6:
		case 9:
		case 11:
			return 30;
			break;
		case 2:
			if(isLeapYear(year)) {
				return 29;
			}
			return 28;
		default:
			return 31;
	}
}
//判断两个日期相差的天数
function getDiffDays(oDate1, oDate2) {
	var ms = Math.abs(oDate2 - oDate1);
	var day = ms / 1000 / 24 / 60 / 60;
	return day;
}
//获得N天以后的日期
function getNDate(n) {
	var oDate = new Date();
	var num = oDate.getDate();
	oDate.setDate(num + n);
	return oDate;
}
//个位数补0
function format(num) {
	//如果num<10这个条件成立，执行"0"+num,否者的话执行num
	/*if(num<10){
		num = "0"+num;
	}else{
		num = num;
	}*/
	//num =  num<10?"0"+num:num;
	//return num;

	return num < 10 ? "0" + num : num;
}
//通过类名获取节点
function getByClass(name) {
	if(document.getElementsByClassName) {
		return document.getElementsByClassName(name);
	}
	//获取当前页面的所有节点
	var arr1 = [];
	var allNodes = document.getElementsByTagName("*");
	//遍历所有的节点，取到每个节点中的类名
	for(var i = 0; i < allNodes.length; i++) {
		//取到的是一个字符串，不能直接使用indexOf方法判断是否含有name
		//转换成数组
		var arr = allNodes[i].className.split(" ");
		//仍然不能使用数组indexOf方法，该方法不兼容
		for(var j = 0; j < arr.length; j++) {
			//如果数组中有name，将对应节点保存
			if(arr[j] === name) {
				arr1.push(allNodes[i]);
			}
		}
	}
	return arr1;
}
//样式兼容函数
function getStyle(obj, attr) {
	if(window.getComputedStyle) {
		return getComputedStyle(obj, null)[attr];
	}
	return obj.currentStyle[attr];
}
//添加事件
function addEvent(obj, name, fn) {
	if(obj.addEventListener) {
		obj.addEventListener(name, fn, false);
	} else {
		obj.attachEvent("on" + name, fn);
	}
}

function removeEvent(obj, name, fn) {
	if(obj.removeEventListener) {
		obj.removeEventListener(name, fn);
	} else {
		obj.detachEvent("on" + name, fn);
	}
}

//cookie相关函数封装

//获取cookie
function getCookie(name) {

	var str = document.cookie;
	var arr = str.split("; ");
	for(var i = 0; i < arr.length; i++) {
		arr1 = arr[i].split("=");
		if(arr1[0] === name) {
			return arr1[1];
		}
	}
}

//设置cookie
function setCookie(name, value, time) {
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + time);
	document.cookie = "" + name + "=" + value + ";expires=" + oDate;

}

//删除cookie
function removeCookie(name) {
	setCookie(name, null, -1);
}

//改变dom元素的多个样式
//第一个参数为要改变样式的元素，第二个参数为样式及要改变为的值的json格式数据，第三个参数为元素改变的速度，第四个为回调函数
function move(div, json,time, fn) {
	//清除其他的定时器
	clearInterval(div.timer);
	div.timer = setInterval(function(){
		//判断某元素的要改变的样式是否都已改变完的标志
		var flag = true;
		//遍历要改变的样式
		for(var attr in json) {
			//获取到json数据中的改变终值
			var _target = json[attr];
			if(attr == "scrollTop"){
				var cur = div.documentElement.scrollTop || div.body.scrollTop;
			}else if(attr == "opacity"){
				var cur = div.style[attr]*100;
			}
			else{
				var cur = parseInt(div.style[attr]);
			}
			
			//设置每次改变的值，达到缓冲效果
			var speed = (_target - cur) / 8;
			if(speed>0){
				//当改变值达到某个临界值，直接取整
				speed = speed < 1 ? Math.ceil(speed) : Math.floor(speed);
			}
			else{
				speed = speed > -1 ? Math.floor(speed) : Math.ceil(speed);
			}
			if(attr == "scrollTop"){
				div.documentElement.scrollTop = cur + speed;
			}else if(attr == "opacity"){
				div.style.opacity = (cur + speed)/100;
				//div.style["filter"] = "Alpha(opacity=" + (cur + speed) + ")";
			}
			else{
				div.style[attr] = cur + speed + "px";
			}
			console.log(cur, speed,_target);
			
			//判断是否是所有的需要改变的值都已达到目标值
			if(cur != _target) {
				flag = false;
				console.log("2", cur, speed);
			}

		}
		if(flag){
			clearInterval(div.timer);
			if(fn) //只有传了这个函数才去调用
            {
                fn();
            }
		}
		
	},time);
}

function startMove(obj, json ,fnEnd)
{
    var MAX=18;
    //每次调用就只有一个定时器在工作(开始运动时关闭已有定时器)
    //并且关闭或者开启都是当前物体的定时器，已防止与页面上其他定时器的冲突，使每个定时器都互不干扰 
    clearInterval(obj.timer); 
    obj.timer=setInterval(function (){
 
        var bStop=true; // 假设：所有的值都已经到了
 
        for(var name in json)
        {
            var iTarget=json[name];  // 目标点
 
            //处理透明度，不能使用parseInt否则就为0了 
 
            if(name=='opacity')
            {
 
                // *100 会有误差 0000007 之类的 所以要用 Math.round() 会四舍五入
                var cur=Math.round(parseFloat(getStyle(obj, name))*100); 
            }
            else
            {
                var cur=parseInt(getStyle(obj, name));  // cur 当前移动的数值
            }
 
            var speed=(iTarget-cur)/2;  // 物体运动的速度 数字越小动的越慢  /5 : 自定义的数字
 
            speed=speed>0?Math.ceil(speed):Math.floor(speed);
 
            if(Math.abs(speed)>MAX)speed=speed>0?MAX:-MAX;
 
            if(name=='opacity')
            {
                obj.style.filter='alpha(opacity:'+(cur+speed)+')'; //IE
                obj.style.opacity=(cur+speed)/100; //ff chrome
            }
            else
            {
                obj.style[name]=cur+speed+'px';
				//document.title=cur
            }
 
            // 某个值不等于目标点 
            if(cur!=iTarget)
            {
                bStop=false;
            }
        }
 
        // 都达到了目标点
        if(bStop)
        {
            clearInterval(obj.timer);
 
            if(fnEnd) //只有传了这个函数才去调用
            {
                fnEnd();
            }
        }
    }, 200);
}