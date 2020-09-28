/*
 * @Author: your name
 * @Date: 2020-09-27 18:20:48
 * @LastEditTime: 2020-09-28 17:58:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zt\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import 'video.js/dist/video-js.css'
import VideoPlayer from 'vue-video-player'
import 'videojs-flash'
Vue.use(VideoPlayer)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
