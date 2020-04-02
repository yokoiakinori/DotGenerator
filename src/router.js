import Vue from 'vue'
import VueRouter from 'vue-router'

import MyDrawing from '@/views/MyDrawing.vue'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
            path: '/user/:id', 
            component: MyDrawing
        },
        {
            path:'/',
            component: Home
        }
    ]
})

export default router