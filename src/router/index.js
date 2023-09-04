import { createRouter, createWebHistory } from "vue-router"
import AdminView from "../admin/view/AdminView.vue"
import UserView  from "../user/views/UserView.vue";
import Product from "../user/components/Product.vue";
import ManagerUser from "../admin/components/ManagerUser.vue"
import ManagerProduct from "../admin/components/ManagerProduct.vue"
import ManagerBlog from "../admin/components/ManagerBlog.vue"



const routes = [
    {
        path: "/",
        component: UserView,
        children: [
            {
                path: "/product",
                component: Product
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
})

export default router