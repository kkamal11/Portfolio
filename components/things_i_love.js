const things = {
    template:`
    <div class="text-center">
        <div class="mx-8 lg:m-14">
            <h1 class="text-4xl font-bold text-gray-700 my-6 tracking-wider dark:text-white ">I am primarily focused on...</h1>
            <div class="grid lg:grid-cols-3 gap-x-10 md:mx-36">
                <div class="card bg-gray-50 border-b-4 rounded-xl my-4 hover:bg-blue-50 hover:border-b-blue-800 dark:bg-gray-800 dark:border-gray-800 dark:hover:border-b-blue-800" >
                    <h2 class="text-2xl text-sky-700 font-medium my-4 tracking-wider dark:text-fuchsia-50">Python</h2>
                    <i class="fab fa-python text-blue-900 text-8xl"></i>
                    <p class=" text-gray-700  p-2 my-2 dark:text-cyan-400">
                        I use π-thon for ML, data analysis and as a backend programming language.
                        It's just adorable.
                    </p>
                </div>
                <div class="card bg-gray-50 border-b-4 rounded-2xl my-4 hover:bg-green-50 hover:border-b-green-600 dark:bg-gray-800 dark:border-gray-800 dark:hover:border-b-green-600">
                    <h2 class="text-2xl text-sky-700 my-4 font-medium tracking-wider dark:text-fuchsia-50">Vue</h2>
                    <i class="fa-brands fa-vuejs text-green-600 text-8xl"></i>
                    <p class="text-gray-700  p-2 my-4 dark:text-cyan-400">
                        This JS front-end framework makes my life easier in developing interactive
                        web applications.
                    </p>
                </div>
                <div class="card bg-gray-50 border-b-4 rounded-xl my-4 hover:bg-yellow-50 hover:border-b-yellow-600 dark:bg-gray-800 dark:border-gray-800 dark:hover:border-b-yellow-600">
                    <h2 class="text-2xl text-sky-700 my-4 font-medium tracking-wider dark:text-fuchsia-50">JavaScript</h2>
                    <i class="fa-brands fa-js text-yellow-500 text-8xl"></i>
                    <p class="text-gray-700 text-center p-2 my-2 dark:text-cyan-400">
                        I just love this language. It makes my web apps alive
                        and interactive to enhance user experience.
                    </p>
                </div>
            </div>
            <hr class=" border-dotted border-t-4 border-indigo-500 w-1/12 mx-auto my-12 dark:border-white"> 
        </div>  
        <div class="mx-8 lg:m-14">
        <h1 class="text-4xl font-bold text-gray-700 my-6 tracking-wider dark:text-white ">Latest projects</h1>
        <div class="grid lg:grid-cols-3 gap-x-10 md:mx-36 mb-4">
            <a @mouseover="showOnHover('one')" @mouseout="one=false" href="https://github.com/kkamal11/Quantified_Self_App_v2.0" target="_blank" id="proj-card" class="block px-2 card1 h-72 bg-gray-100 rounded-xl my-4 hover:bg-yellow-100 dark:bg-gray-800 dark:hover:bg-rose-700" >
                <h2 class="mt-16 text-2xl text-sky-700 font-medium tracking-wider dark:text-fuchsia-50">Quantified Self App</h2>
                <p class="text-sky-700 dark:text-fuchsia-50 text-sm text-center">v2.0 Advanced</p>
                <div class="mt-8 text-gray-700 dark:text-fuchsia-50">
                    <p v-if="!one">
                        An advanced and highly interactive self tracking web app equippped with numerous features.
                        Do visit project section or github for more details.
                    </p>
                    <p v-if="one" class="font-medium">Built using:</p>
                    <p v-if="one" class="">HTML/CSS, JavaScript, Vuejs, Tailwind CSS, Python, Flask, SQLite, Redis, Celery</p>
                    <!--<a v-if="one" href="#" class="p-2 font-medium border-2 rounded-md hover:bg-red-600 hover:text-yellow-500 dark:hover:text-yellow-500">Live Demo</a>-->
                </div>
            </a>

            <a @mouseover="showOnHover('two')" @mouseout="two=false" href="https://github.com/kkamal11/Bike_Sales_Analysis" target="_blank" id="proj-card" class="block px-2 card1 h-72 bg-gray-100 rounded-xl my-4 hover:bg-yellow-100 dark:bg-gray-800 dark:hover:bg-rose-700" >
                <h2 class="mt-16 text-2xl text-sky-700 font-medium my-1 tracking-wider dark:text-fuchsia-50">Bike Sales Analysis</h2>
                <p class="text-sky-700 dark:text-fuchsia-50 text-sm text-center">A data analysis project</p>
                <div class="mt-8 text-gray-700 dark:text-fuchsia-50">
                    <p v-if="!two">An MS Excel project to create a dashboard to demonstrate Bike Sales Analysis. </p>
                    <p v-if="two" class="font-medium">Built using:</p>
                    <p v-if="two">MS Excel</p>
                </div>
            </a>

            <a @mouseover="showOnHover('three')" @mouseout="three=false" href="https://github.com/kkamal11/Quantified-Self-Application" target="_blank"  class="block px-2 card1 h-72 bg-gray-100 rounded-xl my-4 hover:bg-yellow-100 dark:bg-gray-800 dark:hover:bg-rose-700" >
                <h2 class="mt-16 text-2xl text-sky-700 font-medium tracking-wider dark:text-fuchsia-50">Quantified Self App</h2>
                <p class="text-sky-700 dark:text-fuchsia-50 text-sm text-center">v1.0</p>
                <div class="mt-8 text-gray-700 dark:text-fuchsia-50">
                    <p v-if="!three">
                        A secured CRUD application that facilitates users to make trackers, log data
                        and see progress using graphs and charts. More details on github and project section.</p>
                        <p v-if="three" class="font-medium">Built using:</p>
                        <p v-if="three">HTML/CSS, Python, Flask, SQLite</p>
                    <!--<a v-if="three" href="#" class="p-2 font-medium border-2 rounded-md hover:bg-red-600 hover:text-yellow-500 dark:hover:text-yellow-500">Live Demo</a>-->
                </div>
            </a>
        </div>
        <router-link to="/projects" class="px-4 py-2 text-gray-700 font-medium border-2 rounded-md hover:bg-red-600 hover:text-yellow-500 dark:text-white dark:hover:text-yellow-500">See more</router-link>
        <hr class=" border-dotted border-t-4 border-indigo-500 w-1/12 mx-auto my-12 dark:border-white"> 
    </div> 
    </div>`,
    data: function(){
        return {
            one:false,
            two:false,
            three:false,
        }
    },
    methods: {
        showOnHover: function(ind){
            this.one = ind == "one" ? true : false;
            this.two = ind == "two" ? true : false;
            this.three = ind == "three" ? true : false;
        }
    }
}

export default things
