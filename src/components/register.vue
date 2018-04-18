<template>
	<div id="register">
		<top></top>
		<div>
		<mt-field label="username" placeholder="Input username" v-model="username"></mt-field>
			<mt-field label="email" placeholder="Input email" type="email" v-model="email"></mt-field>
			<mt-field label="password" placeholder="Input password" type="password" v-modal="password"></mt-field>
			<mt-field label="phone" placeholder="Input tel" type="tel" v-model="phone"></mt-field>
			<mt-field label="website" placeholder="Input website" type="url" v-model="website"></mt-field>
			<mt-field label="number" placeholder="Input number" type="number" v-model="number"></mt-field>
		</div>
		<div>
			<mt-field label="email" state="success" v-model="email"></mt-field>
		</div>
			
		</div>
</template>

<script>
import top from "./common/top"
	export default{
		data(){
			return{
				name:"libai",
				username:"",
				email:"",
				password:"",
				phone:"",
				website:"",
				number:""
			}
		},
		components:{
			top
		}
	}
</script>

<style scoped lang="scss">

</style>