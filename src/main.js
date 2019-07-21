import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import './assets/lib/dist/css/mui.min.css'
import './assets/lib/dist/css/icons-extra.css'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import moment from 'moment'
Vue.filter('dateFormat',function(datastr,pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(datastr).format(pattern)
})

import VuePreview from 'vue-preview'
Vue.use(VuePreview)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
