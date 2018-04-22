<template>
	<div class="city">
		<top>
			<mt-header class="top_header" title="选择城市" >
				<router-link :to="{name:route_back}" slot="left">
					 <mt-button class="back" icon="back"></mt-button>
				</router-link>
			</mt-header>
		</top>
		<div class="left">
		<!--当前城市-->
		<div class="current">
			<p class="city">当前城市</p>
			<p class="name">
				<i class="iconfont icon-map"></i>
				<span>{{city.name}}</span>
			</p>
		</div>
		
		<!--最近访问城市-->
		<div class="recent">
			<p class="city">最近访问城市</p>
			<p class="city_name">
				<span v-for="value in recent" @click="
					city_click(value.name)">{{value.name}}</span>
			</p>
		</div>
		
		<!--热门城市-->
		<div class="hot">
			<p class="city">热门城市</p>
			<p class="city_name">
				<span v-for="value in hot" @click="
					city_click(value.name)">{{value.name}}</span>
			</p>
		</div>
		<!--城市列表-->
		<div class="city_letter" v-for="value in letter">
			<p class="city">{{value.letter}}</p>
			<p class="city_name">
				<span v-for="key in value.list" @click="
					city_click(key.cityName)">{{key.cityName}}</span>
			</p>
		</div>
		</div>
		<!--右侧导航-->
		<div class="nav_right">
			<span>历史</span>
			<span>热门</span>
			<span v-for="value in nav">{{value}}</span>
		</div>
		
		
	</div>
</template>

<script>
	import router from "../../router"
	import axios from "axios"
	import top from "./top"
	export default {
		data(){
			return {
				city:{name:"重庆",cityId:12},
				num:"",
				recent:[{name:"重庆",cityId:12},{name:"成都",cityId:11}],
				hot:[{name:"重庆",cityId:12},{name:"成都",cityId:11}],
				nav:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
				route_back:"",
				cityList:null,
				letter:null,
				click_city:null,
			}
		},
		methods:{
			city_click(name){
				//存储城市信息
			if(this.num == 1){
				sessionStorage.setItem("qc_city",JSON.stringify({name:name}))
			}else if(this.num == 2){
				sessionStorage.setItem("hc_city",JSON.stringify({name:name}))
			}
			router.push({name:this.route_back})
			}
		},
		beforeMount(){
			axios.get("/jiekou/city").then((res)=>{
				this.cityList = res.data.result;
				this.letter = [];
			for(var i=0;i<26;i++){
				var obj = {};
				obj.letter = String.fromCharCode((65+i));
				obj.list = []
				this.letter.push(obj);
			}
			for(var i=0;i<this.cityList.length;i++){
			var j = this.cityList[i].py.toUpperCase().charCodeAt(0)-65;
			this.letter[j].list.push(this.cityList[i]);
			}
			console.log(...(this.letter))
			
			})
			this.route_back = this.$route.params.route_name;
			this.num = this.$route.params.num;
			
			
			
			
		},
		mounted(){
			
			
		},
		components:{
			top
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.city{
		background: #fff;
		.top_header{
			height: 100%;
			width: 100%;
			background: #1b2939;
			font-size: 0.09rem;
			.back{
				font-size: 0.09rem;
				color: #fabe00;
			}
			
		}
		>.nav_right{
			position: fixed;
			right: 0;
			top: 0.4rem;
			>span{
				color: #8d8d96;
				font-size: 0.05rem;
				text-align: center;
				width: 0.1rem;
				display: block;
			}
		}
		>.left{
			margin-right: 0.1rem;
			>.current{
				>.city{
					width: 100%;
					background: #f7f7f8;
					color: #8d8d96;
					font-size: 0.07rem;
					text-indent: 0.05rem;
				}
				>.name{
					height: 0.3rem;
					line-height: 0.3rem;
					font-size: 0.08rem;
					>i{
						width: 0.2rem;
						display: inline-block;
						text-align: center;
					}
				}
				>.city_name{
					overflow: hidden;
					padding: 0 0.025rem;
					>span{
						color: #8D8D96;
						float: left;
						display: block;
						line-height: 0.2rem;
						text-align: center;
						border-radius: 0.01rem;
						font-size: 0.08rem;
						width: 28%;
						border: 1px solid #eaeaed;
						margin: 0.05rem 0.025rem;
					}
				}
			}
			>.recent{
				@extend .current;
			}
			>.hot{
				@extend .current;
			}
			>.city_letter{
				@extend .current;
			}
		}
	}
</style>