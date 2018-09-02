import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Cart from '@/pages/Cart'
import Home from '@/pages/Home'

// Admin components
import Index from '@/pages/admin/Index'
import New from '@/pages/admin/New'
import Products from '@/pages/admin/Products'
import Edit from '@/pages/admin/Edit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/cart', name: 'Cart', component: Cart },
    { path: '/admin',
      name: 'Admin',
      component: Index,
      children: [
        { path: 'new', name: 'New', component: New },
        { path: '', name: 'Products', component: Products },
        { path: 'edit/:id', name: 'Edit', component: Edit }
      ]
    }
  ]
})
