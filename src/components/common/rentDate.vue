<template>
	<div class="rentDate">
		<top>
			<mt-header class="top_header" title="选择日期" >
				<router-link :to="{name:route_back}" slot="left">
					 <mt-button class="back" icon="back"></mt-button>
				</router-link>
			</mt-header>
		</top>
		<mt-button type="default" class="date" @click="openPicker">选择时间</mt-button>
		<mt-datetime-picker  ref="picker" type="datetime" v-model="pickerValue" @confirm="gettime">
		</mt-datetime-picker>
	</div>
</template>

<script>
	import top from "./top"
	export default {
		data(){
			return {
				route_back:"",
				pickerValue:"",
				num:"",
				time:null
				
			}
		},
		
		mounted(){
			this.route_back = this.$route.params.route_name;
			this.num = this.$route.params.num;
			this.$refs.picker.open();
			//存储城市信息
			/*if(this.num == 1){
				sessionStorage.setItem("qc_city",JSON.stringify(this.city))
			}else if(this.num == 2){
				sessionStorage.setItem("hc_city",JSON.stringify(this.city))
			}*/
			
		},
		methods:{
			openPicker(){
       			this.$refs.picker.open();
           },
			gettime(){
				this.time = this.pickerValue.getTime()
				if(this.num == 1){
				sessionStorage.setItem("qc_time",this.time)
			}else if(this.num == 2){
				sessionStorage.setItem("hc_time",this.time)
			}
			}
		},
		components:{
			top
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.rentDate{
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
		.date{
			margin: 0 auto;
		}
	}
</style>