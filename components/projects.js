export default{
    template:`
    <div>
        <div class="text-center my-4 p-6  text-gray-700 dark:text-gray-300">
            <p class="uppercase tracking-widest text-xl font-medium">My Projects and Works</p>
        </div>
        <div class="grid m-4 gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:justify-center mb-8">
            <div v-for="(project,index) in projects" class="card rounded-t-3xl bg-gray-300 dark:bg-gray-800 border-b-2 border-gray-300 dark:border-b-gray-800 hover:border-b-pink-600 dark:hover:border-b-pink-600">
                <div class="px-6" >
                    <img class="image rounded-lg" :src="project.imgPath">
                    <div class=" text-gray-700 dark:text-gray-300">
                        <p class="inline-block py-3 font-bold text-2xl" >{{ project.title }}</p>
                        <span v-if="project.id" class="text-sm">{{project.btm_text}}</span>
                    </div>
                    <div class= "max-h-80 overflow-y-auto scroll-smooth text-gray-700 dark:text-cyan-400">
                        <p>
                            {{ project.description }}
                            <ul v-if="project.features" class="list-disc">
                                <li v-for="feature in project.features"><i class="bi bi-arrow-right-short"></i> {{feature}}</li>
                            </ul>
                            <p v-if="project.techUsed.length > 0" class="">
                                <p class="pt-3 font-bold text-medium dark:text-gray-300">Technologies Used</p>
                                <ul >
                                    <li v-for="tech in project.techUsed">{{tech}}</li>
                                </ul>
                            </p>
                            <p v-if="project.Database.length > 0" class="py-3 font-bold text-medium  text-gray-700 dark:text-gray-300"">Database: <span class="font-normal text-base dark:text-cyan-400">{{project.Database}}</span></p>
                        </p>
                    </div>
                    <button @click="openLinkToGithub(index)" class="p-2 my-3 bg-sky-600 shadow-lg shadow-blue-800/50 text-white rounded-xl hover:bg-sky-700">Github link <i class="bi bi-box-arrow-in-up-right"></i></button>
                </div>
            </div> 
        </div>
        <hr class="my-4 border-dotted border-t-4 border-indigo-500 w-1/12 mx-auto  dark:border-white md:my-4">
    </div>`,
    data: function(){
        return {
            projects :[
                {
                    title:"QuantfiedSelf App",
                    btm_text:"v2.0 Advanced",
                    description:`An advanced and highly interactive self tracking web app equippped with numerous features.
                                There is complete separation of frontend and backend. The backend is API-based having very tight token-based authentication.
                                It is offers the following features: 
                                `,
                    features:["Perform CRUD operations on trackers and logs.",
                            "Graphical representation of progress over time",
                            "Export tracker and log data in the form of pdf and csv files",
                            "Automated emails every month with monthly pdf report attached.",
                            "Daily reminder on google chat using webhooks",
                            "Tight and secure frontend and backend security."   
                            ],
                    techUsed: ["HTML/CSS", "JavaScript", "Vuejs", "Tailwind CSS", "Python", "Flask", "Celery","Redis","Bash"],
                    Database: "SQLite, Redis",
                    id:true,
                    link:"https://github.com/kkamal11/Quantified_Self_App_v2.0",
                    imgPath:"./assets/projects/Home.png"
                },
                {
                    title:"Bike Sales Analysis",
                    description:"A simple MS Excel project to create a dashboard to demonstrate Bike Sales Analysis. The data was first cleaned by making some correction and removing duplicates. The dashboard was then created by organizing data into pivot tables.",
                    techUsed: ["MS Excel"],
                    Database: "",
                    link:"https://github.com/kkamal11/Bike_Sales_Analysis"
                },
                {
                    title:"QuantfiedSelf App",
                    description:"A self-tracking web application where users can save and keep track of their activities and tasks. They can create, read, update and delete trackers and logs as per their requirements. Moreover, they can also visualise their progress over time graphically.",
                    techUsed: ["HTML", "CSS", "Python with Flask", "Flask_sqlalchemy", "minimal JavaScript"],
                    Database: "SQLite",
                    link:"https://github.com/kkamal11/Quantified-Self-Application",
                    imgPath:"./assets/projects/qapp1.png"
                },
                {
                    title:"Simple ToDo app",
                    description:"A single-page to-do application. It facilitates users to create and delete tasks, mark them as complete or incomplete and filter them based on complete or incomplete status. The tasks are saved in browser's local storage and hence are persistent. It is also equipped with light and dark mode feature.",
                    techUsed: ["HTML", "CSS", "JavaScript", "Vue.js","Bootstrap"],
                    Database: "",
                    link:"https://kkamal11.github.io/To-Do-application-using-VueJs/",
                    imgPath:"./assets/projects/ToDo.png"
                },
            ]
        }
    },
    methods:{
        openLinkToGithub: function(index){
            window.open(this.projects[index].link)
        }
    }
    
}
