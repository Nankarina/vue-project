<template>
	<div id="videodetail">
		<img src='https://img3.doubanio.com/f/talion/b18ab213d20aa54055783f2f4eeac1468bf8cd3f/pics/card/ad/time_banner1.png'>
		<!-- v-if判断数据是否存在，存在了渲染 -->
		<div id="content" v-if='datalist'>
			<div id="title">
				<img src="https://img3.doubanio.com/icon/up95805238-16.jpg">
				<div id="right">
					<strong>豆瓣 </strong><span>{{datalist.activity}}</span>
					<p>{{datalist.create_time}}</p>
				</div>
			</div>
			<p class="te">{{text[0]}}→
			<a>{{text[1]}}</a>
			</p>
			<img :src='datalist.images[0].normal.url'>
			<div id="love">
				<b class="iconfont icon-good"></b><span>{{datalist.like_count}}</span>
				<b class='iconfont icon-share'></b><span>{{datalist.reshares_count}}</span>
			</div>
			<div id="comments">
				<h3>回应{{datalist.comments_count}}</h3>
				<ul  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="0"
   infinite-scroll-immediate-check ="false">
					<li v-for='data in commentslist'>
					<div id="b">
						<img :src='data.author.avatar'>
						<div id="people">
							<p>{{data.author.name}}</p>
							<span>{{data.create_time}}</span>
						</div>
					</div>	
						<div id="context">
							{{data.text}}
						</div>
						
					</li>
				</ul>
				<div id="more">显示更多回应</div>
			</div>
		</div>
		<div id="footer">
		<div id="f">
			<img src="https://img3.doubanio.com/f/talion/7837f29dd7deab9416274ae374a59bc17b5f33c6/pics/card/douban-app-logo.png">
			<div id="ftitle">
				<h1>豆瓣</h1>
				<p>在APP中刷广播更快</p>
			</div>
		</div>
		<a href="https://www.douban.com/doubanapp/card/log?category=guangbo&amp;cid=&amp;action=click_download&amp;ref=http%3A//www.douban.com/doubanapp/app%3Fchannel%3Dcard_guangbo%26direct_dl%3D1" rel="nofollow">去 App Store 免费下载 iOS 客户端</a>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);
export default {

  name: 'videodetail',

  data () {
    return {
    	datalist:null,
    	text:[],
    	img:'',
    	commentslist:[],
    	loading:false,
    	count:10,
    	
    }
  },
  mounted(){
  	
  		axios.get(`/rexxar/api/v2/status/${this.$route.params.dataid}?ck=&for_mobile=1`).then(res=>{
  			this.datalist=res.data
  			var str=res.data.text
  			// console.log(this.datalist.images[0])
  			// console.log(res.data)
  			 this.text=str.split('→')
  			 
  			
  		});
  	axios.get(`/rexxar/api/v2/status/${this.$route.params.dataid}/comments?start=0&count=${this.count}&ck=&for_mobile=1`).then(res=>{
  			this.commentslist=res.data.comments;
  			this.count=res.data.count;
  		});
  	
  	
  },
  methods:{
  	loadMore(){
  		this.count++;
  		if(this.count>59){
  			this.loading=true;
  			return;
  		}
  		axios.get(`/rexxar/api/v2/status/${this.$route.params.dataid}/comments?start=0&count=${this.count}&ck=&for_mobile=1`).then(res=>{
  				
  				this.commentslist=[...this.commentslist,...res.data.comments]
  				
  			})
  	}
  }
}
</script>

<style lang="scss" scoped>
img{
	height:.8rem;
	width: 100%;
}
#videodetail{
	// height:100%;
	#content{
		padding:.15rem;
		
		// padding-bottom: 1rem;
		.te{
			width:3.34rem;
			font:.15rem/.24rem "";
			color:#333;
		}
		a{color:#00b600;}
		img{
			width:3.30rem;
			height:3.39rem;
			margin: .1rem 0 0 .05rem;
		}
		#love{
			margin:.1rem 0 0 .1rem;
			height:.5rem;
			border-bottom:1px solid #e8e8e8;
		}
		b{
			font:.16rem/.3rem "";
			color:gray;
		}
		span{
			margin:0 .3rem 0 .1rem;
			font:.14rem/.3rem "";
			color:gray;
		}
	}
	#title{
		overflow: hidden;
		img{
			width:.4rem;
			height:.4rem;
			border-radius: 50%;
			float: left;

		}
		#right{
			float:left;
			strong{
				margin-left: .1rem;
				font:.14rem/.24rem "";
				
			}
			span{
				font:.14rem/.24rem "";
				color:gray;
			}
			p{
				font:.14rem/.24rem "";
				color:gray;
				margin-left: .1rem;
			}
		}
		
	}
	#comments{
		padding:0 .13rem;
		
		h3{
			font:.16rem/.5rem "";
			color:gray;
			margin-top: .3rem;
		}
		ul{
			
			li{
				margin:.15rem  0 .2rem 0;
				// border: 1px solid red;
				#b{
					overflow:hidden;
				}
				img{
					width:.4rem;
					height:.4rem;
					border-radius: 50%;
					float:left;
					margin: 0;
					vertical-align: middle;

				}
				#people{
					float:left;
					margin-left: .05rem;
				p{
					font:700 .14rem/.14rem "";
					color:#333;
					margin-left: .05rem;
				}	
			}
			#context{
				font:.16rem/.24rem "";
				color:#333;
				margin-left: .6rem;
			}
			}
		}
		
	}
}
#more{
	font:.14rem/.5rem "";
	color:#00b600;
	text-align: center;
}
#footer{
	padding-bottom: .5rem;
	margin-top: .2rem;
	#f{
		overflow:hidden;
	}
	img{
		width:.48rem;
		height:.48rem;
		border-radius:.05rem;
		float:left;
		margin-left: 1rem;
	}
	#ftitle{
		float:left;
		margin-left: .1rem;
		h1{
			font: .24rem/.3rem "";
		}
		p{
			font:.16rem/.24rem "";
		}

	}
	a{
			font:.16rem/.4rem "";
			color:#00b600;
			display: block;
			text-align: center;
	}
}
</style>