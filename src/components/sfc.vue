<template>
	<div class="sfc">
		<top></top>
		<mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
		顺风车
	</div>
</template>

<script>
	
	import top from "./common/top";
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
	.sfc{
		font-size: 0.1rem;
	}
</style>