import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '../components/login'
import TopBar from '../components/topbar'
import SideBar from '../components/sidebar'
import Contain from '../components/contain'
import Container from '../components/container'
import Pool from '../components/pool'
import Project from '../components/my_project'
import Manage from '../components/manage'
import Channel from '../components/channel'
import Share from '../components/share'
import Create from '../components/create'

const routes = [
  { path: '/', component: Login },
  {
    path: '/contain',
    components: { top: TopBar, side: SideBar, default: Contain },
    beforeEnter: (to, from, next) => {
      console.log('Pool before enter')
      next()
    },
    children: [
      {
        path: '',
        components: { default: Container }
      },
      {
        path: 'pool',
        components: { default: Pool }
      },
      {
        path: 'project',
        components: { default: Project }
      },
      {
        path: 'manage',
        components: { default: Manage }
      },
      {
        path: 'channel',
        components: { default: Channel }
      },
      {
        path: 'share',
        components: { default: Share }
      }
    ]
  },
  {
    path: '/create',
    components: { top: TopBar, default: Create }
  }
]

export default new VueRouter({
  routes
})
