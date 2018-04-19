<template>
	<div class="bookSfc">
		<top>
			<mt-header title="顺风车预定" class="mt-header">
				<router-link to="/" slot="left">
					<mt-button icon="back" id="bookSfcback" ></mt-button>
				</router-link>
			</mt-header>
		</top>
		<div class="bookSfcInfo">
			<h4 class="info">
				<div class="currentCarName">大众帕萨特</div>
				<div class="bookSfcTotal">
					优惠后总金额：<span class="money">￥<span>100</span></span>
				</div>
			</h4>
			<div class="infoContent">
				<p class="p1">
					<span>珠海</span>
					<span class="picto"></span>	
					<span>深圳</span>
				</p>
				<p class="p2">
					<span class="grey">预订正常租金：<span class="black">689元</span></span>			
				</p>
				<p class="p3">
					<span class="grey">燃油费过路费：<span class="black">自理</span></span>				
				</p>
				<p class="p4">
					<span class="grey">限定使用里程：<span class="black">300公里</span></span>			
				</p>
				
			</div>
			
			
				
			</div>
			<div class="row1 row">取车信息</div>
			<div class="quche che">
				<div class="left">
					<div class="left1">珠海</div>
					<div class="left2">金湾机场店</div>
				</div>
				<div class="right">
					<div class="right1"><span>04月<br>19日</span></div>
					<div class="right2"><span>周四<br>18:00</span></div>
					
				</div>
			</div>	
			<div class="row2 row">还车信息</div>
			<div class="huanche che">
				<div class="left">
					<div class="left1">深圳</div>
					<div class="left2">保安机场店</div>
				</div>
				<div class="right">
					<div class="right1"><span>04月<br>20日</span></div>
					<div class="right2"><span>周五<br>18:00</span></div>
					
				</div>
			</div>
			<div class="row3 row">2018-04-19 — 2018-04-23   限租期<span class="tian">1天</span></div>
			<div class="sfcsure">
				<div class="bookradio">立即预定</div>
			</div>
	</div>
</template>

<script>
	import Vue from "vue";
	import top from "./common/top";
	export default {
		data(){
			return {
				
			}
		},
		components:{
			top
		}
	}
</script>

<style lang="scss">
	.bookSfc{
		font-size: 0.06rem;
		height: 100%;
		background: #ebe9dc;
		.mt-header{
			height: 0.25rem;
			background: #1b2939;
			font-size: 0.09rem;
			
		}
		#bookSfcback{
			.mintui{
				font-size: 0.13rem;
			}
				
		}
		
		.bookSfcInfo{
			background: #fff;
			.info{
				overflow:hidden;
				padding:0.075rem 0.05rem;
				margin:0;
				.currentCarName{
					float: left;	
				}
				.bookSfcTotal{
					float: right;
					.money{
						color:#f89e11;
					}
				}
				
			}
			.infoContent{
				padding-bottom: 0.05rem;
				p{
					text-indent: 0.5rem;
					line-height: 0.12rem;
				}
				.p1{
					font-size: 0.09rem;
					.picto{
					display: inline-block;
					width: 0.105rem;
					height: 0.03rem;
					background-image: url("../../static/pictures/to.png");
					background-repeat: no-repeat;
					background-position: bottom;
					
					}
				}
				.grey{
						color: grey;
						.black{
							color: black;
						}
					}
				
			}
		}
		
		.row{
			height: 0.1rem;
			padding: 0.05rem;
			color: #666;
		}
		.che{
			width: 100%;
			overflow: hidden;
			.left{
				float: left;
			}
			
			.left,.right{
				background: #f2f2f2;
				width: 48%;
				display:flex;
				border:0.005rem solid #ccc;
				line-height: 0.35rem;
				text-align: center;
				font-weight: 700;
				height: 0.35rem;
				.left1,.right1{
					width: 50%;
					border-right: 0.005rem solid #ccc;
				}
				.left2,.right2{
					width: 50%;
					text-align: center;
				}
			}
			.right{
				float: right;
				line-height: 0.12rem;
				.right1,.right2{
					span{
						display: inline-block;
						margin-top:0.05rem;
					}
				}
			}
		}
		
		.quche{
			.right{
				background: #fff;
			}
		}
		.huanche{
			.left{
				.left2{
					background: #fff;
				}
			}
		}
		.row3{
			.tian{
				color: #f89e11;
			}
		}
		.sfcsure{
			background: #fff;
			padding: 0.075rem;
			.bookradio{
				font-size: 0.08rem;
				width: 0.6rem;
				border-radius: 0.1rem 0.1rem;
				background: #fdb813;
				text-align: center;
				line-height: 0.18rem;
				margin-left: 0.6rem;
			}
			
		}
	}
</style>