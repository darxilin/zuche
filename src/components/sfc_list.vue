<template>
	<div class="sfc_list" v-if="sfc_list">
		<top>
			<mt-header title="顺风车" class="mt-header">
				<router-link to="/" slot="left">
					<mt-button icon="back" id="sfcback" ></mt-button>
				</router-link>
				<router-link to="/" slot="right">
					<mt-button class="iconfont icon-help" id="sfcindex"></mt-button>
				</router-link>
			</mt-header>
		</top>
		<div class="sfcSearch">
			<input type="text" placeholder="取车城市"/></li>
			<div class="to"></div>
			
			<input type="text" placeholder="还车城市"/></li>
			<div class="soche">搜车</div>
		</div>
		<ul class="listul">
			<li class="listli" v-for="value,index in sfc_list" @click="sfc_click(index)">
				<div class="listleft">
					<h4>{{value.modeName.split("/")[0]}}</h4>
					<div class="form-to">
						<span>{{value.leaseCity}}</span>
						<div class="pic-to"></div>
						<span>{{value.returnCity}}</span>
					</div>
					<p>
						从 <span>{{value.start}}</span>
						到 <span>{{value.end}}</span>
					</p>
					<p class="sfcrent">限租期：<span class="sfcday">{{value.leaseDay}}天</span></p>
				</div>
				<div class="listright">
					<span class="sfcprice">￥<span class="sfcprice-num">{{value.preferentialPrice}}</span></span><i class="iconfont icon-more" ></i>
				</div>
			</li>
		</ul>
		<div class="sfcfoot">
			<el-button type="warning" round>上一页</el-button>
			<el-button type="warning" round>下一页</el-button>
		</div>
	</div>
</template>

<script>
	import top from "./common/top";
	import axios from "axios"
	import router from "../router"
	export default {
		data(){
			return {
				sfc_list:null,
			}
		},
		mounted(){
			axios.get("/jiekou/sfc_list").then((res)=>{
				this.sfc_list = res.data.re.convenienceList;
			})
		},
		methods:{
			sfc_click(index){
				var obj = {...(this.sfc_list[index])}
				sessionStorage.setItem("sfc_selected",JSON.stringify(obj));
				router.push({name:"order_sfc",params:{...obj}})
			}
		},
		components:{
			top
		}
	}
</script>

<style lang="scss">
	.sfc_list{
		font-size: 0.12rem;
		height: 100%;
		.sfcSearch{
			background: #fff;
			display: flex;
			padding: 0.05rem;
			margin-bottom:0.1rem;
			border-bottom:0.005rem solid #c8c8c8;
			input{
				width:0.5rem;
				background: #eeeeeb;
				border: 0;
				padding: 0;
				outline: none;
				box-shadow: 5px;
				height: 0.20rem;
				text-align: center;
				border-radius: 0.025rem;
			}
			.to{
				width: 0.105rem;
				height: 0.03rem;
				background-image: url("../../static/pictures/to.png");
    			background-repeat: no-repeat;
    			background-position: bottom;
    			margin:0.075rem;
				}
			.soche{
				font-size: 0.08rem;
				width: 0.4rem;
				border-radius: 0.1rem 0.1rem;
				background: #fdb813;
				text-align: center;
				line-height: 0.2rem;
				margin-left: 0.1rem;
			}
		}
		.mt-header{
			height: 0.25rem;
			background: #1b2939;
			font-size: 0.09rem;
			
		}
		#sfcback{
			.mintui{
				font-size: 0.13rem;
			}
				
		}
		#sfcindex{
			font-size: 0.12rem;
			color:#fdb813;
		}
		
		.listul{
			h4{
				font-weight: normal;
				color: #333;
				margin:0;
				font-size: 0.06rem;
			}
			font-size: 0.06rem;
			margin-bottom:0.1rem;
			.listli{
				border-top: 0.005rem solid #c8c8c8;
				padding: 0.05rem 0.015rem 0.1rem 0.05rem;
				background: #fff;
				overflow: hidden;
				.listleft{
					float:left;
					>p{
						color: #666;
						>span{
							color: #000;
						}
					}
					.sfcrent{
						line-height: 0.12rem;
						margin-top: 0.05rem;
						.sfcday{
							color: #f89e11;
						}
					}
					.form-to{
						display: flex;
						font-size: 0.08rem;
						line-height: 32px;
						.pic-to{
							width: 0.105rem;
							height: 0.03rem;
							background-image: url("../../static/pictures/to.png");
    						background-repeat: no-repeat;
    						background-position: bottom;
    						margin: 0.06rem 0.025rem 0;
						}
					}
				}
				.listright{
					float: right;
					margin-top: 0.18rem;
					.sfcprice{
						font-size: 0.08rem;
						color:#f89e11;
					
					}
					.icon-more{
						font-size: 0.1rem;
						font-weight: bolder;
						color: #afafaa;
						
					}
				}
			}
		}
		.sfcfoot{
			margin-bottom: 0.1rem;
			display: flex;
			justify-content: center;
			background: #fff;
			padding:0.05rem 0;
		}
		
	}
	
		
	
</style>