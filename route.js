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
      meta: {
        title: 'Home'
      }
    },
    {
        path: "/projects",
        components: {
            default: projects,
        },
      meta: {
        title: 'Projects'
      }
    },
    {
        path: "/about",
        component: about,
        meta: {
        title: 'About'
      }
    },
    {
        path:"/contact",
        component:form,
        meta: {
        title: 'Contact'
      }
    },
    {
        path: "/blogs",
        component: blogs,
    meta: {
        title: 'Blogs'
      }
    },
    {
        path:"*",
        component: pageNotFound,
            meta: {
        title: 'Error'
      }
    }
];

const router = new VueRouter({
    routes, // short for `routes: routes`
    base: "/",
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
});
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Kamal`;
  next();
})
export default router;
