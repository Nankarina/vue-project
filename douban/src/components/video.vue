<template>
	<div id="video">
		<img src='https://img3.doubanio.com/f/talion/b18ab213d20aa54055783f2f4eeac1468bf8cd3f/pics/card/ad/time_banner1.png'>
		<div id="banner">
			<img src='https://img1.doubanio.com/icon/user_normal.jpg'>
			<span>登录发广播</span>
			<b class='iconfont icon-edit'></b>
			<i class='iconfont icon-video'></i>
		</div>
		<ul>
			<li to='/videodetail' v-for='data in datalist' @click='sendId(data.status.id)'>
				<div id="top">
				<img src='https://img3.doubanio.com/icon/up95805238-16.jpg'>
				<div id="title">
				<strong>豆瓣 </strong><span>{{data.status.activity}}</span>
				<em>{{data.status.create_time}}</em>
				</div>
			</div>
				<p>{{data.status.text}}</p>

				<div id="detail">
					<span class='iconfont icon-good te'></span><span>{{data.status.like_count}}</span>
					<b class='iconfont icon-comments'></b><span>{{data.status.comments_count}}</span>
					<i class='iconfont icon-share'></i><span>{{data.status.reshares_count}}</span>

				</div>
			</li>
		</ul>
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
		<section>
			<router-view></router-view>
		</section>
	</div>
</template>

<script>
import axios from 'axios';
import router from "@/router";
export default {

  name: 'video',

  data () {
    return {
    	datalist:[],
    	/*text:text*/
    }
  },
  methods:{
  	sendId(id){console.log('cdfd')
  		console.log(id)
	router.push(`/videodetail/${id}`);
  	},
  	loadMore(){

  	}
  },
  mounted(){
  	axios.get('/rexxar/api/v2/status/anonymous_timeline?max_id=&ck=&for_mobile=1').then(res=>{
  		console.log(res.data.items)
  		this.datalist=res.data.items;
  		
  	})
  }
}
</script>

<style lang="scss" scoped>
img{
	height:.8rem;
	width: 100%;
}
#banner{
	padding:.1rem .2rem;
	img{
		width:.4rem;
		height:.4rem;
		border-radius: 50%;
	}
	span{
		font:.14rem/.4rem "";
		color:gray;
		margin-left: .03rem;
	}
	b{
		margin-left: 1.3rem;
		font:.18rem/.4rem "";
		color:gray;
	}
	i{
		margin-left: .2rem;
	}
}
ul {
	

	li{padding:.15rem .2rem;
		
		border-top:1px solid #e8e8e8;
		#top{
			overflow: hidden;
		}
		img{
			width:.4rem;
			height:.4rem;
			border-radius: 50%;
			float:left;
			margin-top:.05rem;
		}
		#title{
			float:left;
			margin-top: -.05rem;
			strong{
				font:700 .14rem/.4rem "";
				color:#333;
				margin-left: .05rem;
			}
			span{
				color:gray;
				font:.14rem "";


			}
			em{display: block;
				font:.14rem/.14rem "";
				color:gray;
				margin: -.05rem 0 0 .05rem;
			}
		}
		p{
			width:2.89rem;
			margin:.05rem 0 0 .38rem;
			font:.14rem/.22rem "";
			color:#333;
			/* text-overflow:ellipsis;
			overflow:hidden;
			white-space: nowrap;  */

		}
		#detail{
			margin-left: .33rem;
			font:.14rem/.3rem "";
			color:gray;
			.te{
				margin-right:.1rem; 
			}
			b{
				margin:0 .1rem 0 .2rem;
			}
			i{
				margin:0 .1rem 0 .2rem;
			}
			
		}
	}

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