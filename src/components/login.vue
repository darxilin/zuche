<template>
	<div id="login">
		<top>
			<i class="iconfont icon-back" @click=""></i>
		</top>
		<div class="aa">
			
			<mt-field id="user" label="账　　号" placeholder="请输入用账户" v-model="email" class="iconfont icon-account"></mt-field>
			<mt-field label="密　　码" placeholder="请输入密码" type="password" v-model="password" class="iconfont icon-bags"></mt-field>
		</div>
		<div id="banner">
			<mt-button id="tijiao" type="primary" size="large" @click="yanzhen">登录</mt-button>
		</div>
		<div id="wrop">
			<router-link id="span1" tag="span" to="register">会员注册</router-link>
			<router-link id="span2" tag="span" to="#">忘记密码？</router-link>
		</div>
	</div>
</template>

<script>
import top from "./common/top"
import axios from "axios"
import router from  "../router"
 	export default{
		data(){
			return{
			name:"李白",
			username:"",
			email:"",
			password:""
			}
		},
		components:{
			top,
		},
		methods:{
			yanzhen(){	
			
			axios.get("/dataApi?id=5ad6f44dd13781279ceaeb96").then(res=>{
				if(res.data.email==this.email && res.data.password==this.password){
					router.push("/index")
				}
			}).catch(err=>{
				alert("err")
			})
			}
		}
	}
</script>

<style scoped lang="scss" >
#login{
	font-size: 0.06rem;
}
 #banner{
 	display: flex;
 }
 #tijiao{
 	border-radius:0.05rem ;
 	margin-top: 0.1rem;
 	width:1.79rem;
 	height:0.235rem;
 	justify-content:center;
 }
 #wrop{
	margin-top:0.025rem;
 	font-size: 0.06rem;
	#span1{
		padding:0.025rem;
	 	float:left;
	 	color:#ff8650;
	 }
	#span2{
		padding:0.025rem;
	 	float:right;
	 }
 }
.icon-account:before{
	line-height: 3;
	padding-left:0.05rem;
}
.icon-bags{
	line-height: 3;
	padding-left:0.05rem;
}
 #banner{
 	width:90%;
 	margin: 0 auto;
 }
 .aa{
 	padding-top:0.05rem;
 }
 .icon-back{
 	color:#efb81d;
 	font-size:0.15rem;
    margin-top:0.07rem;
    display: block;
   	line-height:0.15rem;
 }
</style>