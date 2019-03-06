import './bootstrap'
import Vue from 'vue'
import router from './router'
import store from './store'

const app = new Vue({
    el: '#app',
    router,
    store,
    methods: {
      isPathMatch: function(path)
      {
        return this.$route.matched.some(record => record.path == path)
      }
    }
})

export default app
