<template>
	<div id="group">
		<div id="gdetail">
			<ul   v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="0"
   infinite-scroll-immediate-check ="false">
				<li v-for="data in grouplist">
					<div id="title">
						<img :src='data.avatar'>
						<p>{{data.name}}</p>
						<span>{{data.member_count}}人</span>
					</div>
					<div id="content">{{data.desc_abstract}}</div>
				</li>
			</ul>
			<div id="more" @click='loadMore'>
				更多相关小组
			</div>
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
import axios from 'axios';
import Vue from 'vue'
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);
export default {

  name: 'group',

  data () {
    return {
    	grouplist:[],
    	total:0,
    	start:0,
    	loading:false
    }
  },
  mounted(){
  	axios.get(`/rexxar/api/v2/group/rec_groups_by_tag?tag=影视&start=${this.start}&count=25&ck=&for_mobile=1`).then(res=>{
  		this.grouplist=res.data.groups;
  		this.total=res.data.total;
  		console.log(res.data)

  	})
  },
  methods:{
  	loadMore(){
  		this.start++
  		if(this.start>this.total){
  			this.loading=true;
  			return;
  		}
  		axios.get(`/rexxar/api/v2/group/rec_groups_by_tag?tag=影视&start=${this.start}&count=25&ck=&for_mobile=1`).then(res=>{
  			
  			this.grouplist=[...this.grouplist,...res.data.groups]
  		})
  	}
  }
}
</script>

<style lang="scss" scoped>
#group{
	width: 100%;
	height:100%;
	#gdetail{
		padding:0 .15rem;
		h2{
			font:.20rem/.5rem "";
		}
		ul{
			margin-top: .1rem;
		}
		li{
			border-bottom:1px solid #e8e8e8;
			padding:.1rem 0;
			#title{
				overflow: hidden;
				img{
					float: left;
					width:.42rem;
					height:.42rem;
				}
				p{
					float:left;
					font:.18rem/.42rem '';
					color:#333;
					width:2.31rem;
					text-overflow:ellipsis;
					overflow:hidden;
					white-space: nowrap;
					margin-left: .1rem;
				}
				span{
					font:.13rem/.42rem '';
					color:gray;
					float:left;
				}
			}
			#content{
				font:.14rem/.4rem "";
				width:100%;
				text-overflow:ellipsis;
				overflow:hidden;
				white-space: nowrap;
				color:gray;
			} 
		}
	}
#more{
	font:.14rem/.7rem "";
	color:#42bd56;
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
}
</style>