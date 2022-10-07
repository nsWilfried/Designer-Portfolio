import index from "@/pages/index.vue"
import home from "@/pages/home.vue"
import Boutique from "@/components/Boutique.vue"
import Portfolio from "@/components/Portfolio.vue"
import Contact from "@/components/Contact.vue"
import About from "@/components/About.vue"


import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/", 
        component: index
    }, 
    {
        path: "/design", 
        component: home, 
        children: [
            {
                path: "", 
                component: About
            }, 
            {
                path: "portfolio", 
                component: Portfolio
            }, 
            {
                path: "boutique", 
                component: Boutique
            }, 
            {
                path: "contact", 
                component: Contact
            },

        ]
    }, 

    {
        path: '/:pathMatch(.*)*', name: 'NotFound', redirect: to => {
            return '/'
        }
    },
]
const router = new createRouter({
    history: createWebHistory(), 
    routes, 
    linkExactActiveClass: "router-active-class"
})
export default router