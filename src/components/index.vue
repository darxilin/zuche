<template>
	<div class="index">
		<top>
			<div class="top"><i class="el-icon-phone-outline"></i></div>
		</top>
		<swipe class="my-swipe">
			<swipe-item class="slide1" v-for="value in picList" :key="value.id">
				<img :src="value.picPath" />
			</swipe-item>		
		</swipe>
		<ul>
			<router-link :to="getRouter(i)" v-for="value,i in params" tag="li" :key="i">
				<!--{{value}}-->
				
					<p class="icon" :style="`background-position:${value}`" ></p>
					<p class="title">{{dataTitle[i]}}</p>
				
			</router-link>
		</ul>
		<h3>400-616-6666</h3>
		<p class="download">
			<el-button tag="div"><em class="iconfont icon-mobilephone"></em>下载    app</el-button>
			<el-button tag="div"><em class="iconfont icon-electronics"></em>访问网页版</el-button>
		</p>
		<p class="foot">
			<a href="#">关于我们</a>
			<a href="#">用户反馈</a>
			<a href="#">帮助中心</a>
		</p>
		<p class="copyright">Copyright ©2018 神州租车</p>
		
	</div>
</template>

<script>
	import top from './common/top.vue';
	import { Swipe, SwipeItem } from 'vue-swipe';
	import axios from "axios";
	
	export default {
		data(){
			return {
				picList:[{"picPointUrl":"http://mktm.zuche.com/html5/activityplanning/newtopic/oetimerent.html?szhdbm=20180327_oetimerent_wap&utm_campaign=oetimerent&utm_source=guanwang&utm_medium=wap","picPath":"http://fimg.zuchecdn.com/upload/app/HomePage/HeadFigure/2018/750x410-fenshizulin-20180328-APP.JPG","id":349,"picPathS":"","sortId":50,"picName":"/750x410-fenshizulin-20180328-APP.JPG"},{"picPointUrl":"http://mktm.zuche.com/html5/activityplanning/newtopic/oetimerentlong.html?szhdbm=20180329_oetimerentlong_wap","picPath":"http://fimg.zuchecdn.com/upload/app/HomePage/HeadFigure/2018/750x410-XSZN-20180330-APP.jpg","id":356,"picPathS":"","sortId":48,"picName":"/750x410-XSZN-20180330-APP.jpg"},{"picPointUrl":"http://mktm.zuche.com/html5/2018/pullnewmemberlog/index.html?szhdbm=20180328_invitation_wap&utm_campaign=invitation&utm_source=guanwang&utm_medium=wap","picPath":"http://fimg.zuchecdn.com/upload/app/HomePage/HeadFigure/2018/750x410-yx-20180328-appshare-APP.jpg","id":351,"picPathS":"","sortId":47,"picName":"/750x410-yx-20180328-appshare-APP.jpg"},{"picPointUrl":"http://mktm.zuche.com/html5/activityplanning/newtopic/oeactivity692.html?szhdbm=20180320_activity692_wap&utm_campaign=qingming&utm_source=guanwang&utm_medium=wap","picPath":"http://fimg.zuchecdn.com/upload/app/HomePage/HeadFigure/2018/750x410-real69-20180320-APP-WAP.jpg","id":339,"picPathS":"","sortId":46,"picName":"/750x410-real69-20180320-APP-WAP.jpg"},{"picPointUrl":"http://mktm.zuche.com/html5/activityplanning/newtopic/oediscountgjzc.html?szhdbm=20180130_discountgjzc_wap?szhdbm=20180130_discountgjzc_wap&utm_campaign=discountgjzc&utm_source=guanwang&utm_medium=wap","picPath":"http://fimg.zuchecdn.com/upload/app/HomePage/HeadFigure/2018/750x410-guojizuche-180201-app-wap.jpg","id":310,"picPathS":"","sortId":32,"picName":"/750x410-guojizuche-180201-app-wap.jpg"}],
				filmlist:[],
				dataTitle:["上门送取","到店取还","特价套餐","顺风车","国际租车","我的"],
				params:['-35px 0','-77px 0','0 -40px','-35px -40px','-75px -40px','-110px -40px'],
				routers:["/zuche/sm","/zuche/dd","/zuche/tj","/sfc","/inter","/my"]
			}
		},
		methods:{
			getRouter(i){
				
				 return this.routers[i];
			}
		},
		mounted(){	
		},
		components:{
			"swipe":Swipe,
			"swipe-item":SwipeItem,
			top
		}
	}
</script>

<style lang="scss" scoped="scoped">
body,h3,p{
	padding: 0;
	margin: 0;
}
a{
	text-decoration: none;
}
p{
	text-align: center;
}

.index{
	background: #f7f7f8;
	font-size: 0.08rem;
	width: 100%;
	
		   .top{
		   	height: 100%;
		   	 	background: #1b2939 url(https://mimage.zuchecdn.com/newportion/newindex/logonew.png) center no-repeat;
    			background-size: 112px 18px;
    			i{
				color: yellow;
				position: absolute;
				display: block;
				top:0.06rem;
				right: 0.05rem;
				font-size: 0.13rem;
				}
		   }
		
	>ul{
		width: 100%;
		display: flex;
		flex-flow: row wrap;
		>li{
			width: 50%;
			background: #fff;
			.icon{
				margin: 0.1rem auto 0.03rem;
				width: 0.2rem;
				height: 0.2rem;
				background-image: url(../../static/pictures/icon.png);
				background-size: 150px 160px;
    			background-position: -35px 0;
			}
			.title{
				line-height: 0.16rem;
				text-align: center;
				margin-bottom: 0.05rem;
			}
		}
	}
	h3{
		text-align: center;
		line-height: 0.16rem;
		margin: 0.1rem 0;
		color: #2f2f39;
	}
	.download{
		width: 100%;
		display: flex;
		justify-content: space-around;
		
	}
	.foot{
		display: flex;
		justify-content: space-around;
		margin: 0.1rem 0;
		a{
		color: #60606c;
		}
	} 
	
	.copyright{
		color:#60606c;
		font-size: 0.06rem;
		margin-bottom: 0.05rem;
	}
	}

	.index>.my-swipe {
  height: 200px;
  color: #000;
  font-size: 30px;
  text-align: center;
}

.slide1 {
	width: 100%;
	height: 100%;
  background-color: #0089dc;
  color: #000;
  >img{
  	width: 100%;
  	height: 100%;
  }
}
.filmlist{
	width: 100%;	
}
.mint-swipe,.mint-swipe-items-wrap{overflow:hidden;position:relative;height:100%}.mint-swipe-items-wrap{-webkit-transform:translateZ(0);transform:translateZ(0)}.mint-swipe-items-wrap>div{position:absolute;-webkit-transform:translateX(-100%);transform:translateX(-100%);width:100%;height:100%;display:none}.mint-swipe-items-wrap>div.is-active{display:block;-webkit-transform:none;transform:none}.mint-swipe-indicators{position:absolute;bottom:10px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.mint-swipe-indicator{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2;margin:0 3px}.mint-swipe-indicator.is-active{background:#fff}

</style>