<template>
	<div>
		<top>
			<div class="header">
				<i class="iconfont icon-back" @click=""></i>
				<h1 class="title">国际租车</h1>
			</div>
		</top>
		<div class="zimu">
				<span class="gundong">{{place}}取车需提供中国驾照英文的翻译文件+中国驾照原件</span>
		</div>
		<div class="banner">
			<ul>
				<li>
					<div style="background-color:red;">
						<span>取车地点</span>
					</div>
					<div style="background-color:red;">
						<span>
							巴黎
						</span>
						<span>
							巴黎国际机场
						</span>
					</div>
				</li>
				<li>
					<div style="background-color:red;">
						<span>还车地点</span>
					</div>
					<div style="background-color:red;">
						<span>
							巴黎
						</span>
						<span>
							巴黎国际机场
						</span>
					</div>
				</li>
				
				<li></li>
				<li></li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
import  top from  "./common/top"
	export default({
		data(){
			return{
				place:"巴黎",
				pickerVisible:""
			}
		},
		components:{
			top
		},
		mounted(){

			 
		},
		methods:{
			 openPicker() {
     	   this.$refs.picker.open();
   			   }
		}
	})
</script>
<style scoped lang="scss">

h1{
	margin:0 ;
	padding: 0;
}
.header{
	
		color:#FFFFFF;
		line-height:0.25rem;
}
.icon-back{
	width:0.15rem;
 	color:#efb81d;
 	font-size:0.15rem;
    margin-top:0.07rem;
    display: block;
   	line-height:0.15rem;
 }
.title{
	margin-top: -0.2rem;
 	font-size:0.1rem;
	margin-left:0.75rem;
	font-style: normal;
}
.zimu{
	width:100%;
	height:0.2rem;
	background: #f0f0f5;
	font-size:0.075rem;
	span{
		height:0.2rem;
		line-height:0.2rem;
	}	
}
.banner{
	width: 100%;
	background: #0086B3;
	font-size:0.1rem;
}
 
</style>