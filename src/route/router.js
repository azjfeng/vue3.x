import {createRouter,createWebHashHistory} from 'vue-router'
// import { from } from "core-js/fn/array"

const routes = [
    {
        path:'/',component:import('../components/Home.vue')
    },
    {
        path:'/home',component:import('../components/Home.vue')
    }
]
const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
  });
export default router