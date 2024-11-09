import certification from "./certification.js";
import about from "./about.js";
import education from "./education.js";
import experience from "./experience.js";
export default {
    template: `
    <div>
        <div v-if="!showPopUp" class="grid grid-cols-1 md:grid-cols-2 mx-12 sm:px-16 mt-4">
            <div id="Photo" class="grid items-center justify-center">
                <div class="py-10 md:pt-32 text-center text-gray-800 dark:text-gray-300">
                    <p class= "font-semibold text-3xl uppercase">Kamal Kishor Chaurasiya</p>
                    <p class="text-xl py-1">Associate Consultant at <span class="text-red-600 font-bold text-xl">Oracle</span></p>
                    <div class="pt-8 text-lg">
                        <p class="font-semibold">
                            <span class="hover:underline underline-offset-4 hover:text-green-600"><a href="https://github.com/kkamal11" target="_blank">Github <i class="bi bi-github"></i></a></span> | 
                            <span class="hover:underline underline-offset-4 hover:text-green-600"><a href="https://www.linkedin.com/in/kamal-kishor-chaurasiya-a22866192" target="_blank">LinkedIn <i class="bi bi-linkedin"></i></a></span> | 
                            <span class="hover:underline underline-offset-4 hover:text-green-600"><a href="mailto:reachmeviamaill@gmail.com">Gmail <i class="bi bi-google"></i></a></span>
                        </p>
                        <p @click="showMoreDetailPopUp" class="btn-box-shadow mx-6 sm:mx-0 bg-sky-600 p-3 uppercase my-4 text-white font-medium hover:bg-sky-700 cursor-pointer">Read more...</p>
                    </div>
                </div>
            </div>
            <div id="name" class="grid items-center justify-center">
                <div class="p-16 mt-8">
                    <!-- <img width="300px" src="../assets/im/profile.jpg" alt="image" class="rounded-3xl sm:mt-8" />-->
                   <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_9e8yoqkm.json"  background="transparent"  speed="1"  style="width: 350px; height: 350px;"  loop autoplay></lottie-player>
                </div>
            </div>
        </div>
        <about v-if="showPopUp" @cancelPopUp="showMoreDetailPopUp" class=""></about>
        <hr class=" border-dotted border-t-4 border-sky-600 w-1/12 mx-auto my-10 hidden md:block dark:border-white overflow-hidden">
        <div class="text-center text-gray-700 dark:text-white">
            <h1 class="text-4xl font-bold my-6 tracking-wider">Experience</h1>
            <experience-comp></experience-comp>
        </div>
        <hr class=" border-dotted border-t-4 border-sky-600 w-1/12 mx-auto my-10 hidden md:block dark:border-white overflow-hidden">    
        <div class="text-center text-gray-700 dark:text-white">
            <h1 class="mb-6 text-4xl font-bold  my-6 tracking-wider">Skills</h1>
            <div class="grid sm:grid-cols-3 border-1 rounded-md mx-6 sm:mx-12">
                <div class="divide-x-1 p-4 hover:bg-slate-50 dark:hover:bg-gray-800">
                    <div class="mx-auto w-52 my-3 h-24 rounded-full" >
                        <img width="100px" class="mx-auto rounded-full" src="./assets/im/ml.jpg" alt="Image">
                    </div>
                    <h2 class="text-3xl font-semibold mb-6 text-gray-900 dark:text-white animate-character">Data Science & ML</h2>
                    <div>
                    <p class="my-4">Some text text</p>
                    <div class="sky-text">
                        <ul>
                            <li>MS Excel</li>
                            <li>SQL</li>
                            <li>Python</li>
                            <li>NumPy</li>
                            <li>Pandas</li>
                            <li>Matplotlib</li>
                            <li>Seaborn</li>
                            <li>Scikit-learn</li>
                            <li>Streamlit</li>
                            <li>
                                <details>
                                    <summary>Others :</summary>
                                    <ul>
                                        <li>SciPy</li>
                                        <li>PyCaret</li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div class="divide-x-1 p-4 hover:bg-slate-50 dark:hover:bg-gray-800">
                    <div class="mx-auto w-52 my-3 h-24 rounded-full" >
                        <img width="100px" class="mx-auto rounded-full" src="./assets/im/web.jpg" alt="Image">
                    </div>
                    <h2 class="text-3xl font-semibold mb-6 text-gray-900 dark:text-white animate-character">&lt;Web Development/&gt;</h2>
                    <div>
                        <p class="my-4">Some text</p>
                        <div class="sky-text">
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Tailwind CSS</li>
                                <li>JavaScript</li>
                                <li>VueJs</li>
                                <li>Python</li>
                                <li>Flask</li>
                                <li>SQL</li>
                                <li>
                                    <details>
                                        <summary>Others :</summary>
                                        <ul>
                                            <li>Flask-Security</li>
                                            <li>Flask-RESTful</li>
                                            <li>Flask-SQLAlchemy</li>
                                            <li>Weasyprint</li>
                                            <li>ChartJs</li>
                                        </ul>
                                    </details>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="p-4 hover:bg-slate-50 dark:hover:bg-gray-800">
                    <div class="mx-auto w-52 my-3 h-24 rounded-full" >
                        <img width="95px" class="mx-auto rounded-full" src="./assets/im/other.jpg" alt="Image">
                    </div>
                    <h2 class="text-3xl font-semibold mb-6 text-gray-900 dark:text-white"><span class="animate-character">Some More...</span>&#128521;</h2>
                    <div>
                    <p class="my-4">Some random other text</p>
                    <div class="sky-text">
                        <ul>
                            <li>Java</li>
                            <li>Linux</li>
                            <li>Tableau</li>
                            <li>SQLite</li>
                            <li>Redis</li>
                            <li>Celery</li>
                            <li>
                                <details>
                                <summary>Others :</summary>
                                <ul>
                                    <li></li>
                                    <li></li>
                                </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <hr class=" border-dotted border-t-4 border-sky-600 w-1/12 mx-auto my-10 hidden md:block dark:border-white overflow-hidden">    
        <div>
            <div class="text-center text-4xl font-bold text-gray-700 my-6 tracking-wider dark:text-white mb-10">Education</div>
            <education></education>
        </div>
        <hr class=" border-dotted border-t-4 border-sky-600 w-1/12 mx-auto my-10 hidden md:block dark:border-white overflow-hidden"> 
        <certificates-comp></certificates-comp>   
        <hr class=" border-dotted border-t-4 border-sky-600 w-1/12 mx-auto my-10 hidden md:block dark:border-white overflow-hidden"> 
    </div>`,
    data() {
        return {
            showPopUp: false,
            mySkills: ["Python", "SQL", "Java", "HTML, CSS, JavaScript", "Vue.js", "Flask", "Bash/Shell Scripting", "MS Excel", "Tailwind CSS"],
            selected: "Education",
            aboutDetails: ["Education", "Skills", "Experience"],
            showList: [true, false, false],
            highlightText: false,
            i: -1,
            intervalID: null,
            slideName: "Python",
            Interests: ["Data Science", "ML", "AI", "Data Analytics", "App Dev", "Python"]
        }
    },
    components: {
        'certificates-comp': certification,
        'about': about,
        'education': education,
        'experience-comp': experience,
    },
    methods: {
        changeSlide: function () {
            this.i = (this.i < 100) ? this.i : 0;
            this.i++;
            let ind = this.i % this.Interests.length;
            this.slideName = this.Interests[ind];
        },
        changeSlideAuto: function () {
            this.intervalID = setInterval(() => {
                this.i = (this.i < 100) ? this.i : 0;
                this.i++;
                let ind = this.i % this.Interests.length;
                this.slideName = this.Interests[ind];
            }, 1000);
        },
        stopSlideOnHover: function () {
            clearInterval(this.intervalID)
        },
        highlight: function () {
            this.highlightText = true;
        },
        showDetail: function (index) {
            for (let i = 0; i < 3; i++) {
                this.showList[i] = (index != i) ? false : true;
                this.selected = this.aboutDetails[index];
            }
        },
        showMoreDetailPopUp: function () {
            this.showPopUp = !this.showPopUp;
        }
    },
    watch: {
        selected: function (newval, oldval) {
            this.showList[this.aboutDetails.indexOf(oldval)] = false;
            this.showList[this.aboutDetails.indexOf(newval)] = true;
        }
    },
    mounted() {
        this.changeSlideAuto()
    },
    beforeDestroy() {
        clearInterval(this.intervalID) //to prevent memory leaks that setInterval() method can cause
    }
}
