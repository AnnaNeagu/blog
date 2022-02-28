
import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import Articles from '../views/articles/Articles.vue'
import Article from '../views/articles/Article.vue'
import NewArticle from '../views/articles/NewArticle.vue'
// import { reactive } from 'vue' // "from '@vue/composition-api'" if you are using Vue 2.x
// import useVuelidate from '@vuelidate/core'
// import { required, email } from '@vuelidate/validators'
import Signin from '../views/vuelidate/Signin.vue'
import EditArticle from "../views/articles/EditArticle.vue";

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
    },
    {
        path: '/newarticle',
        name: 'NewArticle',
        component: NewArticle
    },
    {
        path: '/signin',
        name: 'Signin',
        component: Signin
    },
    {
        path: '/articles/:id',
        name: 'Article',
        component: Article,
        props: true
    },
    {
        path: "/article/:id/edit",
        name: "EditArticle",
        component: EditArticle,
        props: true,
      },
    //redirect
    {
        path: '/all-articles',
        redirect: '/articles'

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
    routes,


    // setup () {
    //     const state = reactive({
    //       firstName: '',
    //       lastName: '',
    //       contact: {
    //         email: ''
    //       }
    //     })
    //     const rules = {
    //       firstName: { required }, // Matches state.firstName
    //       lastName: { required }, // Matches state.lastName
    //       contact: {
    //         email: { required, email } // Matches state.contact.email
    //       }
    //     }

    //     const v$ = useVuelidate(rules, state)

    //     return { state, v$ }
    //   }
})

export default router
