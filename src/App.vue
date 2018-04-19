<template>
  <div id="app">
    
    <section>
    	<router-view/>
    </section>
    
  </div>
</template>

<script>
	
export default {
  name: 'App',
  data(){
  	return {
  		
  	}
  },
  methods:{
  },
  components:{
			
  }
}
</script>

<style>
html{
	font-size: 53vw;
	
}
body{
	min-width: 1.6rem;
	overflow-x: hidden;
}
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
 width: 100%;
 height: 100%;
}
body,p,ul,li{
	padding: 0;
	margin: 0;
}
li{
	list-style: none;
}
body{
	height: 100%;
	font-family: "微软雅黑";
	background: #f7f7f8;
}
section{
	margin-top: 0.25rem;
}
</style>
