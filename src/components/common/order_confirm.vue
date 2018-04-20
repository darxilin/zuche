<template>
	<div class="order_confirm" v-if="car_model">
		<top>
			<mt-header class="top_header" title="确认订单" >
				<router-link to slot="left" @click.native="go_back">
					 <mt-button class="back" icon="back"></mt-button>
				</router-link>
			</mt-header>
		</top>
		<div class="car">
			<img :src="car_model.img" />
			<div class="right">
				<p class="car_name">{{car_model.name}}</p>
				<p class="car_des">{{car_model.des}}</p>
			</div>
		</div>
		
		<!--时间-->
		<div class="time">
			<div class="time_qc">
				<p class="top">
					<span class="day">{{qc_time.day}}</span>
					<span class="title">到店取车</span>
				</p>
				<p class="bottom">
					<span class="day">{{qc_time.time}}</span>
					<span class="title">{{car_model.qc_city}} {{car_model.qc_md}}</span>
				</p>
			</div>
			<div class="time_hc">
				<p class="top">
					<span class="day">{{hc_time.day}}</span>
					<span class="title">到店还车</span>
				</p>
				<p class="bottom">
					<span class="day">{{hc_time.time}}</span>
					<span class="title">{{car_model.hc_city}} {{car_model.hc_md}}</span>
				</p>
			</div>
		</div>
		
		<!--基本费用-->
		<div class="jiben">
			<div class="title">基本费用</div>
			<div class="xiangmu">
				<p>
					<span class="a">车辆租赁费及门店服务费</span>
					<span class="b">{{car_model.price}}x{{car_model.rentDay}}=<b>￥{{count_car}}</b></span>
				</p>
				<p>
					<span class="a">基础服务费</span>
					<span class="b">{{car_model.jichu}}x{{car_model.rentDay}}=<b>￥{{count_jichu}}</b></span>
				</p>
				<p>
					<span class="a">手续费</span>
					<span class="b"><b>￥35</b></span>
				</p>
			</div>
			<div class="count">基本费用合计<span>{{total_money}}</span></div>
		</div>
		
		<!---->
		<div class="zhifu">
			<span>优先使用账户余额/储值卡/积分支付<i class="iconfont icon-help"></i></span>
			<el-switch v-model="check" class="switch" active-color="#ffc200" inactive-color="#ff4949">
			</el-switch>
		</div>
		
		<!--取车须知-->
		<div class="xuzhi">
			<p>取车须知</p>
			<p>1、需下单会员本人取车;</p>
			<p>2、本人二代身份证、本人国内有效驾驶证正副本;</p>
			<p>3、本人一张信用及可用额度均不低于3000元的国内有效信用卡;</p>
			<p>所有证件有效期须至少超过当次租期的一个月以上。</p>
		</div>
		
		<div class="tongyi">
			<input type="checkbox" v-model="tongyi" />
			<span>我已阅读并同意《订单说明及退改规则》</span>
		</div>
		
		<div class="submit">
			<a :class="tongyi?'':'dis'" @click="to_order">提交订单</a>
		</div>
		
	</div>
</template>

