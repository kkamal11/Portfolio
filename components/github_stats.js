export default {
    template: `
    <div>
        <div class="text-center mt-2 p-6 text-gray-700 dark:text-gray-300">
            <p class="uppercase tracking-widest text-xl font-medium">Github Statistics</p>
        </div>
        <div class="mx-6 sm:mx-0 block lg:flex justify-center item-center">
            <div v-if="showLoader" class="text-center">
                <div class="my-2 text-sm text-gray-500">Fetching From Github...</div>
                <div class="loader"></div>
            </div>
            <div v-else class="lg:flex justify-center item-center">
                <img v-if="!isDark" src="https://github-readme-stats.vercel.app/api?username=kkamal11&show_icons=true" />
                <img v-if="isDark" src="https://github-readme-stats.vercel.app/api?username=kkamal11&show_icons=true&theme=radical" />

                <img v-if="!isDark" src="https://streak-stats.demolab.com/?user=kkamal11" />
                <img v-if="isDark" src="https://streak-stats.demolab.com/?user=kkamal11&theme=radical" />
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            isDark: false,
            showLoader: true,
            setTimeOutId:null
        }
    },
    methods: {
        checkForDarkMode() {
            if (localStorage.getItem('theme') === 'dark' || ((localStorage.getItem("theme") === 'light') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                this.isDark = true;
            }
            else {
                this.isDark = false;
            }
        },
        showLoaderFunc() {
            this.showLoader = !this.showLoader;
            clearTimeout(this.setTimeOutId);
        }
    },
    mounted() {
        this.checkForDarkMode();
        this.setTimeOutId = setTimeout(this.showLoaderFunc, 3000);
    },


}
