import {createRouter, createWebHistory} from 'vue-router';
import {routes} from "@/router/routes.js";

const router = createRouter({
    history: createWebHistory('/infinitypo-fnd'),
    routes
});

export default router;
