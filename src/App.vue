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
	width: 100%;
	height: 100%;
	font-family: "微软雅黑";
	background: #e1e1e1;
}
section{
	margin-top: 0.25rem;
}
</style>
