import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const routes = [
    {
        path:"/login",
        name: "login",
        component: () => import("@/views/LoginPage.vue")
    },
    {
        path:"/register",
        name: "register",
        component: () => import("@/views/RegisterPage.vue")
    },
    {
        path:"/",
        // alias: "/meetups",
        // redirect: "/meetups",
        name: "index",
        component: () => import("@/views/MeetupsPage.vue")
    },
    {
        path:"/meetups",
        name: "meetups",
        component: () => import("@/views/MeetupsPage.vue")
    },
    {
        path:"/meetups/:meetupId(\\d+)",
        name: "meetup",
        redirect: (to) => ({name: "description", params: to.params}),
        props: (to) => ({meetupId: parseInt(to.params.meetupId)}),
        meta: {
            showReturn: true,
        },
        component: () => import("@/views/MeetupPage.vue"),
        children: [
            {
                path: "",
                alias: "description",
                name: "description",
                props: true,
                component: () => import("@/components/MeetupDescription.vue"),
            },
            {
                path: "agenda",
                name: "agenda",
                props: true,
                component: () => import("@/components/MeetupAgenda.vue"),
            }
        ],
    }
];
export const router = new VueRouter({
    mode: "history",
    routes,
});