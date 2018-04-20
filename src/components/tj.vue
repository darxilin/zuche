<template>
	<div class="tj">
		<top>
			<mt-header class="top_header" title="特价套餐" >
				<router-link to="/" slot="left">
					 <mt-button class="back" icon="back"></mt-button>
				</router-link>
				<mt-button class='el-icon-info' slot="right"></mt-button>
			</mt-header>
		</top>
		<div class="tj_time">
			<div class="time_scroll">
			<ul>
				<li v-for="value,index in tc_list"><span :class="value.isclicked?'active':''" @click="choose_click(index)">{{value.name}}</span></li>
			</ul>
			</div>
		</div>
		<!--@city触发获取城市事件-->
		<qh :route_name="route_name" :qc_city="qc_city" :hc_city="hc_city" :qc_md="qc_md" :hc_md="hc_md" :qc_time="qc_time" :hc_time="hc_time"></qh>
		
	</div>
	
</template>

<script>
	import router from "../router"
	import Vue from "vue"
	import top from "./common/top"
	import qh from "./common/qh"
	export default {
		data(){
			return {
				tc_list:[{name:"工作日/4天",isclicked:true},{name:"周租/7-27天",isclicked:false},{name:"月租/28+天",isclicked:false},{name:"年租/365天",isclicked:false}],
				route_name:"tj",
				qc_city:{name:"北京",cityId:1},
				hc_city:{name:"北京",cityId:1},
				hc_md:{deptName:"选择门店"},
				qc_md:{deptName:"选择门店"},
				qc_time:{},
				hc_time:{},
			}
		},
		mounted(){
			function day_time(date){
				var dates = new Date()
				dates.setTime(date)
				var _week = (dates)=>{
					var week = dates.getDay();
					var str = " 周";
					switch(week){
						case 0:str += "日";
							break;
						case 1:str += "一";
							break;
						case 2:str += "二";
							break;
						case 3:str += "三";
							break;
						case 4:str += "四";
							break;
						case 5:str += "五";
							break;
						case 6:str += "六";
							break;
						
					}
					return str;
				};
				var _day = dates.getMonth() + 1 +"-"+dates.getDate() + _week(dates)
				var time1 = ()=>{
					if(dates.getMinutes()>=0 && dates.getMinutes()<=29){
						return "00";
					}else{
						return "30";
					}
				};
				var _times = dates.getHours() + ":" + time1()
				var _time = {day:_day,time:_times}
				return _time;
				}
			//获取城市和地址
			if(sessionStorage.getItem("qc_city")){
				this.qc_city = JSON.parse(sessionStorage.getItem("qc_city"))
			}
			if(sessionStorage.getItem("hc_city")){
				this.hc_city = JSON.parse(sessionStorage.getItem("hc_city"))
			}
			if(sessionStorage.getItem("qc_md")){
				this.qc_md = JSON.parse(sessionStorage.getItem("qc_md"))
			}
			if(sessionStorage.getItem("hc_md")){
				this.hc_md = JSON.parse(sessionStorage.getItem("hc_md"))
			}
			if(sessionStorage.getItem("qc_time")){
				var qc_time = Number(sessionStorage.getItem("qc_time"))
				this.qc_time = day_time(qc_time)
			}else{
				var d1= new Date()
				this.qc_time = day_time(d1.getTime())
			}
			if(sessionStorage.getItem("hc_time")){
				var hc_time = Number(sessionStorage.getItem("hc_time"))
				this.hc_time = day_time(hc_time)
			}else{
				var d2= new Date()
				d2.setDate(d2.getDate()+5);
				this.hc_time = day_time(d2.getTime())
			}
			/*if(this.$route.params.num !=undefined){
				if(this.$route.params.num == 1){
					this.qc_city = {name:this.$route.params.cityName,cityId:this.$route.params.cityId};
				}else if(this.$route.params.num == 2){
					this.hc_city = {name:this.$route.params.cityName,cityId:this.$route.params.cityId};
				}
			}*/
			console.log(this.qc_city.name,this.hc_city.name)
			
			
			/*sessionStorage.setItem("qc_city",JSON.stringify({name:"重庆",cityId:12}))
			console.log(sessionStorage.getItem("qc_city"))
			console.log(JSON.parse(sessionStorage.getItem("qc_city")).name)*/
			
		},
		methods:{
			choose_click(index){
				for(var i = 0;i<this.tc_list.length;i++){
					Vue.set(this.tc_list,i,{name:this.tc_list[i].name,isclicked:false});
				}
				this.tc_list[index].isclicked = true;
			},
			
		},
		components:{
			top,
			qh
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.tj{
		.top_header{
			height: 100%;
			width: 100%;
			background: #1b2939;
			font-size: 0.09rem;
			.back,.el-icon-info{
				font-size: 0.09rem;
				color: #fabe00;
			}
			
		}
		>.tj_time{
			overflow: hidden;
			width: 100%;
			margin-bottom: 0.075rem;
			>.time_scroll{
				width: 150%;
				overflow-x:scroll ;
				overflow-scrolling:touch;
				-webkit-overflow-scrolling: touch;
			
			>ul{
				display: flex;
				width: 2.4rem;
				background: #fff;
			
			>li{
				padding: 0 0.075rem;
				float: left;
				>span{
					padding: 0.05rem 0;
					display: block;
					&.active{
						border-bottom: 0.015rem solid #fabe00;
						color: #fabe00;
					}
				}
			}
			}
			}
		}
	}
</style>