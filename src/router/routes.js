import home from '../views/home.vue'
import details from '../views/details.vue'

const routes = [
  { path: '/', redirect: '/home' }, 
  { path: '/home', component: home },
  { path: '/details/:breed', component: details, props: true }
]

export default routes