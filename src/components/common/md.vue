<template>
	<div class="md">
		<top>
			<mt-header class="top_header" title="选择门店" >
				<router-link :to="{name:route_back}" slot="left">
					 <mt-button class="back" icon="back"></mt-button>
				</router-link>
			</mt-header>
		</top>
		<mt-search class="mt-search" v-model="value" cancel-text="取消" placeholder="搜索">
		</mt-search>
		
		<!--门店列表-->
		<div class="md_list" v-if="letter">
			<!--左侧各大区选择-->
			<div class="left">
				<div :class="index==n?'area active':'area'" v-for="value,index in letter" @click="area_click(value.quyu,index)">
				{{value.quyu}}
			</div>
			</div>
			
			
			<!--右侧门店列表-->
			<div class="right">
				<p>{{quyu}}</p>
				<div v-for="value in quyu_md[0].list" class="quyu_md" @click="address_click(value.deptName)">
					<p class="md_name">{{value.deptName}}</p>
					<p class="address">{{value.deptAddress}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from "axios"
	import top from "./top"
	export default {
		data(){
			return {
				n:0,
				route_back:"tj",
				num:"",
				md:{deptName:"江北力帆体育场店",deptId:46},
				value:"",
				mdList:null,
				letter:null,
				quyu:null,
			}
		},
		beforeMount(){
			axios.get("/jiekou/md").then((res)=>{
				this.mdList = res.data.result.storeList;
				this.letter = [];
				for(var i=0;i<this.mdList.length;i++){
					if(this.letter.length == 0){
							//添加一个区域到数组
							var obj = {}
							obj[this.mdList[i].districtSort] = this.mdList[i].districtSort;
							obj.quyu = this.mdList[i].districtName
							obj.list = [];
							obj.list.push(this.mdList[i]);
							this.letter.push(obj);
					}else{
						var flag = true;
						for(var j=0;j<this.letter.length;j++){
						//如果已经存在相同区域，则存入list数组
						if(!this.letter[j][this.mdList[i].districtSort]){
							//this.letter[j].list.push(this.mdList[i]);
							continue;
						}else{
							flag = false;
							this.letter[j].list.push(this.mdList[i]);
							break;
						}
						
					}
						if(flag){
							//否则，新创建对象，添加到数组
							var obj = {}
							obj[this.mdList[i].districtSort] = this.mdList[i].districtSort;
							obj.quyu = this.mdList[i].districtName
							obj.list = [];
							obj.list.push(this.mdList[i]);
							this.letter.push(obj);
						}
					}
					
				}
				this.quyu = this.letter[0].quyu;
				
			})
		},
		mounted(){
			this.route_back = this.$route.params.route_name;
			this.num = this.$route.params.num;
			this.n = 0;
			
		},
		methods:{
			area_click(quyu,index){
				console.log(quyu);
				this.quyu = quyu;
				this.num = index;
			},
			address_click(md){
				//存储城市信息
			if(this.num == 3){
				sessionStorage.setItem("qc_md",JSON.stringify({deptName:md}))
			}else if(this.num == 4){
				sessionStorage.setItem("hc_md",JSON.stringify({deptName:md}))
			}
			this.$router.go(-1);
			}
		},
		computed:{
			quyu_md(){
				if(this.letter){
					console.log(this.letter)
				return this.letter.filter((item)=>{
					console.log(item.quyu,this.quyu)
					return item.quyu == this.quyu;
				})
				}
				
			}
		},
		components:{
			top
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.md{
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
		.mt-search{
			width: 100%;
			height: auto;
			position: fixed;
			top: 0.25rem;
			left: 0;
		}
		>.md_list{
			display: flex;
			margin-top: 0.51rem;
			>.left{
				width: 30%;
				height: 85vh;
				overflow-y:scroll ;
				>.area{
					padding: 0 0.05rem;
					height: 0.225rem;
					line-height: 0.225rem;
					color: #60606c;
					background: #f4f4f4;
					font-size: 0.075rem;
					border-bottom: 1px solid #eaeaed;
					
				}
				>.active{
					background: #fff;
				}
			}
			>.right{
				flex: 1;
				height: 85vh;
				overflow-y: scroll;
				>p{
					height: 0.125rem;
					line-height: 0.125rem;
					padding: 0 0.1rem;
					font-size: 0.06rem;
					color: #60606c;
					width: 90%;
				}
				>.quyu_md{
					background: #fff;
					padding-left: 0.1rem;
					width: 90%;
					>.md_name{
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						width: 70%;
						font-size: 0.075rem;
						line-height: 0.215rem;
					}
					>.address{
						font-size: 0.06rem;
						color: #93939e;
						line-height: 0.1rem;
						height: 0.2rem;
						overflow: hidden;
						text-overflow: ellipsis;
						width: 90%;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					}
				}
				
			}
		}
	}
</style>