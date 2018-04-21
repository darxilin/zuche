<template>
	<div class="md">
		<top>
			<mt-header class="top_header" title="选择门店" >
				<router-link :to="{name:route_back}" slot="left">
					 <mt-button class="back" icon="back"></mt-button>
				</router-link>
			</mt-header>
		</top>
	</div>
</template>

<script>
	import top from "./top"
	export default {
		data(){
			return {
				route_back:"tj",
				num:"",
				md:{deptName:"江北力帆体育场店",deptId:46}
			}
		},
		mounted(){
			this.route_back = this.$route.params.route_name;
			this.num = this.$route.params.num;
			
			//存储城市信息
			if(this.num == 3){
				sessionStorage.setItem("qc_md",JSON.stringify(this.md))
			}else if(this.num == 4){
				sessionStorage.setItem("hc_md",JSON.stringify(this.md))
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
	}
</style>