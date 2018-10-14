import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        showLogin:true,
        username:'',
    },
    mutations:{
        setShowLogin(state,ifshow){
            state.showLogin = ifshow
        },
        setUsername(state,userName){
            state.username = userName
        }
    },
    getters:{
        getUsername(state){
            return state.username;
        },
        getShowLogin(state){
            return state.showLogin;
        }
    },
    
})

export default store