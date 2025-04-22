import home from '../views/home.vue'

const routes = [
  { path: '/', redirect: '/home' }, 
  { path: '/home', component: home } 
]

export default routes
