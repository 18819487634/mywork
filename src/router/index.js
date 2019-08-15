import Vue from 'vue'
import Router from 'vue-router'
import LessionDetail from '@/components/LessionDetail'
import EditPractice from '@/components/EditPractice'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'LessionDetail',
    //   component: LessionDetail
    // },
    {
      path: '/',
      name: 'EditPractice',
      component: EditPractice
    }
  ]
})
