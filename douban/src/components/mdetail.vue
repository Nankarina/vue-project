<template>
	<div id="detail" v-if='moviedata'>
	
		<img :src='moviedata.cover.origin'>
		<div id="p"><i></i><span>影片简介</span></div>
		<div id="mdetail">

		<h1>{{moviedata.name}}</h1>
		<h2></h2>
		<p>导演:  {{moviedata.director}}</p>
		<p>地区语言: {{moviedata.nation}}</p>
		<p>类型: {{moviedata.category}}</p>
		<p>{{moviedata.synopsis}}</p>
	</div>
	</div>
	
</template>

<script>
import axios from 'axios'
export default {

  name: 'mdetail',

  data () {
    return {
    	moviedata:null
    }
  },
  mounted(){
  	console.log(this.$route.params.mid)
  	axios.get(`/v4/api/film/${this.$route.params.mid}?__t=1510709958753`).then(res=>{
  		this.moviedata=res.data.data.film
  		console.log(res.data.data.film)
  	})
  }
}
</script>

<style lang="scss" scoped>

#detail{
	background:#e8e8e8;
	height:100%;
	img{
	width:3.75rem;
	height:2.1rem;
	}
	#p{
		margin-top: .1rem;
		span{
			font:.14rem/.18rem "";
			margin:.05rem 0 0 .05rem;
		}
		i{
			width:.18rem;
			height:.25rem;
			display: inline-block;
			background:#ff9658;
			vertical-align: middle;
			// margin-top: .1rem;
		}
	}
	#mdetail{
		padding:0 .15rem;
		padding-bottom: 2.5rem;
		height:100%;
		background:#e8e8e8;
		h1{
		font:700 .16rem/.28rem "";
		color: #333;
		margin-top: .05rem;
		}
		p{
			font:.13rem/.24rem '';
		}
	}
	
}
</style>