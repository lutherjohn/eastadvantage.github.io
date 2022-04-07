import Vue from "vue";
import VueRouter from "vue-router";
import DataList from "../views/DataList";
import Card from "../views/Card"

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Card
    },
    {
        path: "/datalist",
        name: "DataList",
        component: DataList
    }

]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
