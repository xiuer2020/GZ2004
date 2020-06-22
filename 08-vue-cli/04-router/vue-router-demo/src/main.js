import Vue from "vue";
import App from "./App.vue";

import VueRouter from "vue-router";
Vue.use(VueRouter);

Vue.config.productionTip = false;


import router from "./router.js";
// var router = new VueRouter({
//     routes: [],
// });

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
