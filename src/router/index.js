import { createRouter, createWebHistory } from "vue-router"




const routes = [
    // {
    //     path: "/",
    //     name: "home-page",
    //     component: Home
    // },

    // {
    //     path: "/login",
    //     component: Login
    // },

    // {
    //     path: "/about",
    //     component: About
    // },

    // // Dynamic - params
    // {
    //     path: "/work/:id",
    //     component: Work
    // },

    // // redirect 
    // {
    //     path: "/home",
    //     redirect: "/"
    // },

    // {
    //     path: '/:pathMatch(.*)*',
    //     name: 'NotFound',
    //     component: NotFound
    // }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router