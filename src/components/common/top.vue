<template>
	<div class="nav">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.nav{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 0.25rem;
		background: #1b2939;
		z-index:3;
	}
	
</style>