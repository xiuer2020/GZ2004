import VueRouter from "vue-router";


import Home from "./pages/Home";
import About from "./pages/About";
import Concat from "./pages/Concat";

var router = new VueRouter({
    routes: [{
        path: '/home',
        component: Home
    },{
        path: '/about',
        component: About
    },{
        path: '/concat',
        component: Concat
    }],
});
export default router;
