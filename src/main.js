import Vue from 'vue'
import Vonic from 'vonic'

// Page Components
import Index from './components/Index.vue'
import About from './components/About.vue'

// Routers
const routers = {
  '/': {
    component: Index
  },

  '/about': {
    component: About
  }
}

Vue.use(Vonic.app, {routers: routers, defaultRouterUrl: '/'})

