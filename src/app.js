require('expose?$!expose?jQuery!jquery');
require("bootstrap-webpack");
require("./assets/css/app.css")


import Vue from 'vue/dist/vue.js'
import Login from './login.vue'
import Create from './create.vue'
import Home from './home.vue'
import Dash from './dash.vue'
import User from './user.vue'
import App from './app.vue'
import VueRouter from 'vue-router'

Vue.component('login', Login)
Vue.component('create', Create)

Vue.use(VueRouter)

App.router = new VueRouter({
  base: __dirname,
  routes: [
    { path: '/', component: Dash },
    { path: '/user', component: User }
  ]
})

new Vue(App).$mount('#app')
