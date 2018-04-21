<template>
	<div id="register">
		<top>
			<router-link tag="i" to="/my/login" class="iconfont icon-back"></router-link>
		</top>
		<div class="wrop">
			<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone" class="iconfont icon-mobilephone" v-on:change="headphone"></mt-field>
			<span v-show="sjyz">请输入正确的手机号</span>
			<mt-field label="验证码" placeholder="请输验证码" type="number" v-model="number" class="iconfont icon-form" v-on:change="headyanzhen()">{{rand}}</mt-field>
			<span v-show="yz">请输入正确的验证码</span>
			<mt-field label="动态码" placeholder="请输入动态码" v-model="dtyzm" class="iconfont icon-form"><span  @click="hq">获取验证码</span></mt-field>
<mt-field label="密　码" placeholder="请输入密码" type="password" v-model="password1" class="iconfont icon-bags" @change="headmm"></mt-field>
			<span v-show="mmgs">请输入至少6位数字和字母</span>
			<mt-field label="确认密码" placeholder="确认密码" type="password" v-model="password2" class="iconfont icon-bags" @click="yanzhen"></mt-field>
			<span v-if="mmyz">密码输入不相同</span>
		</div>
		<div class="tijiao">
			<mt-button id="tijiao" type="primary" size="large" @click="tijiao">提交</mt-button>
		<el-radio v-model="radio" lady="1" id="clause" @click="handclause"><b>我已阅读并同意</b><a id="aaaa" href="http://m.zuche.com/html5/newversion/info/policy.html">《神州租车会员服务条款》</a></el-radio>
		</div>
	</div>
</template>

<script>
import top from "./common/top"
import axios from "axios"
import router from "../router"
	export default{
		data(){
			return{
				name:"libai",
				username:"",
				email:"",
				password1:"",
				password2:"",
				phone:"",
				website:"",
				number:"",
				rand:[],
				yz:false,
				dtyzm:"",
				yx:false,
				radio:true,
				mmyz:false,
				sjyz:false,
				mmgs:false
			}
		},
		components:{
			top
		},
		methods:{
			headphone(){
				
				if(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.phone) && this.phone!==""){
		     		return this.sjyz=false;
			   	}else{
		     		return this.sjyz=true;
		     	}
			   },
			headyanzhen(){
				if(this.number==this.rand){
		  			return this.yz=false;
		     	}else{
		     		return this.yz=true;
		     	}
			   },
		    headmm(){
		     	if(/(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}/.test(this.password1)){
		     	   console.log("aaaaa")
		     	   return this.mmgs=false;
		     	}else{
		     		return this.mmgs=true;
		     	}
		     },
		     yanzhen(){
		     	
		     },
		     hq(){
		     	this.dtyzm="获取成功"
		     },
		     youxiang(){
		     	
		     },
		     handclause(){
		     	this.radio==!this.radio
		     },
		     tijiao(){
		     	console.log(this.number.length)
				if(this.phone.length!==0 && this.number.length!==0 && this.password1.length!==0){
					console.log(this.number)
		     		var Phonenumber=this.phone;
					var password=this.password1;
		     	axios.post("/saveApi",{
		     		Phonenumber,
					password
		     	}).then(res=>{
		     		console.log(res.data)
		     		if(res.data==true){
		     			alert("用户名重复请重新输入")
		     		}else{
		     			router.push("/my/login")
		     		}
		     	}).catch(err=>{
				alert("")
			})
		   }else{
		      	alert("请完善信息")
		   }
		  }
		},
		mounted(){
			this.rand=Math.floor(Math.random()*9000+1000);
			
			
		}
	}
</script>

<style scoped lang="scss">
.icon-back{
 	color:#efb81d;
 	font-size:0.15rem;
    margin-top:0.07rem;
    display: block;
   	line-height:0.15rem;
 }
 .wrop{
 	line-height: 3;
 	padding-top:0.05rem;
 }
 .tijiao{
 	width:90%;
 	padding-top: 0.05rem;
 	padding-left:0.1rem;
 }
 #clause{
 	margin-top:0.05rem;
 }
 b{
 	color: #000000;
 }
 #aaaa{
 	color:#2b99ff;
 	text-decoration:none ;
 }
 .icon-mobilephone{
 	padding-left:0.05rem ;
 }
 .icon-form{
 	padding-left:0.05rem ;
 }
 .icon-bags{
 	padding-left:0.05rem ;
 }
</style>