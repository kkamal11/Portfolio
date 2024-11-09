import tag from "./tag.js"
import github_stats from "./github_stats.js"
export default {
    template: `
    <div>
        <div class="flex justify-center items-center">
            <github />
        </div>
        <div class="text-center my-4 p-6 text-gray-700 dark:text-gray-300">
            <p class="uppercase tracking-widest text-xl font-medium">My Projects and Works</p>
        </div>
        <div class="mx-4 md:mx-12 sm:justify-center mb-8">
            <div v-for="(project,index) in projects" class="mb-12 rounded-lg bg-gray-200 dark:bg-gray-800 border-b-2 border-gray-300 dark:border-b-gray-800 hover:border-b-pink-600 dark:hover:border-b-pink-600">
                <div class="text-gray-700 text-center dark:text-gray-300 py-8">
                    <div>
                        <p class="font-bold text-2xl" :class="{'pb-4':!project.id}" >{{ project.title }}</p>
                        <p v-if="project.id" class="text-xs mb-3">{{project.btm_text}}</p>
                        <div v-html="project.ext_button_html" v-if="project.has_ext_button" class="mb-3 text-base text-center"></div>
                    </div>
                    <hr class="border-t-2 border-gray-400" />
                    <div class="py-2 my-2">
                        <tags class="inline-block" v-for="tech in project.techUsed" :key="tech">{{tech}}</tags>
                    </div>
                    <hr class="border-t-2 border-gray-400" />
                </div>
                <div class="grid grid-cols-1 gap-8 md:grid-cols-2 mx-4 md:mx-8">
                    <div v-if="index % 2 === 0" class="flex items-center justify-center">
                        <img class="rounded-lg" :src="project.imgPath">
                    </div>
                    <div>
                        <div class= "max-h-80 overflow-y-auto scroll-smooth text-gray-700 dark:text-white">
                            <p>
                                {{ project.description }}
                                <ul v-if="project.features" class="list-disc">
                                    <li v-for="feature in project.features"><i class="bi bi-arrow-right-short"></i> {{feature}}</li>
                                </ul>
                                <p v-if="project.techUsed.length > 0" class="">
                                    <p class="pt-3 font-bold text-medium dark:text-gray-300">Technologies Used</p>
                                    <ul class="list-disc">
                                        <li v-for="tech in project.techUsed"><i class="bi bi-code-slash text-orange-600"></i> {{tech}}</li>
                                    </ul>
                                </p>
                                <p v-if="project.Database.length > 0" class="py-3 font-bold text-medium  text-gray-700 dark:text-gray-300"">Database: <span class="font-normal text-base dark:text-cyan-400">{{project.Database}}</span></p>
                            </p>
                        </div>
                    </div>
                    <div v-if="index % 2 != 0" class="flex items-center justify-center">
                        <img class="rounded-lg" :src="project.imgPath">
                    </div>
                </div>
                <div class="text-center my-3">
                    <button @click="openLinkToGithub(index)" class="py-2 px-4 my-3 bg-sky-500 text-white rounded hover:bg-sky-600" title="Click to visit the github repository.">Github <i class="bi bi-box-arrow-in-up-right"></i></button>
                    <button @click="openLinkToFork(index)" class="py-2 px-4 my-3 ml-4 bg-gray-500 text-white rounded hover:bg-gray-600" title="Click to fork this project on github.">Fork <i class="fa fa-code-fork" aria-hidden="true"></i></button>
                    <a :href="project.zipDownloadLink" download class="py-2 px-4 my-3 ml-4 bg-orange-500 text-white rounded hover:bg-orange-600" title="Click to download the zipped source code.">Code <i class="bi bi-download"></i></a>
                    <button @click="openContactToDiscuss(index)" class="py-2 px-4 my-3 ml-4 bg-white text-gray-900 rounded hover:bg-gray-100 border-1-green" title="Click to let me know if you want to discuss on this project.">Discuss <i class="bi bi-chat-dots"></i></button>
                </div>
            </div> 
        </div>
        <div class="flex justify-center items-center text-gray-700 dark:text-gray-300">
            <p class="text-xs"><i class="bi bi-list-ol"></i> The projects have been arranged in the order they have been done by me.</p>
        </div>
        <hr class="my-4 border-dotted border-t-4 border-indigo-500 w-1/12 mx-auto  dark:border-white md:my-4">
    </div>`,
    data: function () {
        return {
            projects: [
                {
                    title: "Recipe for Rating: Predict Food Ratings using ML",
                    btm_text: "A Machine Learning Project to Predict Food Ratings for a restaurant",
                    has_ext_button: true,
                    ext_button_html: `
                                    <a class="inline-block" href="https://nbviewer.org/github/kkamal11/Recipe-for-Rating-Predict-Food-Ratings-using-ML/blob/main/21f2000804-notebook-t12024.ipynb" target="_blank">
                                        <img src="https://img.shields.io/badge/Open%20in-Nbviewer-blue" alt="Open in Nbviewer" />
                                    </a>
                                    <a class="inline-block" href="https://github.com/kkamal11/Recipe-for-Rating-Predict-Food-Ratings-using-ML/blob/main/21f2000804-notebook-t12024.ipynb" target="_blank">
                                        <img src="https://img.shields.io/badge/Open%20in-Google%20Colab-blue?logo=googlecolab" alt="Open in Google Colab" />
                                    </a>`,
                    id: true,
                    description: "",
                    techUsed: ["Python", "Numpy", "Pandas", "Seaborn", "Matplotlib", "Scikit-learn"],
                    Database: "",
                    imgPath: "./assets/projects/ml_project.png",
                    link: "https://github.com/kkamal11/Recipe-for-Rating-Predict-Food-Ratings-using-ML",
                    forkLink: "https://github.com/kkamal11/Recipe-for-Rating-Predict-Food-Ratings-using-ML/fork",
                    zipDownloadLink: "https://github.com/kkamal11/Recipe-for-Rating-Predict-Food-Ratings-using-ML/archive/refs/heads/main.zip",
                    features: [
                        "Developed machine learning models to predict food ratings using multiple classification algorithms including LogisticRegression, XGBClassifier, BaggingClassifier, Random Forest",
                        "Preprocessed data using techniques like Label Encoding, StandardScaler, and MinMaxScaler to handle categorical and numerical variables",
                        "Performed dimensionality reduction using Principal Component Analysis (PCA) to improve computational efficiency.",
                        "Fine-tuned models using GridSearchCV to optimize hyperparameters and improve accuracy",
                        "Evaluated model performance with accuracy, F1-score, and confusion matrices",
                        "Visualized results with matplotlib and seaborn to gain insights into model performance and feature importance",
                    ]
                },
                {
                    title: "Uncovering IPL Insights: A Data-Driven Analysis of 15 Years of Cricket",
                    btm_text: "A data analysis and visualization project using Python",
                    id: true,
                    description: "In this project, I have done exploratory data analysis on IPL matches where I have tried to answer a few questions and find some insights using the available data. The dataset that I have used in this notebook is IPL (Indian Premier League) dataset posted on Kaggle Datasets sourced from cricsheet. The dataset has information about IPL matches from 2008 to 2022. The following analysis have been covered in the project:",
                    techUsed: ["Python", "Numpy", "Pandas", "Seaborn", "Matplotlib"],
                    Database: "",
                    imgPath: "./assets/projects/ipl.webp",
                    link: "https://github.com/kkamal11/EDA_on_IPL",
                    forkLink: "https://github.com/kkamal11/EDA_on_IPL/fork",
                    zipDownloadLink: "https://github.com/kkamal11/EDA_on_IPL/archive/refs/heads/main.zip",
                    features: [
                        "Number of matches played till now.",
                        "Number of IPL seasons.",
                        "Number of matches played in each season.",
                        "Maximum and minimum matches in a season.",
                        "Number of matches won by each team.",
                        "Number of finals won by a team.",
                        "Number of stadiums where IPL matches have been conducted.",
                        "Number of matches played in each stadium.",
                        "Top 10 stadiums with maximum matches held.",
                        "Inference and consequences of almost 60% matches being conducted in only 10 stadiums.",
                        "Decision made after winning the toss - bat or field.",
                        "Has Toss - winning helped in Match - winning ?",
                        "Toss decision vs win / loss analysis.",
                        "Top 15 player of the match winners.",
                        "Umpires who have umpired in maximum matches.",
                    ]
                },
                {
                    title: "QuantfiedSelf App",
                    btm_text: "v2.0 Advanced",
                    description: `An advanced and highly interactive self tracking web app equippped with numerous features.
                                There is complete separation of frontend and backend. The backend is API-based having very tight token-based authentication.
                                It is offers the following features: 
                                `,
                    features: ["Perform CRUD operations on trackers and logs.",
                        "Graphical visualization of progress over time.",
                        "Export tracker and log data in the form of pdf and csv files.",
                        "Automated emails every month with monthly pdf report attached.",
                        "Daily reminder on google chat using webhooks.",
                        "Token based authentication and secure login/logout.",
                        "Downloadable summary report in pdf and csv formats for trackers, logs or both together.",
                        "Use of caching to enhace performanc.",
                        "Dark Mode, Responsive and elegant UI across all devices."
                    ],
                    techUsed: ["HTML", "CSS", "JavaScript", "Vuejs", "Tailwind CSS", "Python", "Flask", "Flask-Sqlalchemy", "Flask-Security", "Flask-RESTful", "SQLAlchemy", "Celery", "SQLite", "Redis", "Bash", "Sendgrid", "Weasyprint"],
                    Database: "SQLite, Redis",
                    id: true,
                    link: "https://github.com/kkamal11/Quantified_Self_App_v2.0",
                    forkLink: "https://github.com/kkamal11/Quantified_Self_App_v2.0/fork",
                    zipDownloadLink: "https://github.com/kkamal11/Quantified_Self_App_v2.0/archive/refs/heads/main.zip",
                    imgPath: "./assets/projects/Home.png"
                },
                {
                    title: "Simple ToDo app",
                    description: "A single-page to-do application. It facilitates users to create and delete tasks, mark them as complete or incomplete and filter them based on complete or incomplete status. The tasks are saved in browser's local storage and hence are persistent. It is also equipped with light and dark mode feature.",
                    techUsed: ["HTML", "CSS", "JavaScript", "Vue.js", "Bootstrap"],
                    Database: "",
                    link: "https://kkamal11.github.io/To-Do-application-using-VueJs/",
                    forkLink: "https://github.com/kkamal11/To-Do-application-using-VueJs/fork",
                    zipDownloadLink: "https://github.com/kkamal11/To-Do-application-using-VueJs/archive/refs/heads/main.zip",
                    imgPath: "./assets/projects/ToDo.png"
                },
                {
                    title: "QuantfiedSelf App",
                    btm_text: "v1",
                    description: "A self-tracking web application where users can save and keep track of their activities and tasks. They can create, read, update and delete trackers and logs as per their requirements. Moreover, they can also visualise their progress over time graphically.",
                    techUsed: ["HTML", "CSS", "Python", "Flask", "Flask_sqlalchemy", "minimal JavaScript"],
                    Database: "SQLite",
                    id: true,
                    link: "https://github.com/kkamal11/Quantified-Self-Application",
                    forkLink: "https://github.com/kkamal11/Quantified-Self-Application/fork",
                    zipDownloadLink: "https://github.com/kkamal11/Quantified-Self-Application/archive/refs/heads/main.zip",
                    imgPath: "./assets/projects/qapp1.png"
                },
            ]
        }
    },
    components: {
        'tags': tag,
        'github': github_stats,
    },
    methods: {
        openLinkToGithub: function (index) {
            window.open(this.projects[index].link)
        },
        openLinkToFork: function (index) {
            window.open(this.projects[index].forkLink)
        },
        openLinkToZipDownload: function (index) {
            window.open(this.projects[index].forkLink)
        },
        openContactToDiscuss: function (index) {
            this.$router.push({ path: "/contact", query: { title: this.projects[index].title } })
        }
    }
}
