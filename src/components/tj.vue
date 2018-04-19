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
		<qh @city="choose_city" :route_name="route_name"></qh>
		
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
				
			}
		},
		methods:{
			choose_click(index){
				for(var i = 0;i<this.tc_list.length;i++){
					Vue.set(this.tc_list,i,{name:this.tc_list[i].name,isclicked:false});
				}
				this.tc_list[index].isclicked = true;
			},
			choose_city(data){
				
				//router.push({name:"city",params:{route_name:this.route_name}})
			}
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