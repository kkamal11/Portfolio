const head = {
	template: `
    <div id="nav">
        <nav class=" text-white mt-0 px-4 py-3.5 border-collapse dark:bg-gray-700">
            <div class="container flex flex-wrap items-center justify-between mx-auto">
              <a href="/" class="block py-2 pl-2 md:hover:underline md:hover:underline-offset-4 border-b md:border-0 md:p-0 md:text-lg md:font-normal dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><img src="./assets/nav.png" width="30px" alt="image here" class="rotate inline rounded-full"></a>
	          
			  <button @click="openMenu" data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 ml-3 text-md rounded-lg md:hidden hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
                <i v-if="expand" class="bi bi-justify" style="font-size:30px;"></i>
                <i v-else class="bi bi-x-lg" style="font-size:30px;"></i>
              </button>
              <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
                <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-normal">
                  <router-link v-for="[key,value] in Object.entries(links)" :to="value" exact :key="key" 
				  class="hover:underline underline-offset-4 block py-2 pl-3 pr-4 border-b border-gray-100 md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
				  >
                    {{key}}
                  </router-link>
				  <a onclick="alert('Coming soon')" target="_blank" class="hover:underline underline-offset-4 cursor-pointer block py-2 pl-3 pr-4 border-b border-gray-100 md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    Blog
                  </a>
                  <a @click="changeMode" class="block py-2 pl-3 pr-4 md:border-0  md:p-0 cursor-pointer border-b border-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >&nbsp;
                    <i v-if="!isDark" class="bi bi-moon-stars-fill"></i>
                    <i v-else class="bi bi-brightness-high"></i>
                  </a>
                </ul>
              </div>
            </div>
        </nav>
    </div>`,
	data() {
		return {
			isDark: false,
			expand: true,
			isOpen: false,
			links: {
				"Home": "/",
				"Projects": "/projects",
				"About": "/about",
				"Contact": "/contact",
			},
		};
	},
	methods: {
		openMenu() {
			this.expand = !this.expand;
			const x = document.getElementById("mobile-menu");
			if (!this.expand) {
				x.classList.remove("hidden");
			} else {
				x.classList.add("hidden");
			}
		},
		changeMode: function () {
			if (!this.isDark) {
				localStorage.setItem('theme', 'dark')
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark')
				localStorage.setItem("theme", "light")
			}
			this.isDark = !this.isDark
		},
	},
	computed: {
		//used to get derived state of variable
	},
	mounted() {
		if (localStorage.getItem('theme') === 'dark' || ((localStorage.getItem("theme") === 'light') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			document.documentElement.classList.add('dark');
			this.isDark = true;
		} else {
			document.documentElement.classList.remove('dark')
			this.isDark = false;
		}
	}
};

export default head;
