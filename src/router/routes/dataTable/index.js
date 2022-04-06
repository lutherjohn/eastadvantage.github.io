import dataTable from "./dataTable"

export default {
    path: "/dataTable",
    component: () => import("@/layout"),
    children: dataTable
}