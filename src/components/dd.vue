<template>
	<div id="dd">
		<top>
			<mt-header title="到店取还" class="mt-header">
				<router-link to="/" slot="left">
					<mt-button icon="back" id="ddback" ></mt-button>
				</router-link>
				<router-link to="/" slot="right">
					<mt-button class="iconfont icon-store" id="ddindex"></mt-button>
				</router-link>
			</mt-header>
		</top>
		<!--@city触发获取城市事件-->
		<qh :route_name="route_name" :qc_city="qc_city" :hc_city="hc_city" :qc_md="qc_md" :hc_md="hc_md" :qc_time="qc_time" :hc_time="hc_time"></qh>
	</div>
</template>

<script>
	import top from "./common/top"
	import qh from "./common/qh"
	import { Header } from 'mint-ui';
	import Vue from 'vue';
	Vue.component(Header.name, Header);
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
		},
		components:{
			top,
			qh
		}
	}
</script>

<style lang="scss">
	#dd{
		height: 100%;
		.mt-header{
			height: 0.25rem;
			background: #1b2939;
			font-size: 0.09rem;
			
		}
		#ddback{
			.mintui{
				font-size: 0.13rem;
				color:yellow;
			}
				
		}
		#ddindex{
			font-size: 0.15rem;
		}
	}
</style>