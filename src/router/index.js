import { createRouter, createWebHistory } from "vue-router"
import AdminView from "../admin/view/AdminView.vue"
import UserView  from "../user/views/UserView.vue";
import Product from "../user/components/Product.vue";
import ManagerUser from "../admin/components/ManagerUser.vue"
import ManagerProduct from "../admin/components/ManagerProduct.vue"
import ManagerBlog from "../admin/components/ManagerBlog.vue"
import Dashboard from "../admin/components/Dashboard.vue"
import Blog from "../user/components/Blog.vue"
import Contact from "../user/components/Contact.vue"



const routes = [
    {
        path: "/",
        component: UserView,
        children: [
            {
                path: "/product",
                component: Product
            },

            {
                path: "/blog",
                component: Blog
            },

            {
                path: "/contact",
                component: Contact
            },

        ]
    },

    

    {
        path: "/admin",
        component: AdminView ,
        children: [
            {
                path: "user",
                component: ManagerUser
            },

            {
                path: "",
                component: Dashboard
            },

            {
                path: "product",
                component: ManagerProduct
            },

            {
                path: "blog",
                component: ManagerBlog
            }
        ]
    },

]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    linkActiveClass: "active_navbar"
})

export default router