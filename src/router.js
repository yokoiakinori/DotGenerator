import Vue from 'vue'
import VueRouter from 'vue-router'

import MyDrawing from '@/views/MyDrawing.vue'
import Home from '@/views/Home.vue'
import UserProductions from '@/views/UserProductions.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
            path: '/user/:name', 
            component: MyDrawing,
            props:true,
            children:[
                {
                    name:'user-production',
                    path:':pid',
                    component:UserProductions,
                    props:route =>({pid:Number(route.params.pid)})
                },
            ]
        },
        {
            path:'/',
            component: Home
        }
    ]
})

export default router