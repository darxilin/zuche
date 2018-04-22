<template>
<div id="" v-if="list">
	<top>
		<div class="header">
			<router-link tag="i" to="/my/mysz" class="iconfont icon-back"></router-link>
			
			<h1 class="title">全部订单</h1>
			<i class="iconfont icon-store" @click=""></i>
		</div>
	</top>
	<ul v-for="(item, index) in list">
			
			<li>
				车型：{{item.name}}
			</li>
			<li>
				<span>取车城市：{{item.qc_city}}</span>
				<img src="../../static/img/direction2.png"/>
				<span>还车城市：{{item.hc_city}}</span>
				
			</li>
			<li>
				<span>租期：{{item.rentDay}}天</span>
				
			</li>
			<li>
				<span style="color:gold;">租金：{{item.total}}</span>
				<span></span>
			</li>
	</ul>
</div>
</template>

<script>
import axios from "axios"
import top from './common/top'
	export default{
		data(){
			return{
				username:"李白",
				list:null,
				
			}	
		},
		components:{
			top
		},
		mounted(){
			axios.get("/jiekou/order_",{
				
			}).then(res=>{
			this.list=res.data;
//			this.qccity=res.data[0].qc_city;
//			this.qcmd=res.data[0].qc_md;
//			this.hccity=res.data[0].hc_city;
//			this.hcmd=res.data[0].hc_md;
			}).catch(err=>{
				alert("err")
			})
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
 ul{
 	text-align: center;
   background: #333333;
	 li:nth-of-type(1){
	 	margin-top:0.35rem;
 	background: #FFFFFF;	
 	height: 0.225rem;
    line-height: 0.24rem;
    overflow: hidden;
    padding-left: 0.1rem;
    
    color:#2f2f39;
    
 	}
 	li{
 	background: #FFFFFF;	
 	height: 0.15rem;
    line-height: 0.15rem;
    overflow: hidden;
    padding-left: 0.1rem;
    
    color:#2f2f39;
 	}
 }
</style>