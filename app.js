import head from "./components/header.js";
import footer from "./components/footer.js";
import router from "./route.js";

const app = new Vue({
    el: '#app',
    data: {
        message: "kamal",
    },
    router,
    components: {
        'header-comp': head,
        'footer-comp': footer,
    },
    methods: {
        goBack: function () {
            window.open("http://127.0.0.1:5501/#/")
        }
    }
})


////////////Scroll to Top setting////////////////////
let scrollButton = document.getElementById("scrollBtn");
scrollButton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
window.addEventListener("scroll", () => {
    if (window.scrollY > 14) {
        scrollButton.classList.remove("hidden");
    }
    else {
        scrollButton.classList.add("hidden");
    }
})


