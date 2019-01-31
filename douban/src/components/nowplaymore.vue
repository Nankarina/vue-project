<template>
	<div id="more">
		<h1>正在上映</h1>
		<ul  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="0"
   infinite-scroll-immediate-check ="false">
			<li v-for='data in datalist' @click='send(data.id)'>
				<img :src='data.poster.origin'>
				<p>{{data.name}}</p>
				<span>评分 {{data.grade}}</span>
			</li>
		</ul>
		<div id="context">{{context}}</div>
	</div>
</template>

<script>
import axios from 'axios';
import Vue from 'vue'
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);
import router from "@/router";
export default {

  name: 'nowplaymore',

  data () {
    return {
    	datalist:[],
    	total:0,
    	current:1,
    	loading:false,
    	context:'数据加载中'
    }
  },
  mounted(){
  	axios.get('/v4/api/film/now-playing',{
  		params:{
  				page:this.current,
  				count:7
  		  	  	}
  	}).then(res=>{
  		this.datalist=res.data.data.films;
  		this.total=res.data.data.page.total;
  	})
  },
  methods:{
  	send(id){
  		// console.log(id);
  		router.push(`/mdetail/${id}`)
  	},
  	loadMore(){
  		this.current++;
  		if(this.current>this.total){
  			this.loading=true
  			this.context='数据加载完了';
  			return;
  		}
  		axios.get('/v4/api/film/now-playing',{
  			params:{
  				page:this.current,
  				count:7
  			}
  		}).then(res=>{
  			this.datalist = [...this.datalist,...res.data.data.films];
  		
  		})
  	}
  }
}
</script>

<style lang="scss" scoped>
#more{
	padding:0 .15rem;
	h1{
		padding-top:.2rem;
		font:.24rem/.4rem "";
	}
	ul{
		overflow: hidden;
		padding:0 .05rem;
	}
	ul li{
		float:left;
		margin:.1rem .11rem 0 0;
		img{
			width:1rem;
			height:1.55rem;
		}
		p{
			font:.14rem/.28rem "";
			text-align: center;
			width:1rem;
			color:#333;
			overflow:hidden;
			text-overflow:ellipsis;
			white-space: nowrap;
		}
		span{
			font:.12rem/.14rem "";
			color:orange;
			display: block;
			text-align: center;
		}
	}
	#context{
		font:.16rem/.24rem "";
		color:red;
		text-align: center;
	}
}
</style>