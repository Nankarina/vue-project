<template>
	<div id="header">
		<router-link tag='h1' to="/home">豆瓣</router-link>
		<ul>
			<router-link style="color:#2384E8;" tag="li" to="/movie">电影</router-link>
			<router-link tag='li' to="/home" style="color:#9F7860;">图书</router-link>
			<router-link tag='li' to='/video' style="color:#E4A813;">广播</router-link>
			<router-link tag='li' to="/group" style="color:#2AB8CC;">小组</router-link>
		</ul>
		<router-link tag='div'  id='icon' to='/search' class='iconfont icon-category'></router-link>
	</div>
</template>

<script>

export default {

  name: 'header',

  data () {
    return {
    	isShow:false
    }
  },
  /*methods:{
  	show(){
  		this.isShow=!this.isShow;
  		console.log('dsad')
  		this.$store.commit("exit",this.isShow);
  	}
  }*/
}
</script>
<style src="@/assets/iconfont/iconfont.css"></style>
<style lang="scss" scoped>
#header{
	height:.27rem;
	width:100%;
	padding:.1rem .15rem;
	border-bottom:1px solid #e8e8e8; 
	position:fixed;
	margin-bottom: .27rem;
	background: #fff;
	z-index:55;
	top:0;

	h1{
		color:#42bd56;
		font:700 .20rem/.27rem "";
		display: inline-block;
		float: left;
		margin-right:.7rem;
	}
	ul{
		float: left;
		overflow: hidden;
		margin-top: .05rem;
		li{
			float: left;
			width:.3rem;
			height:.2rem;
			font:.14rem/.2rem "";
			margin-right: .15rem;
		}
		
	}
	#icon{
		display: inline-block;
		float: left;
		color:#42bd56;
		font:.14rem/.2rem "";
		margin: .05rem 0 0 .3rem;
	}
}
</style>