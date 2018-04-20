<template>
<div id="">
	<top>
		<div class="header">
			<i class="iconfont icon-back" @click=""></i>
			<h1 class="title">会员等级</h1>
		</div>
	</top>
	<div class="banner">
		<div class="lv">
			<i class="iconfont icon-help"></i><span>如何升级</span>
		</div>
		<div class="bgimg">
				<img src="../../static/img/pu_ph.png" class="tubiao"/>
		</div>
		<div class="jifen">
			<ul class="wrop">
				<li class="lf">
					<span>
						0
					</span>
					<span class="leiji">
						累计积分
					</span>
				</li>
				<li class="rg">
					<span>
						0
					</span>
					<span class="leiji">
						可用积分
					</span>
				</li>
			</ul>
		</div>
	</div>
</div>
</template>

<script>
import top from './common/top'
	export default{
		data(){
			return{
				
			}	
		},
		components:{
			top
		}
	}
</script>

<style scoped lang="scss">
h1{
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
 	.lv{
 		.icon-help{
 			font-size:0.06rem;
 			vertical-align: middle;
 		}
 		span{
 			margin-left:0.05rem;
 			margin-right:0.05rem;
 			
 		}
 		float: right;
 		font-size:0.06rem;
 		display: inline-block;
	    font-size: 0.06rem;
	    line-height: 0.15rem;
	    color: #93939e;
	    margin-left: 0.025rem;
	    height: 0.15rem;
 	}
 	.bgimg{
 		padding-top:0.15rem;
 		margin: 0 0.075rem 0.075rem 0.075rem;
	    width:1.725rem;
	    height: 0.615rem;
	   	.tubiao{
	   		width:0.42rem;
	   		height:0.42rem;
	   		margin-left:0.7rem;
	   		padding-top: 0.075rem;
	   	}
	    
 	}
 	.jifen{
 	   width:0.695rem;
 	   height: 0.215rem;
 	   padding-top:0.05rem;
 	   padding-bottom: 0.15rem;
 	   border-top:0.005rem solid  #2e3d4c;
 	   margin:0 auto;
 	   .wrop{
 	   	overflow:hidden;
 	   	 .lf{
 	   	 	float: left;
 	   	 	width:0.345rem;
 	   	 	height:0.215rem;
 	   	 	border-right:0.005rem solid  #2e3d4c;
 	   	 }
 	   	 .rg{
 	   	 	float: right;
 	   	 	width:0.345rem;
 	   	 	height:0.215rem;
 	   	 }
 	   	 span{
 	   	 	color:#FFFFFF;
 	   	 	text-align: center;
 	   	 	display: block;
 	   	 }
 	   	 .leiji{
 	   	 	color:#93939e;
 	   	 	font-size:0.06rem;
 	   	 }
 	   }
 	   
 	}
 }
</style>