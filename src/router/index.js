import Vue from 'vue'
import Router from 'vue-router'
import xwp from '@/components/xwp'
import Release from '@/components/Release'
import admin from '@/components/admin'
import login from '@/components/login'
import article from '@/components/article'
import Inser from '@/components/Inser'
import Guanli from '@/components/Guanli'
import said from '@/components/said'
import saidto from '@/components/saidto'
import sign from '@/components/sign'
import details from '@/components/details'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [ 
    {path: '/', 
    name: 'xwp',
    redirect: '/xwp',//重定向 否则返回的logo点进入后是没有效果的
    component: () => import(`@/components/xwp`),
    children: [{
      path: '/xwp',
      component: () => import(`@/components/xwp`)
    }]},
    {path:'/admin',name:'admin',component:admin},
    {path:'/login',name:'login',component:login},
    {path:'/article',name:'article',component:article},
    {path:'/Inser',name:'Inser',component:Inser},
    {path:'/Release',name:'Release',component:Release},
    {path:'/Guanli',name:'Guanli',component:Guanli},
    {path:'/said',name:'said',component:said},
    {path:'/saidto',name:'saidto',component:saidto},
    {path:'/sign',name:'sign',component:sign},
    {path:'/details/:id',name:'details',component:details}
  ]
})
