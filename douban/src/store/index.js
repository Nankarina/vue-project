import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
Vue.use(Vuex);
const store = new Vuex.Store({

	state:{
		status:''
	},
	actions:{
			
	},

	mutations:{
		
		sedata:function(state,payload){
			state.status=payload;
		}
	}

})


export default store;