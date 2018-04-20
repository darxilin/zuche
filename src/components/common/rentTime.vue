<template>
	<div class="rentTime">
		<top>
			<mt-header class="top_header" title="选择时间" >
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
				
			}
		},
		components:{
			top
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.rentTime{
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