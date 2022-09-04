import projects from "./components/projects.js";
import about from "./components/about.js";
import blogs from "./components/blogs.js";
import home from "./components/home.js";
import skills from "./components/skills.js";
import things from "./components/things_i_love.js"
import form from "./components/contactform.js"
import pageNotFound from "./components/pageNotFound.js";

const routes = [
    {
        path: "/",
        components: {
            default:home,
            skill:skills,
            things:things,
            contact:form,
        },
    },
    {
        path: "/projects",
        components: {
            default: projects,
        },
    },
    {
        path: "/about",
        component: about,
    },
    {
        path:"/contact",
        component:form
    },
    {
        path: "/blogs",
        component: blogs,
    },
    {
        path:"*",
        component: pageNotFound
    }
];

const router = new VueRouter({
    routes, // short for `routes: routes`
    base: "/",
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
});

export default router;
