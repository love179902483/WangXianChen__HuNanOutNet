import Vue from 'vue'

import VueRouter from 'vue-router'
import router from '../router/router'
Vue.use(VueRouter)

import Vuex from 'vuex'
import store from '../store/store'
Vue.use(Vuex)


import iView from 'iview'
import locale from 'iview/dist/locale/en-US'
import 'iview/dist/styles/iview.css'
Vue.use(iView, { locale});

import '../resource/css/global.css'

import App from './App.vue'



new Vue({
    store,
    router,
    render:h=>h(App)
}).$mount('#app')