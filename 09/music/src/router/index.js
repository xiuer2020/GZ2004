import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Hot from "../views/Hot.vue";
import Search from "../views/Search.vue";
import Playlist from "../views/Playlist.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
        
    },
    {
        path: "/hot",
        name: "Hot",
        component: Hot,
    },
    {
        path: "/search",
        name: "Search",
        component: Search,
    },
    // {
    //   path: "/about",
    //   name: "About",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "../views/About.vue")
    // },
    {
        path: "/playlist",
        name: "Playlist",
        component: Playlist,
        meta: { requiresAuth: true },
    },
];

const router = new VueRouter({
    // mode: 'history',
    routes,
});

export default router;
