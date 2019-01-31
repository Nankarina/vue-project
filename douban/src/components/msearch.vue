<template>
	<div id="msearch">
		<div id="data" v-if='datalist'>
			<h1>{{datalist.title}}</h1>
			<ul>
				<li v-for='data in movielist'>
				<img :src='data.images.large'>
				<p>{{data.title}}</p>
				<div id="te">({{data.original_title}})</div>
				<div id="right">
					<p>年份: {{data.year}}</p>
					<!-- <span>导演: {{data.directors[0].name}}</span> -->
					
				</div>	

				</li>
			</ul>
		</div>

		
	</div>
</template>

<script>
import axios from 'axios'
export default {

  name: 'msearch',

  data () {
    return {
    	datalist:null,
    	movielist:[],

    }
  },
  mounted(){
  	axios.get(`/v2/movie/search?q=${this.$route.params.sedata}`).then(res=>{

  		this.datalist=res.data
		console.log(res.data)
  		this.movielist=res.data.subjects
  		console.log(res.data.subjects)
  	})
  }
}
</script>

<style lang="scss" scoped>
#msearch{
	width:100%;
	h1{
		font:.16rem/.5rem "";
		margin-left: .15rem;
		color:orange;
	}
	ul{
		padding:0 .15rem;
		li{
			margin-bottom: .2rem;
			overflow: hidden;
		}
		img{
		width:1rem;
		height:1rem;
		float:left;
	}
	}
	
	p{
		
		font:.18rem/.5rem '';
		color:gray;
		margin-left: .1rem;
		float:left;
		width:1rem;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	#te{
		font:.14rem/.5rem "";
		// display: block;
		color:gray;
		float:left;
		width:1rem;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	
	#right{
		float:left;
		overflow:hidden;
		p{
			float:left;
		}
	span{
		
		font:.12rem/.5rem "";
		color:orange;
		margin-left: .1rem;
		display:block;
		width:1rem;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	}

	
}
</style>