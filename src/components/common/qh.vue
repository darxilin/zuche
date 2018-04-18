<template>
	<div class="qh">
		<div class="qh_qc">
			<!--取车城市-->
			<div class="qc_city">
				<i class="iconfont icon-success"></i>
				<div class="city">
					<div class="city_left">
						<span>取车城市</span>
					</div>
					<div class="city_mid" @click="qc_city_click(1)">
						<span>{{cityName}}</span>
						<i class="el-icon-arrow-right"></i>
					</div>
					<div class="city_right">
						<span>上门送车</span>
						<el-switch v-model="qc_dz" active-color="#ffc200" inactive-color="#ff4949">
						</el-switch>
					</div>
				</div>
			</div>
			<!--送车地址-->
			<div class="qc_dizhi">
				<i></i>
				<div class="city">
					<div class="city_left">
						<span :style="qc_dz?'color:#ffc200':'color:'">{{qc_dz?"送车地址":"取车门店"}}</span>
					</div>
					<div class="city_mid">
						<span :style="qc_dz?'color:#e1e1e1':''">{{qc_dz?"请选择送车地址":"选择门店"}}</span>
						<i class="el-icon-arrow-right"></i>
					</div>
					
				</div>
				
			</div>
		</div>
		<div class="qh_hc">
			<!--还车城市-->
			<div class="qc_city">
				<i class="iconfont icon-wrong"></i>
				<div class="city">
					<div class="city_left">
						<span>还车城市</span>
					</div>
					<div class="city_mid" @click="qc_city_click(2)">
						<span>{{cityName}}</span>
						<i class="el-icon-arrow-right"></i>
					</div>
					<div class="city_right">
						<span>上门取车</span>
						<el-switch v-model="hc_dz" active-color="#ffc200" inactive-color="#ff4949">
						</el-switch>
					</div>
				</div>
			</div>
			<!--送车地址-->
			<div class="qc_dizhi">
				<i></i>
				<div class="city">
					<div class="city_left">
						<span :style="hc_dz?'color:#ffc200':'color:'">{{hc_dz?"取车地址":"还车门店"}}</span>
					</div>
					<div class="city_mid">
						<span :style="hc_dz?'color:#e1e1e1':''">{{hc_dz?"请选择取车地址":"选择门店"}}</span>
						<i class="el-icon-arrow-right"></i>
					</div>
					
				</div>
				
			</div>
		</div>
		
		<!--取车时间和还车时间-->
		<div class="time">
			<!--取车时间-->
			<div class="time_qc">
				<p class="time_title">取车时间</p>
				<p class="time_time">16:00</p>
				<p class="time_day">04-22 周日</p>
				
			</div>
			<!--天数-->
			<div class="time_days">
				<div class="days">
					<p class="days_num">5</p>
					<p class="days_text">天</p>
				</div>
			</div>
			<!--还车时间-->
			<div class="time_hc">
				<p class="time_title">还车时间</p>
				<p class="time_time">16:00</p>
				<p class="time_day">04-22 周日</p>
			</div>
		</div>
		<div class="tips">
			<p>部分城市指定区域，免费上门送取车！</p>
		</div>
		<div class="choose_car">
			立即去选车
		</div>
	</div>
</template>

<script>
	import router from "../../router"
	export default {
		data(){
			return {
				cityName:"北京",
				qc_dz:true,//取车门店
				hc_dz:true,//还车门店
				
				
			}
		},
		props:["route_name"],
		methods:{
			qc_city_click(n){
				//n为1则是取车城市，n为2则是还车城市
				
				router.push({name:"city",params:{route_name:this.route_name,num:n}})
			}
		},
		components:{
			
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.qh{
		color: #60606c;
		width: 100%;
		background: #fff;
		>.qh_qc{
			width: 100%;
			border-top: 1px solid #E1E1E1;
			>.qc_city{
				height: 0.25rem;
				width: 100%;
				display: flex;
				
				>i{
					align-self: center;
					display: block;
					width: 10%;
					text-align: center;
				}
				>.city{
					font-size: 0.075rem;
					width: 90%;
					display: flex;
					border-bottom: 1px solid #E1E1E1;
					>.city_left{
						align-self: center;
						width: 0.36rem
					}
					>.city_mid{
						height: 0.15rem;
						margin: 0.05rem 0;
						align-self: center;
						width: 0.98rem;
						border-left: 1px solid #E1E1E1;
						>span{
							line-height: 0.15rem;
							padding-left: 0.075rem;
							
						}
						>i{
							float: right;
							color: #9C939D;
							line-height: 0.15rem;
							margin-right: 0.15rem;
							font-size: 0.1rem;
						}
					}
					>.city_right{
						height: 100%;
						align-self: center;
						font-size: 0.07rem;
						width: 0.35rem;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						background: #f9f9f9;
						border-left: 1px solid #E1E1E1;
						>span{
							display: block;
							margin: 0 auto;
						}
						>.switch{
							color: #ffc200;
						}
					}
				}
			}
			>.qc_dizhi{ 
				@extend .qc_city;
				>.city{
					border-bottom: none;
					>.city_mid{
						flex: 1;
					}
				}
			}
		}
		>.qh_hc{
			@extend .qh_qc;
		}
		>.time{
			width: 100%;
			box-sizing: border-box;
			display: flex;
			border-top: 1px solid #E1E1E1;
			padding: 0.075rem 0.1rem;
			>.time_qc{
				flex-grow: 1;
				>p{
					text-align: center;
					&.time_title{
						font-size: 0.075rem;
						color: #93939e;
					}
					&.time_time{
						font-size: 0.12rem;
						line-height: 0.14rem;
						color: #424242;
					}
					&.time_day{
						font-size: 0.075rem;
						color: #60606c;
					}
				}
			}
			>.time_days{
				font-size: 0.075rem;
				flex-grow: 8;
				background: url(../../../static/img/myorder_listbg.png) no-repeat center center;
				background-size: 80%;
				display: flex;
				justify-content: center;
				align-content: center;
				>.days{
					width: 0.26rem;
					height: 0.26rem;
					margin: auto;
					border: 1px solid #fabe00;
					border-radius: 50%;
					background: #fff;
					>p{
						text-align: center;
						&.days_num{
							font-size: 0.12rem;
							color: #fabe00;
						}
						&.days_text{
							font-size: 0.06rem;
						}
					}
				}
			}
			>.time_hc{
				@extend .time_qc;
			}
		}
		>.tips{
			background: #f7f7f8;
			display: flex;
			justify-content: center;
			>p{
				display: inline-block;
				margin: 0.05rem auto;
				text-align: center;
				background: url(../../../static/img/bell_icon.png)no-repeat left center;
				background-size: 0.075rem;
				text-indent: 0.1rem;
				font-size: 0.07rem;
			}
		}
		>.choose_car{
			position: fixed;
			bottom: 0;
			width: 100%;
			text-align: center;
			height: 0.225rem;
			line-height: 0.225rem;
			font-size: 0.085rem;
			color: #fff;
			background: #fabe00;
		}
	}
</style>