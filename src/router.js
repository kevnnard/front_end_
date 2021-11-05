import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue';

import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import Home from './components/Home.vue'
import UserHome from './components/UserHome.vue'
import Denuncia from './components/Denuncia.vue'
import AboutUs from './components/AboutUs.vue'


const routes = [{
        path: '/desconocido',
        name: 'root',
        component: App
    },
    {
        path: '/user/logIn',
        name: "logIn",
        component: LogIn
    },
    {
        path: '/user/signUp',
        name: "signUp",
        component: SignUp
    },
    {
        path: '/',
        name: "home",
        component: Home
    },
    {
        path: '/denuncia',
        name: "Denuncia",
        component: Denuncia
    },
    {
        path: '/user/Home',
        name: "UserHome",
        component: UserHome
    },
    {
        path: '/AboutUs',
        name: "AboutUs",
        component: AboutUs
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;