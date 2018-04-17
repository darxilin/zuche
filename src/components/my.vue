<template>
	<div id="my">
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

<style>
	#my{
	 width: 300px;
	 height: 300px;
	 background: aqua;
	}
</style>