<script>
	import axios from "axios"
	import top from "./top"
	import router from "../../router"
	export default {
		data(){
			return {
				car_model:null,
				qc_time:null,
				hc_time:null,
				check:true,
				tongyi:true,
				count_car_t:0,
				count_car_t:0,
				total_t:0,
				
			}
		},
		mounted(){
			//计算时间
			function day_time(date){
				var dates = new Date()
				dates.setTime(date)
				var _week = (dates)=>{
					var week = dates.getDay();
					var str = " 周";
					switch(week){
						case 0:str += "日";
							break;
						case 1:str += "一";
							break;
						case 2:str += "二";
							break;
						case 3:str += "三";
							break;
						case 4:str += "四";
							break;
						case 5:str += "五";
							break;
						case 6:str += "六";
							break;
						
					}
					return str;
				};
				var _day = dates.getMonth() + 1 +"月"+dates.getDate() + "日";
				var time1 = ()=>{
					if(dates.getMinutes()>=0 && dates.getMinutes()<=29){
						return "00";
					}else{
						return "30";
					}
				};
				var _times =_week(dates) +" "+ dates.getHours() + ":" + time1()
				var _time = {day:_day,time:_times}
				return _time;
				}
			
			
			if(sessionStorage.getItem("selected")){
				this.car_model = JSON.parse(sessionStorage.getItem("selected"));
			}
			if(sessionStorage.getItem("qc_city")){
				this.car_model.qc_city = JSON.parse(sessionStorage.getItem("qc_city")).name;
			}
			if(sessionStorage.getItem("hc_city")){
				this.car_model.hc_city = JSON.parse(sessionStorage.getItem("hc_city")).name;
			}
			if(sessionStorage.getItem("qc_md")){
				this.car_model.qc_md = JSON.parse(sessionStorage.getItem("qc_md")).deptName;
			}
			if(sessionStorage.getItem("hc_md")){
				this.car_model.hc_md = JSON.parse(sessionStorage.getItem("hc_md")).deptName;
			}
			if(sessionStorage.getItem("qc_time")){
				var qc_time = Number(sessionStorage.getItem("qc_time"))
				this.qc_time = day_time(qc_time)
			}
			if(sessionStorage.getItem("hc_time")){
				var hc_time = Number(sessionStorage.getItem("hc_time"))
				this.hc_time = day_time(hc_time)
			}
			
		},
		methods:{
			go_back(){
				this.$router.go(-1);
			},
			to_order(){
				if(this.tongyi){
					this.car_model.userId = "darxilin";
					this.car_model.orderId =this.car_model.userId +  new Date().getTime();
					console.log(this.car_model)
					axios.post("/jiekou/order_create",this.car_model).then((res)=>{
						console.log(res.data)
					})
					//router.push({name:"order"})
				}
			}
		},
		computed:{
			count_car(){
				this.count_car_t = this.car_model.price*this.car_model.rentDay;
				return this.count_car_t;
			},
			count_jichu(){
				this.count_jichu_t = this.car_model.jichu*this.car_model.rentDay;
				return this.count_jichu_t;
			},
			total_money(){
				this.total = this.count_car_t + this.count_jichu_t +this.car_model.shouxu;
				return this.total;
			}
		},
		components:{
			top
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.order_confirm{
		.top_header{
			height: 100%;
			width: 100%;
			background: #1b2939;
			font-size: 0.09rem;
			.back{
				font-size: 0.09rem;
				color: #fabe00;
			}
			
		}
		>.car{
			background: #fff;
			padding-left: 0.075rem;
			display: flex;
			align-items: center;
			>img{
				width: 0.5rem;
				height: 0.3rem;
				margin-right: 0.05rem;
			}
			>.right{
				flex: 1;
				>.car_name{
					margin: 0.1rem 0 0.075rem;
					font-size: 0.08rem;
					color: #60606c;
				}
				>.car_des{
					font-size: 0.07rem;
					margin-bottom: 0.1rem;
					color: #93939e;
				}
			}
		}
		>.time{
			background: #fff;
			padding-left: 0.075rem;
			border-bottom: 1px solid #E1E1E1;
			>.time_qc{
				border-top: 1px solid #E1E1E1;
				padding-top: 0.1rem;
				padding-left: 0.05rem;
				>.top{
					font-size: 0.07rem;
					color: #60606c;
					>.day{
						display: inline-block;
						width: 0.35rem;
						margin-right: 0.1rem;
					}
					
				}
				>.bottom{
					@extend .top;
					color: #93939e;
				}
			}
			>.time_hc{
				@extend .time_qc;
				border: none;
				padding: 0.05rem 0 0.1rem;
				padding-left: 0.05rem;
			}
		}
		>.jiben{
			font-size: 0.07rem;
			background: #fff;
			>div{
				border-bottom: 1px solid #E1E1E1;
			}
			>.title{
				color: #93939e;
				background:#f3fbfe ;
				height: 0.25rem;
				line-height: 0.25rem;
				text-indent: 0.075rem;
			}
			>.xiangmu{
				padding-left: 0.075rem;
				>p{
					border-bottom: 1px solid #E1E1E1;
					line-height: 0.25rem;
					color: #60606c;
					height: 0.25rem;
					&:nth-of-type(3){
						border: none;
					}
					>.b{
						float: right;
						margin-right: 0.075rem;
						color: #93939e;
						>b{
							font-size: 0.08rem;
							color: #2f2f39;
							font-weight: normal;
						}
					}
				}
			}
			>.count{
				@extend .title;
				color: #60606c;
				>span{
					float: right;
					color: #fabe00;
					font-size: 0.08rem;
					margin-right: 0.075rem;
				}
			}
		}
		>.zhifu{
			height: 0.25rem;
			font-size: 0.07rem;
			color: #60606c;
			text-indent: 0.075rem;
			line-height: 0.25rem;
			margin: 0.05rem 0;
			background: #fff;
			display: flex;
			align-items: center;
			justify-content: space-between;
			>span{
				>i{
					font-size: 0.07rem;
					margin-left: 0.025rem;
				}
			}
			>.switch{
				margin-right: 0.075rem;
			}
		}
		>.xuzhi{
			background: #fff;
			font-size: 0.06rem;
			padding: 0.125rem 0.1rem;
			>p{
				line-height: 0.08rem;
				margin-bottom: 0.05rem;
				color: #93939e;
				&:first-of-type{
					font-size: 0.07rem;
					color: #60606c;
					margin-bottom: 0.1rem;
				}
				&:last-of-type{
					color: #ff8650;
					margin: 0;
				}
			}
		}
		>.tongyi{
			padding:0.1rem 0.075rem ;
			font-size: 0.07rem;
			line-height: 0.1rem;
			overflow: hidden;
			>input{
				float: left;
				width: 0.1rem;
				height: 0.1rem;
				display: inline-block;
				border-radius: 50%;
				margin-right: 0.05rem;
			}
			>span{
				float: left;
				color: #93939e;
			}
			
		}
		>.submit{
			height: 0.225rem;
			>a{
				color: #fff;
				display: block;
				text-align: center;
				line-height:0.225rem;
				font-size: 0.075rem;
				background: #ffc200;
				&.dis{
					background: #dadadf;
				}
			}
		}
	}
</style>