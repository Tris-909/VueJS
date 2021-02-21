import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
    {
        path: '/',
        redirect: '/teams'
    },
    {
        path: '/teams',
        name: '/teams',
        component: TeamsList,
        children: [
            {
                path: ':teamId',
                name: 'team-members',
                component: TeamMembers,
                props: true
            }
        ]
    },
    {
        path: '/users',
        component: UsersList
    },
    {
        path: '/:notFound(.*)',
        redirect: '/teams'
    }],
    linkActiveClass: 'router-link-active',
    scrollBehavior(to, from, savePosition) {
        if (savePosition) {
            return savePosition
        }
        return {
            left: 0,
            top: 0
        }
    }
});

const app = createApp(App);
app.use(router);
app.mount('#app');