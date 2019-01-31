<template>
  <div id="app">
    <navbar></navbar>
    <section>
      <router-view></router-view>
    </section>
    
  </div>
</template>

<script>
import navbar from '@/components/public/header';
import navside from '@/components/public/navbar'

export default {
  name: 'app',
  components:{
    navbar,
    navside
  
  },
  data(){
    return{
     
     
    }
    
  },
 /*methods:{
  exit(){
    this.isShow=this.$store.state.status;
    console.log('isShow'+this.isShow)
    this.isChange=!this.$store.state.status;
    console.log('isChange'+this.isChange)
  }
 }*/
}
</script>

<style scoped lang='scss'>
#app{
  /*overflow: hidden;*/
}
section{
position: relative;
height:100%;
top:.48rem;
left:0;

}
</style>
