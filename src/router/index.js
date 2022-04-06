import Vue from "vue";
import Router from "vue-router";
import layout from "@/layout";

Vue.use(Router);

const routes = [
    {
        path: "/dataTable",
        component: layout
    }
]

const router = new Router({
    routes,
    base: process.env.BASE_URL,
    mode: "history",
});

export default router;
