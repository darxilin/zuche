<template>
	<div id="login">
		<top>
			<router-link tag="i" to="/index" class="iconfont icon-back"></router-link>
		</top>
		<div class="aa">
			
			<mt-field id="user" label="账　　号" placeholder="请输入用账户" v-model="Phonenumber" class="iconfont icon-account" type="number"></mt-field>
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
			Phonenumber:"",
			password:""
			}
		},
		components:{
			top,
		},
		methods:{
			yanzhen(){
			var Phonenumber=this.Phonenumber;
			axios.post("/dataApi",{
				Phonenumber
			}).then(res=>{
				console.log(res)
				if(res.data[0].Phonenumber==this.Phonenumber && res.data[0].password==this.password){
					axios.post("/jiekou/user",{user:Phonenumber}).then((res)=>{
						if(res.data == 1){
							sessionStorage.setItem("user",JSON.stringify({name:Phonenumber}))
							this.$router.go(-1);
						}else{
							alert("登陆失败")
						}
						
					})
				}else{
					alert("用户名不存在")
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