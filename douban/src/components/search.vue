<template>
	<div id="search">
		<div id="input">
		<span to='/msearch'  @click='search'>搜索</span>
			<input type='text' id='span' >
		</div>
		<div id="list">
		<ul>
			<router-link tag='li' to='/movie'><p style="color:rgb(35, 132, 232);">电影</p><b>影院热映</b></router-link>
			<router-link tag='li' to='/movie'><p style='color:rgb(122, 106, 219);'>电视</p><b>正在热播</b></router-link>
			<router-link tag='li' to='/home'><p style='color:rgb(159, 120, 96);'>图书</p><b>畅销排行</b></router-link>
			<li><p style='color:rgb(230, 70, 126);'>同城</p><b>周末活动</b></li>
			<router-link tag='li' to='/groups'><p style='color:rgb(42, 184, 204);'>小组</p><b>志趣相同</b></router-link>
			<li><p style='color:rgb(244, 143, 46);'>音乐</p><b>新碟榜</b></li>
			<li><p style='color:rgb(159, 120, 96);'>阅读</p><b>电子书</b></li>
			<li><p style='color:rgb(87, 116, 197);'>游戏</p><b>虚拟世界</b></li>
			<li><p style='color:rgb(89, 108, 221);'>应用</p><b>玩手机</b></li>
			<li><p style='color:rgb(225, 100, 77);'>东西</p><b>心爱之物</b></li>
			<li><p style='color:rgb(64, 207, 169);'>FM</p><b>红心歌单</b></li>
			<li><p style='color:rgb(66, 189, 86);'>市集</p><b>购买原创</b></li>
		</ul>
	</div>
		<div id="register">
			<a href="https://accounts.douban.com/register?redir=https://m.douban.com/#/?_k=ta2eo2">注册账号</a>
			<span>|</span>
			<a href="https://accounts.douban.com/login?redir=https://m.douban.com/">登录豆瓣</a>
			
		</div>
		<div id="bottom">
			<a href="https://www.douban.com/">使用桌面版</a>
			<span>|</span>
			<a href="https://itunes.apple.com/cn/app/dou-ban/id907002334">使用豆瓣APP</a>
		</div>
		
	</div>
</template>

<script>
import axios from 'axios';
import router from '@/router';
export default {

  name: 'search',
 data () {
    return {

    }
  },
 
  methods:{
  	search(){
  		var span=document.getElementById('span');
  		console.log(span)
  		var value=span.value;
  		console.log(value)
  		router.push(`/msearch/${value}`)
  	}
  }
}
</script>

<style lang="scss" scoped>
#search{
	width:100%;
}
#input{
	padding:0 .1rem;
	margin-top: .26rem;
	overflow: hidden;
	span{
		float:left;
		font:.14rem/.24rem "";
		color:#42bd56;
	}
	input{
		width:2.97rem;
		height:.29rem;
		margin-left: .15rem;
		border:none;
		background: #e8e8e8;
		float:left;
	}
	b{
		color:gray;
		font:.14rem/.29rem "";
		display: block;
		text-align: center;
	}

}
#list{
	width:100%;
	ul{
		width:100%;
	padding:0 .3rem;
	margin-top: .2rem;
	overflow:hidden;

li{

		width:.58rem;
		height:.58rem;
		float:left;
		margin:0 .23rem .15rem .24rem;
		font:.24rem/.26rem "";
	}

	b{
		font:.12rem/.2rem "";
		color:#999;
	}
	}
}

#register{
/* justify-content:space-between;
word-wrap: break-word; */
border-top:1px solid #f3f3f3;
border-bottom: 1px solid #f3f3f3;
a{
	width:1.78rem;
	display:inline-block;			
	font:.14rem/.5rem "";
	color:#42bd56;
	text-align: center;
	
	}
	span{
		color:#e8e8e8;
	}
}
#bottom{
	border-bottom: 1px solid #f3f3f3;	
	a{
		width:1.78rem;
		display:inline-block;			
		font:.14rem/.5rem "";
		color:#42bd56;
		text-align: center;
	}
	span{
		color:#e8e8e8;
	}
}
</style>