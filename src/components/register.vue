<template>
	<div id="register">
		<top>
			<i class="iconfont icon-back" @click=""></i>
		</top>
		<div class="wrop">
			<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone" class="iconfont icon-mobilephone"></mt-field>
			<mt-field label="验证码" placeholder="请输验证码" type="number" v-model="number" class="iconfont icon-form"><span @click="yanzhen">{{rand}}</span></mt-field>
			<span v-if="yz">请输入正确的验证码</span>
			<mt-field label="动态码" placeholder="请输入动态码" v-model="dtyzm" class="iconfont icon-form"><span  @click="hq">获取验证码</span></mt-field>
<mt-field label="密　码" placeholder="请输入密码" type="password" v-model="password1" class="iconfont icon-bags"></mt-field>
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
	export default{
		data(){
			return{
				name:"libai",
				username:"",
				email:"",
				password1:"",
				password2:"",
				phone:[],
				website:"",
				number:"",
				rand:[],
				yz:false,
				dtyzm:"",
				yx:false,
				radio:true,
				mmyz:false
			}
		},
		components:{
			top
		},
		methods:{
		     yanzhen(value){
		     	if(this.number==this.rand){
		     		return this.yz=false;
		     	}else{
		     		return this.yz=true;
				}if (this.password1==this.password2){
		     		return this.mmyz=false;
		     	}else{
		     		return this.mmyz=true;
		     	}
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
		     		var Phonenumber=this.phone;
					var password=this.password1;
		     	axios.post("/saveApi",{
		     		Phonenumber,
					password
		     	}).then(res=>{
		     		console.log(res)
		     	}).catch(err=>{
				alert(err)
			})
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