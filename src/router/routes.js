import home from '../views/home.vue'
import details from '../views/details.vue'

const routes = [
  { path: '/', redirect: '/home' }, 
  { path: '/home', component: home, name: 'home' },
  { path: '/details/:breed', component: details, props: true, name: 'details' }
]

export default routes