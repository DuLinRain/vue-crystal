import Vue from 'vue'
// import ElementUI from 'element-ui'
import TEGUI from './components/index.js'
// import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

// Vue.use(ElementUI)
Vue.use(TEGUI)
new Vue({
  el: '#app',
  render: h => h(App)
})
