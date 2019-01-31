import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import movie from '@/components/movie'
import nowplay from '@/components/nowplaymore' 
import video from '@/components/video';
import videodetail from '@/components/videodetail';
import group from '@/components/group';
import comingsoon from '@/components/comingsoon';
import mdetail from '@/components/mdetail';
import search from '@/components/search'
import msearch from '@/components/msearch'
Vue.use(Router)

export default new Router({
  routes: [
   {
   	path:'/home',
   	component:home
   },
   {

   	path:'/movie',
   	component:movie,
   
   },
   {
    path:'/nowplay',
    component:nowplay
   },
   {
    path:'/video',
    component:video,
   
   },
    {
    path:'/group',
    component:group,
   
   },
   {
    path:'/videodetail/:dataid',
    component:videodetail
   },
   {
    path:'/comingsoon',
    component:comingsoon
   },
   {
    path:'/mdetail/:mid',
    component:mdetail
   },
   {
    path:'/search',
    component:search,

   },
   {
    path:'/msearch/:sedata',
    component:msearch
   },
   {
   	path:'*',
   	redirect:'/home'
   }
  ]
})
