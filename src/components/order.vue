<template>
<div id="">
	<top>
		<div class="header">
			<i class="iconfont icon-back" @click=""></i>
			<h1 class="title">我的神州</h1>
			<i class="iconfont icon-store" @click=""></i>
		</div>
	</top>
	<div class="banner">
		<div class="bgimg">
				<img src="../../static/img/pu_ph.png" class="tubiao"/>
		</div>
		<div class="username">
			{{username}}
			<i class="iconfont icon-more"></i>
		</div>
	</div>
	<div class="money">
		<h3>
			我的钱包
		</h3>
		<ul>
			<li>
				<span>
				 <b>0</b>分
				</span>
				<span>
					积分	
				</span>
			</li>
			<li>
				<span>
				 <b>1</b>张
				</span>
				<span>
					优惠券
				</span>
			</li>
			<li>
				<span>
				 <b>0</b>元
				</span>
				<span>
					储值卡
				</span>
			</li>
			<li>
				<span>
				 <b>0</b>元
				</span>
				<span>
					余额
				</span>
			</li>
		</ul>
	</div>
	<ul class="order">
		<li class="li1"><span></span>自驾订单<b>()</b></li>
		<li class="li2"><span></span>顺风车订单<b>()</b></li>
		<li class="li3"><span></span>国际租车订单<b>()</b></li>
		<li class="li4">发票管理<i class="iconfont icon-more"></i></li>
	</ul>
</div>
</template>

<script>
import top from './common/top'
	export default{
		data(){
			return{
				username:"李白"
			}	
		},
		components:{
			top
		}
	}
</script>

<style scoped lang="scss">
h1,h3{
	margin: 0;
	padding: 0;
}
.header{
	
		color:#FFFFFF;
		line-height:0.25rem;
}
.title{
	font-size: 0.1rem;
	margin-left:0.55rem;
	display:inline-block;
	font-style: normal;
}
.icon-back{
 	font-size:0.165rem;
   
    display: block;
   	font-weight:600 ;
   	display:inline-block;
 }
.icon-store{
 	font-size:0.165rem;
  	margin-left:0.5rem;
    display: block;
   	display:inline-block;
 }
.banner{
 	width: 100%;
 	background-color:#1b2b3b;
 	.bgimg{
 		padding-top:0.075rem;
 		margin: 0 0.075rem 0.075rem 0.075rem;
	    width:1.725rem;
	    height: 0.545rem;
	   	.tubiao{
	   		width:0.42rem;
	   		height:0.42rem;
	   		margin-left:0.65rem;
	   		padding-top: 0.075rem;
	   	}
 	}
 	.username{
 		padding-bottom:0.05rem ;
 		width:0.45rem;
 		height: 0.1rem;
 		margin:0 auto;
 		background: deeppink;
 		text-align: center;
 		color:#FFFFFF;
 	}
 }
 .money{
 	background: #FFFFFF;
 	padding:0.075rem 0.1rem;
 	h3{
 	font-weight: 400;
    font-size: 0.075rem;
    color: #2f2f39;
    width: 1.675rem;
    height: 0.11rem;
    margin:0 auto;
 	}
 	ul{
 	padding-top:0.05rem;
 	display: flex;
 	justify-content: space-around;
 	font-size:0.065rem;
 	li{
 		width:0.3rem;
 		height:0.175rem;
 		text-align: center;
 		border-right:0.005rem solid #e5e5e5;
 		padding:0 0.05rem 0 0.05rem;
 		span{
 			display: block;
 			b{
 				font-size: 0.08rem;
 			}
 		}
 	}
 	}
 }
 .order{
 	margin-top: 0.05rem;
 	background:#f7f7f8 ;
 	font-size: 0.07rem;
 	li{
 	background: #FFFFFF;	
 	height: 45px;
    line-height: 48px;
    overflow: hidden;
    padding-left: 20px;
    border-top: 1px solid #e8e8e8;
    color:#2f2f39;
    	span{
    		color:#93939e;
    	}
 	}
 	.li1{
 		span{
 		display: inline-block;
 		background:url(../../static/img/icon_my.png) no-repeat;
 		background-position: -86px -68px;
 		background-size: 1.15rem 1.15rem;
 		width: 0.13rem;
	    height: 0.09rem;
	    vertical-align: -0.025rem;
 		}
 	}
 	.li2{
 		span{
 		display: inline-block;
 		background:url(../../static/img/icon_my.png) no-repeat;
 		background-position: -116px -69px;
 		background-size: 1.15rem 1.15rem;
 		width: 0.13rem;
	    height: 0.09rem;
	    vertical-align: -0.025rem;
 		}
 	}
 	.li3{
 		span{
 		display: inline-block;
 		background:url(../../static/img/icon_my.png) no-repeat;
 		background-position: -143px -69px;
 		background-size: 1.15rem 1.15rem;
 		width: 0.13rem;
	    height: 0.09rem;
	    vertical-align: -0.025rem;
 		}

 	}
 	.li4{
 		margin-top:0.1rem ;
 		i{
 			float: right;
 			font-size:0.1rem;
 			margin-right: 0.05rem;
 		}
 	}
 }
</style>