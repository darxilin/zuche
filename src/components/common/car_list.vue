<template>
	<div class="car_list" v-if="datalist">
		<top>
			<mt-header class="top_header" title="车型列表" >
				<router-link to slot="left" @click.native="go_back">
					 <mt-button class="back" icon="back"></mt-button>
				</router-link>
			</mt-header>
		</top>
		<div class="list" v-for="value in datalist.result.vehicleLists" @click="select_car({name:value.vehicleName,des:value.vehicleDesc,img:value.vehiclePic,price:value.price.meanprice,rentDay:value.rentDays,jichu:value.insurance})">
			<img :src="value.vehiclePic" />
			<div class="list_right">
				<p class="name">
					<span class="title">{{value.vehicleName}}</span>
					<span :class="value.hotFlag==1?'hot':'unhot'">热</span>
					<i class="el-icon-arrow-right"></i>
				</p>
				<p class="des">{{value.vehicleDesc}}</p>
				<p class="price">
					<span class="left">
						<em>￥</em><b>{{value.price.meanprice}}</b>/日均
					</span>
					<span class="right"><i class="iconfont icon-calendar"></i>每日租金<i class="el-icon-arrow-down"></i></span>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	import router from "../../router"
	import top from "./top"
	import axios from "axios"
	export default {
		data(){
			return {
				datalist:null,
				route_back:"",
			}
		},
		beforeMount(){
			axios.get("/jiekou/car_list").then((res)=>{
				this.datalist = res.data;
			}).catch((error)=>{
				console.log(error)
			})
		},
		mounted(){
			
		},
		methods:{
			go_back(){
				//this.$route.go(-1返回不了上一页)
				this.$router.go(-1);
			},
			select_car(data){
				sessionStorage.setItem("selected",JSON.stringify({name:data.name,des:data.des,img:data.img,price:data.price,rentDay:data.rentDay,jichu:data.jichu,shouxu:35,zunxiang:50}))
				router.push({name:"service"})
			}
		},
		components:{
			top
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.car_list{
		color: #2f2f39;
		padding: 0.05rem 0;
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
		>.list{
			background: #fff;
			margin: 0.05rem 0;
			display: flex;
			align-items: center;
			>img{
				width: 0.5rem;
				height: 0.3rem;
				padding: 0 0.075rem;
			}
			>.list_right{
				flex: 1;
				>.name{
					padding-top: 0.05rem;
					>.title{
						font-size: 0.075rem;
						line-height: 0.1rem;
					}
					>.hot{
						margin-left: 0.05rem;
						display: inline-block;
						color: red;
						border: 1px solid red;
						width: 0.075rem;
						height: 0.075rem;
						line-height: 0.075rem;
						text-align: center;
						font-size: 0.055rem;
					}
					>.unhot{
						color: transparent;
					}
					>i{
						float: right;
						font-size: 0.1rem;
						line-height: 0.1rem;
					}
				}
				>.des{
					font-size: 0.06rem;
					padding-bottom:0.05rem ;
					border-bottom: 1px solid #E1E1E1;
				}
				>.price{
					padding: 0.04rem 0;
					>.left{
						
						font-size: 0.06rem;
						>em{
							color: #fabe00;
							font-style: normal;
							font-size: 0.08rem;
						}
						>b{
							color: #fabe00;
							font-size: 0.12rem;
							font-weight: normal;
							
						}
					}
					>.right{
						>i{
							color: #fabe00;
							margin-right: 0.025rem;
						}
						margin-right: 0.1rem;
						float: right;
						line-height: 2;
						font-size: 0.06rem;
					}
				}
			}
		}
	}
</style>