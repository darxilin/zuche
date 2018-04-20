<template>
	<div class="sfc">
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
			<li class="listli" v-for="i in 5">
				<div class="listleft">
					<h4>雪佛兰科鲁兹</h4>
					<div class="form-to">
						<span>东莞</span>
						<div class="pic-to"></div>
						<span>广州</span>
					</div>
					<p>
						从<span>2018-04-19</span>
						到<span>2018-04-19</span>
					</p>
					<p class="sfcrent">限租期：<span class="sfcday">1天</span></p>
				</div>
				<div class="listright">
					<span class="sfcprice">￥<span class="sfcprice-num">100</span></span><i class="iconfont icon-more" ></i>
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
	.sfc{
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
				margin:0;
				font-size: 0.06rem;
			}
			font-size: 0.06rem;
			margin-bottom:0.1rem;
			.listli{
				border-top: 0.005rem solid #c8c8c8;
				padding: 10px 3px 10px 10px;
				height: 0.6rem;
				background: #fff;
				overflow: hidden;
				.listleft{
					float:left;
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