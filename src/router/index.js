import index from "@/pages/index.vue"
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/", 
        component: index
    }, 
    // {
    //     path: '/:pathMatch(.*)*', name: 'NotFound', redirect: to => {
    //         return '/'
    //     }
    // },
]
const router = new createRouter({
    history: createWebHistory(), 
    routes
})
export default router