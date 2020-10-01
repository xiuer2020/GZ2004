import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Concat from "../views/Concat.vue";
import UserList from "../views/UserList.vue";

import User from "../views/User.vue";
import Post from "../views/Post.vue";

import Search from "../views/Search.vue";

import NotFound from "../views/NotFound.vue";

import Profile from "../views/Profile.vue";
import Posts from "../views/Posts.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
        path: "/concat",
        name: "Concat",
        component: Concat,
    },
    {
        path: "/user",
        name: "UserList",
        component: UserList,
    },
    {
        // xxx.com/user/nick
        // 动态路径参数 以冒号开头  接收用$route.params
        path: "/user/:username",
        name: "User",
        component: User,
        // 嵌套路由 子路由
        children: [{ path: "profile", component: Profile },{ path: "posts", component: Posts }],
    },

    // {
    //     path: "/user/:username/profile",
    //     name: "Profile",
    //     component: Profile,
    // },

    {
        // 动态路径参数 以冒号开头  接收用$route.params
        path: "/user/:username/post/:postId",
        name: "Post",
        component: Post,
    },

    {
        // xxx.com/serach?kw=xxx
        // query 查询传参
        path: "/search",
        name: "Search",
        component: Search,
    },

    {
        // 404错误页面 所有页面
        // 匹配的优先级就按照路由的定义顺序：谁先定义的，谁的优先级就最高。
        path: "*",
        component: NotFound,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
