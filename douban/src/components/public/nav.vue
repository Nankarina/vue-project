<template>
	<div id="navside">
		<ul>
			<router-link tag='li' to='/movie'>影院热映</router-link>
			<router-link tag='li' to='/home'>豆瓣图书</router-link>
			<router-link tag='li' to='video'>豆瓣广播</router-link>
			<router-link tag='li' to='/group'>影视小组</router-link>
		</ul>
	</div>
</template>

<script>
export default {

  name: 'nav',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
#navside{
	overflow:hidden;
	padding:.2rem .1rem;
	// margin-top: .3rem;
	ul{
		margin-left: .14rem;
		li{
			text-align: center;
			width:1.63rem;
			height:.44rem;
			background: #e8e8e8;
			float: left;
			color:#333;
			font:.14rem/.44rem "";
			margin: 0 .05rem .05rem 0;
		}
	}
}
</style>