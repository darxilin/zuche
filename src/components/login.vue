<template>
	<div id="login">
		<top>
			<i class="iconfont icon-back"></i>
		</top>
		<div id="banner">
		
			<mt-field id="user" label="账　　号" placeholder="请输入用账户"v-model="username"></mt-field>
			<mt-field label="密　　码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
			
			<mt-button id="tijiao" type="primary" size="large">提交</mt-button>
		</div>
		<div id="wrop">
			<span id="span1">会员注册</span>
			<span id="span2">忘记密码？</span>
		</div>
	</div>
</template>

<script>
import top from "./common/top"
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
		
	}
</script>

<style scoped lang="scss" >
#login{
	font-size: 0.06rem;
}
 html,body,div,mt-button{
 margin: 0;
 padding: 0;

 }
 #user{
 margin-top:0.05rem;
 }
 #tijiao{
 	margin-top: 0.1rem;
 	width:1.88rem;
 	height:0.235rem;
 	
 }
 
 #banner{
 	margin-top:0.05rem;
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
	 	float:right;
	 }
 }
 
</style>