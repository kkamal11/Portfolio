import certification from "./certification.js";
export default{
    template:`
    <div>
        <div class="text-center mx-auto p-10">
            <div class="mx-auto w-52 p-0.5  border-4 rounded-full border-cyan-600 dark:border-gray-300 dark:shadow-md dark:shadow-sky-400" >
                <img width="200px" class="mx-auto rounded-full" src="./assets/profile-pic.png" alt="Image">
            </div>
            <h5 class="text-gray-800 mt-4 text-xl font-medium leading-tight dark:text-gray-300">Kamal Kishor Chaurasiya</h5>
        </div>
        <div class="leading-6 text-left text-gray-800 dark:text-gray-300 mx-8 lg:mx-28 xl:mx-48 p-6 rounded-xl shadow-2xl shadow-indigo-400  dark:shadow-blue-800/50 dark:shadow-lg"  @mouseover="highlight" @mouseout="highlightText=false">
                <div class="lg:mx-20 leading-relaxed">
                    <p>
                        Hi, I'm Kamal, a <span :class="{'green-underline':highlightText}">python developer</span> and a <span :class="{'green-underline':highlightText}">data science enthusiast</span> with a
                        keen ineterest in developing elegant, efficient and highly interactive web applications. I am equally passionate about bringing alive the hidden insights of data and discover wonderful
                        solutions to<span :class="{'green-underline':highlightText}"> solve a problem</span>.
                    </p>
                    <p class="mt-4">
                        I started my programming journey with a course in <code :class="{'green-underline':highlightText}">Computational Thinking</code>
                        and sooner picked the skills of <code :class="{'green-underline':highlightText}"> mathematics</code>, <code :class="{'green-underline':highlightText}">statistics</code> and <code :class="{'green-underline':highlightText}">python programming</code>
                        and realized my true calling in the fileds of <code :class="{'green-underline':highlightText}">data science</code>, <code :class="{'green-underline':highlightText}">ML</code> and <code :class="{'green-underline':highlightText}">web application development</code>. Since then I have been tirelessly putting efforts
                        in acquiring the right skills to excel and build something useful in these fields.
                    </p>
                    <p class="mt-4">
                        I am a curious learner, able to pick up new skills as and when required, and like developing expertise in a number of areas.
                        With whatever skills I have been able to learn so far, I believe you and me can build something amazing together.
                        If you believe too, then let us <router-link to="/contact" class="hover:font-bold" :class="{'green-underline':highlightText}">get in touch</router-link>.
                    </p>
                    <p class="my-8 text-xl">Here are a few more things about me &#128071;</p>
                    <div>
                        <div class="hidden md:block">
                            <ul class="flex flex-wrap text-lg font-bold text-center text-red-700">
                                <li class="mx-12" v-for="(topic,index) in aboutDetails">
                                    <button @click="showDetail(index)" :class="showList[index] ? ['text-white','bg-red-600','underline', 'underline-offset-4','decoration-yellow-400','decoration-4'] : []" class="inline-block px-4 pt-2 rounded-t-lg dark:hover:text-white tracking-wider">{{ topic }}</button>
                                </li>
                            </ul>
                        </div>
                        <div class="md:hidden mt-8 mb-4 text-lg font-medium text-red-700">
                            <select v-model="selected" class="p-2 bg-slate-200 rounded-md dark:text-gray-300 dark:bg-gray-700">Select
                                <option v-for="(topic,index) in aboutDetails" :value="topic">{{ topic }}</option>
                            </select>
                        </div> 
                        <div v-if="showList[0]" class="md:mx-12  md:px-4 p-6 bg-red-600 rounded-b-lg">
                            <ul class="text-yellow-400 font-medium">
                                <li class="font-bold tracking-wide underline underline-offset-4">Senior Secondary <i class='fas fa-school' style='font-size:16px;color:yellow'></i></li>
                                <li>MS Memorial Public School</li>
                                <li class="mt-2 font-bold tracking-wide underline underline-offset-4">Undergraduate <i class='fas fa-graduation-cap' style='font-size:16px;color:yellow'></i></li>
                                <li>National Institute of Technology Kurukshetra, <i>B.Tech, 2019-23<span class="text-base font-normal float-right">CGPA: 8.40</span></i></li>
                                <li>Indian Institute of Technology Madras, <i>BS, 2021-2024<span class="text-base font-normal float-right">CGPA: 9.40</span></i></li>
                            </ul>
                        </div>
                        <div v-if="showList[1]" class="md:mx-12 md:px-4 p-6 bg-red-600 rounded-lg font-medium">
                            <ul class="text-yellow-400">
                                <li v-for="skill in mySkills">&#128073; {{ skill }}</li>
                            </ul>
                        </div>
                        <div v-if="showList[2]" class="md:mx-12 md:px-4 p-6 bg-red-600 rounded-md md:text-right font-medium">
                            <ul class="text-yellow-400">
                                <li>Project Intern <i>SCoE, Nit Kurukshetra <span class="text-base font-normal float-right">&nbsp;&nbsp;Jan/22 to May/22</span></i></li>
                                <li>Python Academic Mentor <i>IIT Madras <span class="text-base font-normal float-right">&nbsp;&nbsp;Aug/22 to Sep/22</span></i></li>
                            </ul>
                        </div>
                    </div>
                    <div class="my-8">
                        <p class="font-medium text-2xl">What I am doing now</p>
                        <div>
                            <p class="mt-2">Currently, I am in my final year of engineering, spending my time on</p>
                            <ul class="text-base">
                                <li>&#128073; Looking for opportunity to gain some hands-on experience</li>
                                <li>&#128073; Learning ML</li>
                                <li>&#128073; Working on starting my Blog</li>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
        <hr class=" border-dotted border-t-4 border-sky-600 w-1/12 mx-auto my-10 dark:border-white ">    
        <div class="text-center text-gray-800 dark:text-gray-300 mb-10  lg:block">
            <p class="text-sky-700 dark:text-gray-300 font-bold text-2xl tracking-wider">Areas of Interest</p>
            <div class="flex justify-center items-center my-12">
                <div @click="changeSlide" class="hidden md:flex justify-center items-center h-64 w-64"><i @mouseover="stopSlideOnHover" @mouseout="changeSlideAuto" class="arrow-left bi bi-arrow-left-circle text-5xl hover:cursor-pointer hover:text-green-500"></i></div>

                <div class="card flex justify-center items-center h-64 w-80 bg-gray-400 dark:bg-gray-700 uppercase text-2xl text-white rounded-xl" ><span>{{ slideName }}</span></div>
                
                <div @click="changeSlide" class="hidden md:flex justify-center items-center h-64 w-64"><i @mouseover="stopSlideOnHover" @mouseout="changeSlideAuto" class="arrow-right bi bi-arrow-right-circle text-5xl hover:cursor-pointer hover:text-green-500"></i></div>
            </div>
        </div>
        <hr class=" border-dotted border-t-4 border-sky-600 w-1/12 mx-auto my-10 hidden md:block dark:border-white overflow-hidden">    
        <certificates-comp></certificates-comp>
        <hr class=" border-dotted border-t-4 border-sky-600 w-1/12 mx-auto my-10 hidden md:block dark:border-white overflow-hidden">    
    </div>`,
    data(){
        return {
            mySkills:["Python","SQL","HTML, CSS, JavaScript","Vue.js","Flask","Bash/Shell Scripting","MS Excel","Tailwind CSS"],
            selected: "Education",
            aboutDetails:["Education","Skills","Experience"],
            showList:[true,false,false],
            highlightText:false,
            i : -1,
            intervalID: null,
            slideName: "Python",
            Interests: ["Data Science", "ML", "AI","Data Analytics","App Dev", "Python" ]
        }
    },
    components:{
        'certificates-comp':certification
    },
    methods:{
        changeSlide: function(){
            this.i = (this.i < 100) ? this.i : 0;
            this.i++;
            let ind = this.i % this.Interests.length;
            this.slideName = this.Interests[ind];
        },
        changeSlideAuto: function(){
            this.intervalID = setInterval(() => {
                this.i = (this.i < 100) ? this.i : 0;
                this.i++;
                let ind = this.i % this.Interests.length;
                this.slideName = this.Interests[ind];
            }, 1000);
        },
        stopSlideOnHover: function(){
            clearInterval(this.intervalID)
        },
        highlight: function(){
            this.highlightText = true;
        },
        showDetail: function(index){
            for(let i = 0; i<3;i++){
                this.showList[i] = (index != i) ? false : true;
                this.selected = this.aboutDetails[index];
            }
        },
    },
    watch:{
        selected: function(newval,oldval){
            this.showList[this.aboutDetails.indexOf(oldval)] = false;
            this.showList[this.aboutDetails.indexOf(newval)] = true;
        }
    },
    mounted(){
        this.changeSlideAuto()
    },
    beforeDestroy () {
        clearInterval(this.intervalID) //to prevent memory leaks that setInterval() method can cause
    }
}
