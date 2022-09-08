var VueTyper = window.VueTyper.VueTyper
const home = {
    template: `
    <div id="home">
        <div class="dark:text-gray-100 py-20 ">
            <div class="grid justify-items-center sm:text-2xl lg:text-3xl lg:font-medium">
                <p class="hover-underline-animation text-rose-100 rounded-md md:mb-2">"Hello!" I am Kamal.&#128075;</p>
            
                <vue-typer class="hidden italic h-10 lg:block text-center" 
                :text="fullTextArray" :repeat="Infinity"
                erase-style='backspace' :type-delay='100'
                :erase-delay='50' >
                </vue-typer>
               
                <vue-typer class="lg:hidden italic text-center text-gray-100" 
                v-bind:text="smScreenTextArray" :repeat="Infinity"
                erase-style='clear' :type-delay='100'>
                </vue-typer>
            </div>

            <div class="grid justify-items-center text-gray-100 py-10 md:py-16">
                <p class="mx-2 text-center md:mx-0 md:text-xl">I create simple yet elegant, efficient and highly interactive web apps.</p>
                <p class="md:text-xl text-center">I am also equally passionate about data science and ML.</p>
                <div class="grid grid-cols-2 gap-8 pt-3.5 text-lg ">
                    <button v-if="!clickedHiring" class="card1 border-2 p-2 px-4 rounded-lg hover:border-sky-900 hover:underline hover:underline-offset-4 decoration-amber-400">Resume</button>
                    <button v-if="!clickedHiring" v-on:click="showEmail" class="card1 border-2 rounded-lg hover:underline-offset-4 decoration-amber-400 hover:border-sky-900 hover:underline">Hire Me</button>
                    <div v-if="clickedHiring" class="col-span-2 p-2 border-2 rounded-xl hover:border-sky-900 text-white md:text-lg text-center">
                        <span><router-link :to="Contact" class="underline underline-offset-4 hover:decoration-amber-400">Contact Here&nbsp;</router-link>or drop an email at <span class="select-all underline underline-offset-4 hover:decoration-amber-400">kishorkamal7091@gmail.com</span></span>&nbsp;
                        <button @click="cancelPopUp" class="hover:text-red-600 text-2xl"><i class="bi bi-x-lg"></i></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid justify-items-center">
            <i class="bi bi-arrow-down-circle text-3xl text-sky-900 animate-bounce"></i>
        </div>
    </div>`,


    data: function() {
        return {
            Contact: "/contact",
            name: true,
            yellowText: false,
            clickedHiring:false,
            fullTextArray: ["A Python Developer with focus on Flask + Vue.", "An aspiring data professional", "An insatiably curious and lifelong learner....", "Let's connect on LinkedIn."],
            smScreenTextArray:["A Python Developer.", "An aspiring data professional."],
        }
    },
    components:{ 
        VueTyper,
        'vue-typer': VueTyper
    },
    methods: {
        showEmail: function(){
            this.clickedHiring = true;
            this.hiringButtonDisabled = true;
            if(this.clickedHiring){
                setTimeout(() => {
                    this.clickedHiring = false;
                    this.hiringButtonDisabled = false;
                }, 10000);
            }
            
        },
        cancelPopUp: function(){
            this.clickedHiring = false;
        },
    },
}

export default home 
