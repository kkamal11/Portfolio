import tag from "./tag.js"

export default {
    template: `
    <div>
        <div class="mx-6 lg:mx-10 rounded-2xl hover:bg-sky-50 lg:pt-4  shadow-2xl dark:bg-gray-900 dark:hover:bg-gray-900 dark:shadow-sky-800/50 dark:shadow-lg">
            <h2 class="text-sky-600 text-4xl font-extrabold text-center tracking-widest dark:text-white">My Skillset</h2>
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-x-0 gap-y-4 md:mx-56 mt-8 rounded-2xl truncate" >
                <div class="text-center text-gray-50 hover:text-sky-900 rounded-3xl hover:shadow-xl dark:text-gray-900 dark:hover:text-white">
                    <i class="fab fa-python text-blue-900 text-6xl block"></i>
                    <p>Python</p>
                </div>    
                <div class="text-center text-gray-50 hover:text-sky-900 rounded-3xl hover:shadow-xl dark:text-gray-900 dark:hover:text-white">
                    <p class="text-sky-900 text-center text-6xl">SQL</p>
                    <p>SQL</p>
                </div>
                <div class="text-center text-gray-50 hover:text-black rounded-3xl hover:shadow-xl dark:text-gray-900 dark:hover:text-white">
                    <img width="60px" class="mx-auto" src="./assets/flask.png" alt="posgresql logo">
                    <p>Flask</p>
                </div>
                <div class="text-center text-gray-50 hover:text-blue-900 rounded-3xl hover:shadow-xl dark:text-gray-900 dark:hover:text-white">
                    <img width="60px" class="mx-auto" src="./assets/postgreql.png" alt="posgresql logo">
                    <p>PostgreSQL</p>
                </div>
                <div class="text-center text-gray-50 hover:text-orange-700 rounded-3xl hover:shadow-xl dark:text-gray-900 dark:hover:text-white">
                    <i class="fa-brands fa-html5 text-orange-600 text-6xl block"></i>
                   <p> HTML</p>
                </div>
                <div class="text-center text-gray-50 hover:text-cyan-700 rounded-3xl hover:shadow-xl dark:text-gray-900 dark:hover:text-white">
                    <i class="fa-brands fa-css3-alt text-cyan-600 text-6xl block"></i>
                    <p>CSS</p>
                </div>
                <div class=" text-center text-gray-50 hover:text-yellow-600 rounded-3xl hover:shadow-xl dark:text-gray-900 dark:hover:text-white">
                    <i class="fa-brands fa-js text-yellow-500 text-6xl block"></i>
                    <p>JavaScript</p>
                </div>
                <div class="text-center text-gray-50 hover:text-green-700 rounded-3xl hover:shadow-xl dark:text-gray-900 dark:hover:text-white">
                    <i class="fa-brands fa-vuejs text-green-600 text-6xl block"></i>
                    <p>Vue.js</p>
                </div>
                <div class="text-center text-gray-50 hover:text-black rounded-3xl hover:shadow-xl dark:text-gray-900 dark:hover:text-white">
                    <i class="fa-brands fa-linux text-black text-6xl block dark:text-white"></i></i>
                    <p>Linux</p>
                </div>
                <div class="text-center text-gray-50 hover:text-sky-500 rounded-3xl hover:shadow-xl dark:text-gray-900 dark:hover:text-white">
                    <img width="80px" class="mx-auto mt-2" src="./assets/tailwindCss.svg" alt="Tailwind logo">
                    <p>Tailwind CSS</p>
                </div>
                <div class="text-center text-gray-50 hover:text-sky-500 rounded-3xl hover:shadow-xl dark:text-gray-900 dark:hover:text-white">
                    <img width="55px" class="mx-auto mt-2" src="./assets/numpy.svg" alt="Numpy logo">
                    <p>Numpy</p>
                </div>
                <div class="text-center text-gray-50 hover:text-sky-500 rounded-3xl hover:shadow-xl dark:text-gray-900 dark:hover:text-white">
                    <img width="50px" class="mx-auto mt-2" src="./assets/pandas_mark.svg" alt="Pandas logo">
                    <p>Pandas</p>
                </div>
                <div class="text-center text-gray-50 hover:text-green-900 rounded-3xl hover:shadow-xl dark:text-gray-900 dark:hover:text-white">
                    <i class="bi bi-file-earmark-spreadsheet-fill text-green-900 text-6xl block"></i>
                    <p>Spreadsheet-Excel</p>
                </div>
                <div class="text-center text-gray-50 hover:text-red-600 rounded-3xl hover:shadow-xl dark:text-gray-900 dark:hover:text-white">
                    <i class="fa-brands fa-java text-red-600 text-6xl block""></i>
                    <p>Java</p>
                </div>
                <div class="text-center text-gray-50 hover:text-orange-600 rounded-3xl hover:shadow-xl dark:text-gray-900 dark:hover:text-white">
                    <img width="90px" class="mx-auto mt-2" src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" alt="Pandas logo">
                    <p>scikit-learn</p>
                </div>
            </div>
            <div class="py-4 text-center">
                <span class="text-sm dark:text-white font-medium text-gray-700">Other Familiarities :</span>
                <tags v-for="(skill, index) in otherSkills" :key="index" class="inline-block">{{skill}}</tags>
            </div>
        </div>
        <hr class="border-dotted border-t-4 border-sky-600 w-1/12 mx-auto mt-12 mb-8 dark:border-white">    
    </div>`,
    data() {
        return {
            otherSkills: ["git","Streamlit", "Markdown", "Latex", "SQLite", "Redis", "Google Data Studio"]
        }
    },
    components: {
        tags: tag
    },
    methods: {

    },
    mounted() {

    }
}
