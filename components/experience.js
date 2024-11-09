export default {
    template: `
    <div class="text-left mx-6 sm:mx-40">
        <div class="mt-8 border-1 p-4 border-corner-top">
            <div class="text-xl font-semibold uppercase">Work</div>
            <div id="ora-work">
                <div class="flex flex-row justify-between">
                    <p class="text-lg py-1">1. Associate Consultant at <span class="text-red-600 font-bold text-xl">Oracle</p>
                    <p class="text-sm italic">Pune, <span class="">August 2023-Present</span></p>
                </div>
                <div class="ml-8">
                    <p> &gt; Developed and enhanced features for enterprise-level applications using Python, Java, JavaScript, Spring Boot, microservices, and REST APIs to improve project efficiency by 20% and streamline operations for their banking software Flexcube</p>
                    <p> &gt; Collaborated with cross-functional teams to implement database solutions, including optimizing SQL queries, stored procedures, and triggers resulting in a 30% improvement in query performance and 20% reduction in database downtime</p>
                    <p> &gt; Conducted thorough testing and debugging of applications ensuring full uptime and seamless deployment in production environments</p>
                </div>
            </div>
        </div>
        <div class="border-1 p-4 border-corner-btm">
            <div class="text-xl font-semibold uppercase">Internships</div>
            <div>
                <h2 class="">1. NIT Kurukshetra <span class="rounded-xl px-2 py-0.5 bg-green-600 inline-block text-xs text-white hover:bg-green-700"><a href="https://drive.google.com/drive/folders/1kDsg4LAK-E0AjJiJkKs0PYQSMg0izDc5" target="_blank">verify</a></span></h2>
                <div class="ml-8">
                    <p> &gt; Project Intern</p>
                    <p> &gt; January 2022 - May 2022</p>
                </div>
                <h2 class="">2. IIT Madras <span class="rounded-xl px-2 py-0.5 bg-green-600 inline-block text-xs text-white hover:bg-green-700"><a href="https://drive.google.com/file/d/1Aw5mT9MAodEQlPI46dwiZm5-2VRXOx9C/view?usp=sharing" target="_blank">verify</a></span></h2>
                <div class="ml-8">
                    <p> &gt; Python Academic Mentor</p>
                    <p> &gt; August 2022 - September 2022</p>
                </div>
                <h2 class="">3. IIT Madras <span class="rounded-xl px-2 py-0.5 bg-green-600 inline-block text-xs text-white hover:bg-green-700"><a href="https://drive.google.com/drive/folders/1kDsg4LAK-E0AjJiJkKs0PYQSMg0izDc5" target="_blank">verify</a></span></h2>
                <div class="ml-8">
                    <p> &gt; Teaching Assistant, Machine Learning Foundation Course</p>
                    <p> &gt; September 2022 - December 2022</p>
                </div>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            showWorkDone: false
        }
    },
    methods: {
        toggleShowWorkDone: function () {
            this.showWorkDone = !this.showWorkDone;
        }
    }
}