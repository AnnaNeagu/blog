
import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import Articles from '../views/articles/Articles.vue'
import Article from '../views/articles/Article.vue'



const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/articles',
        name: 'Articles',
        component: Articles
    }
    ,
    {
        path: '/articles/:id',
        name: 'Article',
        component: Article,
        props: true
    },
    //redirect
    {
        path: '/all-articles',
        redirect : '/articles'

    },
    //catchall 404
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }
    
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router