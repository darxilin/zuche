<template>
	<div class="service" v-if="selected">
		<top>
			<mt-header class="top_header" title="选择服务" >
				<router-link to slot="left" @click.native="go_back">
					 <mt-button class="back" icon="back"></mt-button>
				</router-link>
			</mt-header>
		</top>
		<div class="shouxu">
			<div class="bg bg_a"></div>
			<div class="right">
				<p class="money">
				<span class="title">手续费(必选)</span>
				<span class="count">35x1=￥35.0</span>
				</p>
			</div>
		</div>
		<div class="fuwu">
			<div class="bg bg_b"></div>
			<div class="right">
				<p class="money">
				<span class="title">基础服务费(必选)</span>
				<span class="count">{{selected.jichu}}x{{selected.rentDay}}=￥{{count_jichu}}</span>
				</p>
				<p class="des">必选部分，客户只需承担1500以内的车辆损失费</p>
			</div>
		</div>
		<div :class="zunxiang?'zunxiang':'n_zunxiang'" @click="zunxiang_c">
			<div class="bg bg_c"></div>
			<div class="right">
				<p class="money">
				<span class="title">尊享服务费(必选)</span>
				<span class="count">{{selected.zunxiang}}x{{selected.rentDay}}=￥{{count_zunxiang}}</span>
				</p>
				<p class="des">客户保险范围内赔偿责任免除</p>
			</div>
		</div>
		<div class="fapiao">
			<span class="title">开具发票</span>
			<span class="right">不开发票<i class="el-icon-arrow-right"></i></span>
		</div>
		<div class="next" >
			<a @click="next">下一步</a>
		</div>
		
	</div>
</template>

<script>
	import router from "../../router"
	import top from "./top"
	export default {
		data(){
			return {
				car_model:null,
				zunxiang:false,
				selected:null,
				
			}
		},
		mounted(){
			if(sessionStorage.getItem("selected")){
				this.selected = JSON.parse(sessionStorage.getItem("selected"))
				console.log(this.selected)
			}
		},
		methods:{
			go_back(){
				this.$router.go(-1);
			},
			zunxiang_c(){
				this.zunxiang = !this.zunxiang;
			},
			next(){
				router.push({name:"order_confirm"})
			}
		},
		computed:{
			count_jichu:function(){
				return this.selected.jichu*this.selected.rentDay;
			},
			count_zunxiang:function(){
				return this.selected.zunxiang*this.selected.rentDay;
			}
		},
		components:{
			top
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.service{
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
		>.shouxu{
			padding: 0.025rem 0;
			background: #fff;
			display: flex;
			border-bottom: 1px solid #bdbab0;
			>.bg{
				background-size: 0.6rem 2.875rem;
				background: url(../../../static/img/icons.png) no-repeat 0 0;
				width: 0.275rem;
				height: 0.275rem;
				margin: 0 0.025rem;
			}
			>.bg_a{
				background-position: -65px 0;
			}
			>.right{
				flex: 1;
				font-size: 0.07rem;
				>.money{
					>.count{
						float: right;
						margin-right: 0.1rem;
					}
				}
				
			}
		}
		>.fuwu{
			@extend .shouxu;
			>.bg_b{
				background-position: 0 0;
			}
		}
		>.zunxiang{
			@extend .shouxu;
			>.bg_c{
				background-position: -65px -65px;
			}
		}
		>.n_zunxiang{
			@extend .shouxu;
			background: transparent;
			>.bg_c{
				background-position: 0 -65px;
			}
		}
		>.fapiao{
			padding: 0.075rem;
			background: #fff;
			font-size: 0.07rem;
			margin-bottom: 0.075rem;
			>.right{
				float: right;
				color: #93939e;
				font-style: italic;
				>i{
					margin-left: 0.025rem;
				}
			}
		}
		>.next{
			background: #fff;
			padding: 0.05rem 0;
			box-shadow: 0 0px 5px -1px #000000;
			>a{
				display: block;
				margin: auto;
				width: 0.5rem;
				height: 0.15rem;
				text-align: center;
				background: #fdb813;
				font-size: 0.07rem;
				line-height: 0.15rem;
				border-radius: 0.075rem;
			}
		}
	}
</style>