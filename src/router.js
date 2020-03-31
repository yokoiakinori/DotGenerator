import Vue from 'vue'
import VueRouter from 'vue-router'

import MyDrawing from '@/views/MyDrawing.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {path: '/', component: MyDrawing}
    ]
})

export default router