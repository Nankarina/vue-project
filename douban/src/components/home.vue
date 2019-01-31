<template>
	<div id="main">
		<navside></navside>
		<div id="article">
			<ul v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="0"
   infinite-scroll-immediate-check ="false">
				<li v-for='data in datalist'>
					<div id="top">
						<div id="l">
						<h3>{{data.title}}</h3>
						<p>{{data.target.desc}}</p>
						</div>
						<img :src='data.target.cover_url'>

					</div>
					<!-- <div id="bottom">
						<span>by {{data.target.author.name}}</span>
						<b></b>
					</div> -->
				</li>
			</ul>
			<div id="content">{{context}}</div>
		</div>
	</div>
</template>

<script>
import navside from '@/components/public/nav';
import axios from 'axios'
import Vue from 'vue'
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);
export default {

  name: 'home',

  data () {
    return {
    	datalist:[],
    	loading:false,
    	count:10,
    	context:'数据加载中'
    }
  },
  components:{
  	navside
  },
  
  mounted(){
  	
  	axios.get(`rexxar/api/v2/selection/theme/20/items?start=0&count=${this.count}`).then(res=>{
  		this.datalist=res.data.items;
  		this.count=res.data.count
  	  	console.log(res)
  	  		})
  },
  methods:{
  	loadMore(){
  		this.count++;
  		if(this.count>100){
  			this.loading=true;
  			this.context='数据加载完了';
  			return;
  		}
  		axios.get(`rexxar/api/v2/selection/theme/20/items?start=0&count=${this.count}`).then(res=>{
  			this.datalist=[...this.datalist,...res.data.items]
  		  	console.log(res)
  		  		})
  	}
  }
}
</script>

<style lang="scss" scoped>
#main{
	width:100%;
}
#article{

	ul{
		
		margin-left: .06rem;
	}
	ul li{
		width:3.57rem;
		
		border-bottom: 1px solid #e8e8e8;
		margin-bottom: .2rem;
	}
}
#top{margin-left: .2rem;
	
	overflow: hidden;
	img{
		width:.86rem;
		height:.86rem;
		float:left;

	}
}
#l{
	float: left;
	margin-right: .26rem;

	h3{
		width:2.2rem;
		// height:.39rem;
		font:.16rem/.24rem "";
   		color: #333;
   		font-weight: 700;
	}
	p{
		width:2.2rem;
		// height:.36rem;
		// margin:.2rem .3rem .2rem 0;
		margin-bottom: .1rem;
		font:.12rem/.24rem "";
		color:gray;
	}
}
#content{
	font:.14rem/.24rem '';
	color:red;
	text-align: center;
}
</style>