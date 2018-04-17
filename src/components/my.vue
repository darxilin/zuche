<template>
	<div class="my">
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		data(){
			return{
			name:"李白"
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.my{
		font-size: 0.08rem;
	}
</style>