<template>
	<div id="movie">

		<div id="list">
			<h2>正在上映</h2>
			<router-link tag='b' to="/nowplay">更多</router-link>
			<ul>
				<li v-for='data in playnow' to='/mdetail' @click='send(data.id)'>
					<img :src='data.poster.origin'>
					<p>{{data.name}}</p>
					<span>{{data.grade}}</span>
				</li>
			</ul>
			
		</div>
		<div id="list">
			<h2>即将上映</h2>
			<router-link tag='b' to="/comingsoon">更多</router-link>
			<ul>
				<li v-for='data in comingsoon'>
					<img :src='data.poster.origin'>
					<p>{{data.name}}</p>
					<span>{{data.grade}}</span>
				</li>
			</ul>
		</div>
		<div id="footer">
		<div id="f">
			<img src="https://img3.doubanio.com/f/talion/7837f29dd7deab9416274ae374a59bc17b5f33c6/pics/card/douban-app-logo.png">
			<div id="ftitle">
				<h1>豆瓣</h1>
				<p>我们的精神角落</p>
			</div>
		</div>
		<a href="https://www.douban.com/doubanapp/card/log?category=guangbo&amp;cid=&amp;action=click_download&amp;ref=http%3A//www.douban.com/doubanapp/app%3Fchannel%3Dcard_guangbo%26direct_dl%3D1" rel="nofollow">去 App Store 免费下载 iOS 客户端</a>
		</div>
	</div>
</template>

<script>

import axios from 'axios'
import('vue-swipe/dist/vue-swipe.css');
import router from "@/router";
import { Swipe, SwipeItem } from 'vue-swipe';
export default {

  name: 'movie',
  components: {
      'swipe': Swipe,
      'swipe-item':SwipeItem,

    },
  data () {
    return {
    	playnow:[],
    	comingsoon:[]
    }
  },
  methods:{
  	send(id){
  		router.push(`/mdetail/${id}`)
  	}
  },
  mounted(){
  	axios.get("/v4/api/film/now-playing?page=1&count=6").then(res=>{
  		this.playnow=res.data.data.films;
  		console.log(res.data.data.films)
  	}) ;
  	axios.get('/v4/api/film/coming-soon?page=1&count=6').then(res=>{
  		this.comingsoon=res.data.data.films
  		console.log(res.data.data.films)
  	})
  }
   
}
</script>

<style lang="scss" scoped>
#movie{
	width:100%;
	padding:.1rem .15rem;
	#list{
		 overflow: hidden;
		margin-bottom: .1rem;
		h2{
		font:.16rem/.28rem "";
		color:#333;
		float: left;
		
		}
		b{
			float:left;
			font:.14rem/.28rem "";
			color:#42bd56;
			display: block;
			margin-left:2.5rem;
		}
		
	}

	ul{
		
	li{
		margin-right: .1rem;
		float:left;
			
			img{
				width:1.05rem;
				height:1.42rem;
			}
		p{
			text-align: center;
			font: .14rem/.28rem "";
			width:1rem;
			overflow:hidden;
			text-overflow:ellipsis;
			white-space: nowrap;

		}
		span{
			display: block;
			font:.12rem/.20rem "";
			color:gray;
			text-align: center;
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