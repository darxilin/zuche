<template>
	<div class="bookSfc" v-if="sfc_selected">
		<top>
			<mt-header title="顺风车预订" class="mt-header">
				<router-link to="" slot="left" @click.native="go_back">
					<mt-button icon="back" id="bookSfcback"></mt-button>
				</router-link>
			</mt-header>
		</top>
		<div class="bookSfcInfo">
			<h4 class="info">
				<div class="currentCarName">{{sfc_selected.modeName.split("/")[0]}}</div>
				<div class="bookSfcTotal">
					优惠后总金额：<span class="money">￥<span>{{sfc_selected.preferentialPrice}}</span></span>
				</div>
			</h4>
			<div class="infoContent">
				<p class="p1">
					<span>{{sfc_selected.leaseCity}}</span>
					<span class="picto"></span>
					<span>{{sfc_selected.returnCity}}</span>
				</p>
				<p class="p2">
					<span class="grey">预订正常租金：<span class="black">{{sfc_selected.price}}</span></span>
				</p>
				<p class="p3">
					<span class="grey">燃油费过路费：<span class="black">自理</span></span>
				</p>
				<p class="p4">
					<span class="grey">限定使用里程：<span class="black">300公里</span></span>
				</p>

			</div>

		</div>
		<div class="row1 row">取车信息</div>
		<div class="quche che">
			<div class="left">
				<div class="left1">{{sfc_selected.leaseCity}}</div>
				<div class="left2">金湾机场店</div>
			</div>
			<div class="right">
				<div class="right1"><span>{{sfc_selected.start.split("-")[1]}}月<br>{{sfc_selected.start.split("-")[2]}}日</span></div>
				<div class="right2"><span>周四<br>18:00</span></div>

			</div>
		</div>
		<div class="row2 row">还车信息</div>
		<div class="huanche che">
			<div class="left">
				<div class="left1">{{sfc_selected.returnCity}}</div>
				<div class="left2">保安机场店</div>
			</div>
			<div class="right">
				<div class="right1"><span>{{sfc_selected.start.split("-")[1]}}月<br>{{sfc_selected.start.split("-")[2]}}日</span></div>
				<div class="right2"><span>周五<br>18:00</span></div>

			</div>
		</div>
		<div class="row3 row">{{sfc_selected.start}} — {{sfc_selected.end}} 限租期<span class="tian">{{sfc_selected.leaseDay}}天</span></div>
		<div class="sfcsure">
			<div class="bookradio" @click="to_order">立即预订</div>
		</div>
	</div>
</template>

<script>
	import router from "../router"
	import { MessageBox, Toast } from 'mint-ui';
	import axios from "axios"
	import top from "./common/top";
	export default {
		data() {
			return {
				sfc_selected: null,
			}
		},
		methods: {
			go_back() {
				this.$router.go(-1);
			},
			to_order() {
				if(sessionStorage.getItem("user")) {
					var obj = JSON.parse(sessionStorage.getItem("user"));
					axios.post("/jiekou/login_check", obj).then((res) => {
						if(res.data == 1) {
							var id = JSON.parse(sessionStorage.getItem("user")).name + new Date().getTime();
							var obj = {
								orderId: id,
								type: "sfc",
								userId:JSON.parse(sessionStorage.getItem("user")).name,
								name: this.sfc_selected.modeName,
								img: this.sfc_selected.modePic,
								price: this.sfc_selected.preferentialPrice,
								rentDay: this.sfc_selected.leaseDay,
								qc_city: this.sfc_selected.leaseCity,
								hc_city: this.sfc_selected.returnCity,
								end: this.sfc_selected.end,
								start: this.sfc_selected.start,
								total:this.sfc_selected.preferentialPrice
							}
							axios.post("/jiekou/order_create", obj).then((res) => {
								console.log(res.data)
								if(res.data == 1) {
									Toast({
										message: '订单提交成功！',
										position: 'bottom',
										duration: 1000
									});
									setTimeout(() => {
										router.push({name:"order"})
									}, 1000)
								} else {
									MessageBox('提示', '订单提交失败！');
								}

							})
						} else {
							router.push({
								name: "login"
							})
						}
					})
				} else {
					router.push({
						name: "login"
					})
				}

			}
		},
		mounted() {

			//检查sessionStorage里的已选择顺风车信息
			if(sessionStorage.getItem("sfc_selected")) {
				var obj = JSON.parse(sessionStorage.getItem("sfc_selected"))
				this.$store.commit("sfc_selected", { ...obj
				});
			}
			this.sfc_selected = this.$store.state.sfc_selected_o;
			console.log(this.sfc_selected, this.$store.state.sfc_selected_o)
		},
		components: {
			top
		}
	}
</script>

<style lang="scss">
	.bookSfc {
		font-size: 0.06rem;
		height: 100%;
		background: #ebe9dc;
		.mt-header {
			height: 0.25rem;
			background: #1b2939;
			font-size: 0.09rem;
		}
		#bookSfcback {
			.mintui {
				font-size: 0.13rem;
			}
		}
		.bookSfcInfo {
			background: #fff;
			.info {
				font-weight: normal;
				overflow: hidden;
				padding: 0.075rem 0.05rem;
				margin: 0;
				.currentCarName {
					float: left;
				}
				.bookSfcTotal {
					float: right;
					.money {
						color: #f89e11;
					}
				}
			}
			.infoContent {
				padding-bottom: 0.05rem;
				p {
					text-indent: 0.5rem;
					line-height: 0.12rem;
				}
				.p1 {
					font-size: 0.09rem;
					.picto {
						display: inline-block;
						width: 0.105rem;
						height: 0.03rem;
						background-image: url("../../static/pictures/to.png");
						background-repeat: no-repeat;
						background-position: bottom;
					}
				}
				.grey {
					color: grey;
					.black {
						color: black;
					}
				}
			}
		}
		.row {
			height: 0.1rem;
			padding: 0.05rem;
			color: #666;
		}
		.che {
			width: 100%;
			overflow: hidden;
			.left {
				float: left;
			}
			.left,
			.right {
				background: #f2f2f2;
				width: 48%;
				display: flex;
				border: 0.005rem solid #ccc;
				line-height: 0.35rem;
				text-align: center;
				font-weight: 700;
				height: 0.35rem;
				.left1,
				.right1 {
					width: 50%;
					border-right: 0.005rem solid #ccc;
				}
				.left2,
				.right2 {
					width: 50%;
					text-align: center;
				}
			}
			.right {
				float: right;
				line-height: 0.12rem;
				.right1,
				.right2 {
					span {
						display: inline-block;
						margin-top: 0.05rem;
					}
				}
			}
		}
		.quche {
			.right {
				background: #fff;
			}
		}
		.huanche {
			.left {
				.left2 {
					background: #fff;
				}
			}
		}
		.row3 {
			.tian {
				color: #f89e11;
			}
		}
		.sfcsure {
			background: #fff;
			padding: 0.075rem;
			.bookradio {
				font-size: 0.08rem;
				width: 0.6rem;
				border-radius: 0.1rem 0.1rem;
				background: #fdb813;
				text-align: center;
				line-height: 0.18rem;
				margin-left: 0.6rem;
			}
		}
	}
</style>