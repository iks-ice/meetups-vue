import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const routes = [
    {
        path:"/",
        name: "meetups",
        component: () => import('@/views/MeetupsPage.vue')
    },
    {
        path:"/meetups/:meetupId",
        props: true,
        name: "meetup",
        component: () => import('@/views/MeetupPage.vue')
    }
];
export const router = new VueRouter({
    mode: "history",
    routes,
})