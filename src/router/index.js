import { createRouter, createWebHistory } from 'vue-router'
import Read from "@/components/Read.vue";
import Edit from "@/components/Edit.vue";
import Add from "@/components/Add.vue";


const routes = [
    {
        name: 'main',
        path: '/',
        component: Read
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: Edit
    },
    {
        name: 'add',
        path: '/add',
        component: Add
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                left: 0,
                top: 120,
                behavior: 'smooth'
            }
        }
    }
})
export default router