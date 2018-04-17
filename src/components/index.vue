<template>
	<div class="">
		<top>
			<i class="el-icon-phone-outline"></i>
		</top>
		<swipe class="my-swipe">
			<swipe-item class="slide1" v-for="value in picList" :key="value.id">
				<img :src="value.picPath" />
			</swipe-item>		
		</swipe>
		<ul>
			<li v-for="i in 6">
				<p class="icon" :style="bgPosition"></p>
				<p class="title">上门送取</p>
			</li>
		</ul>
	
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
				bgPosition:{backgroundPosition: "-35px 0"}
			}
		},
		methods:{
			
		},
		mounted(){
			axios.get("/img").then((res)=>{
				this.bannerlist = res.data.picList;
				console.log(res.data)
			}).catch((error)=>{
				console.log(error);
			});
			
			
		},
		components:{
			"swipe":Swipe,
			"swipe-item":SwipeItem,
			top
		}
	}
</script>

<style lang="scss" scoped="scoped">
html{
	font-size:0.08rem;
	height: 100%;
	width: 100%;
div{
	font-size: 0.08rem;
	width: 100%;
	>top{
		background: #1b2939 url(https://mimage.zuchecdn.com/newportion/newindex/logonew.png) center no-repeat;
		background-size: 0.56rem 0.09rem;
			i{
				color: yellow;
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
				margin: 0.16rem auto 0.03rem;
				width: 0.2rem;
				height: 0.2rem;
				background: url(../../static/pictures/icon.png);
				background-size:100% 100%;
			}
			.title{
				line-height: 0.16rem;
				text-align: center;
			}
		}
	}
	}

	div>.my-swipe {
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
}
</style>