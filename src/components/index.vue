<template>
	<div class="">
		
		神州租车
		<i class="el-icon-edit"></i>
<i class="el-icon-share"></i>
<i class="el-icon-delete"></i>
<el-button type="primary" icon="el-icon-search">搜索</el-button>

	<!--<swipe class="my-swipe">
		<swipe-item class="slide1" v-for="value in bannerlist" :key="value.id">
			<img :src="value.imageUrl" />
		</swipe-item>
		
	</swipe>-->
	
	</div>
</template>

<script>
	
	import { Swipe, SwipeItem } from 'vue-swipe';
	import axios from "axios";
	export default {
		data(){
			return {
				bannerlist:[],
				filmlist:[],
			}
		},
		methods:{
			
		},
		mounted(){
			/*axios.get("/v4/api/billboard/home?__t=1523674602513").then((res)=>{
				this.bannerlist = res.data.data.billboards;
			}).catch((error)=>{
				console.log(error);
			});
			
			axios.get("/v4/api/film/now-playing?__t=1523674602525&page=1&count=5").then((res)=>{
				this.filmlist = res.data.data.films;
			}).catch((error)=>{
				console.log(error);
			});*/
		},
		components:{
			/*"swipe":Swipe,
			"swipe-item":SwipeItem,
			filmbox,*/
		}
	}
</script>

<style lang="scss" scoped="scoped">
div{
	font-size: 0.08rem;
	width: 100%;
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
</style>