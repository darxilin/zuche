<template>
	<div id="dd">
		<top>
			<mt-header title="到店取还" class="mt-header">
				<router-link to="/" slot="left">
					<mt-button icon="back" id="ddback" ></mt-button>
				</router-link>
				<router-link to="/" slot="right">
					<mt-button class="iconfont icon-store" id="ddindex"></mt-button>
				</router-link>
			</mt-header>
		</top>
		<qh></qh>
	</div>
</template>

<script>
	import top from "./common/top"
	import qh from "./common/qh"
	import { Header } from 'mint-ui';
	import Vue from 'vue';
	Vue.component(Header.name, Header);
	export default {
		data(){
			return {
				
			}
		},
		components:{
			top,
			qh
		}
	}
</script>

<style lang="scss">
	#dd{
		height: 100%;
		.mt-header{
			height: 0.25rem;
			background: #1b2939;
			font-size: 0.09rem;
			
		}
		#ddback{
			.mintui{
				font-size: 0.13rem;
				color:yellow;
			}
				
		}
		#ddindex{
			font-size: 0.15rem;
		}
	}
</style>