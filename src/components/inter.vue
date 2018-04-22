<template>
	<div>
		<top>
			<div class="header">
				<router-link tag="i" to="/index" class="iconfont icon-back"></router-link>
				<h1 class="title">国际租车</h1>
			</div>
		</top>
		<div class="zimu">
				<span class="gundong">{{place}}取车需提供中国驾照英文的翻译文件+中国驾照原件</span>
		</div>
		<div class="banner">
			<ul>
				<li>
					<div class="qcdd">
						<span>取车地点</span>
					</div>
					<div class="dd">
						<span class="span1">
							巴黎
						</span >
						<span class="span2">
							巴黎国际机场
						</span>
					</div>
				</li>
				<li>
					<div class="qcdd">
						<span>还车地点</span>
					</div>
					<div class="dd">
						<span class="span1">
							巴黎
						</span >
						<span class="span2">
							巴黎国际机场
						</span>
					</div>
				</li>
				
				<li>
					<div class="block">
					    <span class="demonstration">租用时间</span>
					    <el-date-picker
					      v-model="value5"
					      type="datetimerange"
					      :picker-options="pickerOptions2"
					      range-separator="至"
					      start-placeholder="开始日期"
					      end-placeholder="结束日期"
					      align="right">
					    </el-date-picker>
  					</div>
				</li>
				<li class="li4">
					<span>折扣代码</span><input placeholder="CDP#" class="zk"></input>
				</li>
				<li class="li5">
					<span>优惠代码</span><input placeholder="PC#" class="zk"></input>
				</li>
			</ul>
			<div class="help">
					<a href="https://m.zuche.com/html5/international/drivecard.html">
						<img src="../../static/img/jzfy@2x.png"/>
						<span>
							驾照翻译
						</span>
					</a>
					<a href="https://m.zuche.com/html5/internationalExplain/carrentalnotice.html?szhdbm=wap">
						<img src="../../static/img/zcxz@2x.png"/>
						<span>
							租车须知
						</span>
					</a>
					<a href="https://m.zuche.com/html5/internationalExplain/faq.html?szhdbm=wap">
						<img src="../../static/img/quwstion@2x.png"/>
						<span>
							常见问题
						</span>
					</a>
			</div>
			<div class="logo">
				<img src="../../static/img/international_index_hd.jpg"/>
			</div>
			<div>
				<div class="ljxc">立即去选车</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import  top from  "./common/top"
	export default({
		data(){
			return{
				place:"巴黎",
				pickerVisible:"",
				pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value5: ''
      };
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
	
	font-size:0.1rem;
}
ul{
	padding-left: 0.15rem;
    background-color: #fff;
    overflow: hidden;
}
.qcdd{
	padding-top: 0.075rem;
    font-size: 0.075rem;
    color: #93939e;
}
li{
	border-bottom:0.01rem solid #f5f5f5;
	padding-bottom: 0.075rem;
	.qcdd{
			padding-top: 0.075rem;
		    font-size: 0.075rem;
		    color: #93939e;
		}
	.dd{
		 font-size: 0.075rem;
		 color: #2f2f39;
	    margin-top: 0.06rem;
	    .span1{
		    padding-right:0.2rem;
	    }
	}
	.block{
		width: 100%;
	}	
}
.li4{
	line-height: 0.23rem;
	padding: 0;
	.zk{
	width:1.225rem;
    height: 0.225rem;
    margin-left: 0.05rem;
    text-align: right;
    border: none;
}
	
}
.li5{
	line-height: 0.23rem;
	padding: 0;
	.zk{
	width:1.225rem;
    height: 0.225rem;
    margin-left: 0.05rem;
    text-align: right;
    border: none;
}
}
.help{
	font-size:0.07rem;
	align-items: center;
    -webkit-box-pack: center;
	display: flex;
    -webkit-box-align: center;
	justify-content: center;
    margin-top: 10px;
    padding: 20px 0;
    background-color: #fff;
	a{	
		text-decoration:none; 
		color: #333333;
		width: 0.625rem;
		height: 0.27rem;
		display: flex;
		float:left;
	    -webkit-box-align: center;
	    align-items: center;
	    justify-content: center;
	    flex-direction: column;
		img{
		width:0.15rem;
		height: 0.15rem;
			}
		span{
			display: block;
    		margin-top: 3px;
		}
	}
	
}
.logo{
	margin-top: 0.05rem;
	img{
	width: 100%;
	height: 0.5rem;
	}
}
.ljxc{
	position: fixed;
	bottom: 0;
	width: 100%;
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 16px;
    color: #fff;
    background-color: #fabe00;
}
</style>