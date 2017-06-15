import Vue from 'vue'
import Router from 'vue-router'
import Reg from "@/components/reg/Reg"
import Login from "@/components/login/Login"
import StudentManage from "@/components/student/StudentManage"
import TestVuex from "@/components/TestVuex"
Vue.use(Router)

Vue.use(Router)

export default new Router({
    mode: 'history',
  routes: [{
    path: '/',
    component: Reg
  }, {
    path: '/reg',
    component: Reg
  }, {
    path: '/login',
    component: Login
  },{
    path: '/StudentManage',
    component: StudentManage
  },
    {
      path:'/test',
      component:TestVuex
  }      
          ]
})
