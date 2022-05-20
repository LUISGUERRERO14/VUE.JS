import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'

// Components
import ListComponent from '@/components/ListComponent'
import DetailComponent from '@/components/DetailComponent'
import SaveComponent from '@/components/SaveComponent' //opcional o dejar componentes de create y edit
//import CreateComponent from '@/components/CreateComponent'

// define routes object
const routes = [
    {
        path: '/',
        component: ListComponent,
    },
    {
        path: '/details/:anime',
        component: DetailComponent,
        name: 'detail'
    },
    {
        path: '/edit/:position?',
        component: SaveComponent,
        name: 'edit'
    },
    {
        path: '/create/',
        component: SaveComponent,
        name: 'create'
    },
]

// Create routes object of vue router
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

// Vue instance
const app = createApp(App)

app.use(router)

app.mount('#app')