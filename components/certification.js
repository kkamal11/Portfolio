export default {
    template: `
    <div class="hidden md:block mt-4 py-4 lg:px-12 bg-black">
        <h1 id="certis" class="text-white text-center dark:text-gray-300 font-bold text-4xl tracking-wider my-4">Certifications</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-center">
            <div id="im" v-for="[key,value] in Object.entries(top3Certis)" class="container">
                <img class="image block" :src="value[0]" alt="certificates">
                <div class="overlay bg-neutral-400">
                    <div class="content text-white">
                        <h1 class="text-2xl mb-2 font-medium">{{key}}</h1>
                        <p class="text-justify">{{value[1]}}</p>
                        <a :href="value[2]" target="_blank" class="inline-block py-2 px-4 my-3 bg-sky-600 shadow-lg shadow-blue-800/50 text-white hover:bg-green-600">Verify Here</a>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="showAll" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-center">
            <div id="im" v-for="[key,value] in Object.entries(otherCertis)" class="container">
                <img class="image block" :src="value[0]" alt="certificates">
                <div class="overlay bg-neutral-400">
                    <div class="content text-white">
                        <h1 class="text-2xl mb-2 font-medium">{{key}}</h1>
                        <p class="">
                            {{value[1]}}
                        </p>
                        <a :href="value[2]" target="_blank" class="inline-block py-2 px-4 my-3 bg-sky-600 shadow-lg shadow-blue-800/50 text-white hover:bg-green-600">Verify Here</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center items-center mt-8">
            <button @click="showAll = !showAll" class="py-2 px-4 my-3 bg-sky-500 text-white rounded hover:bg-sky-600">
                <span v-if="!showAll">Show {{ certiCount }} More</span>
                <span v-if="showAll">Show Less</span>
            </button>
        </div>
    </div>`,
    data: function () {
        return {
            showAll:false,
            top3Certis:{
                'Foundational level - IIT Madras': [
                    '../assets/certificates/foundationCerti.jpg',
                    'Procured this certficate after completing courses in Mathematics, Statistics and Python Programming.',
                    'https://drive.google.com/file/d/1w356baxF4SRiI19rEp2nrBZQcbvSqIi_/view?usp=sharing'
                ],
                'Python Mentor - IIT Madras': [
                    '../assets/certificates/python_mentor.png',
                    'Mentored and taught learners about writing codes in Python and solving problems.',
                    'https://drive.google.com/file/d/1Aw5mT9MAodEQlPI46dwiZm5-2VRXOx9C/view?usp=sharing'
                ],
                'JavaScript - HackerRank': [
                    '../assets/certificates/javascriptBasic.png',
                    'Procured this certficate after passing JavaScript assessment on Hackerrank.',
                    'https://www.hackerrank.com/certificates/91fe50949659'
                ],
            },
            otherCertis: {
                'MLT - IIT Madras': [
                    '../assets/certificates/mlt.png',
                    'Procured this certficate after completing online proctored exam of Machine Learning Technique(MLT) course wherein I coded ML algorithms from scratch using Python & Numpy.',
                    'https://drive.google.com/file/d/1bETv_1qU0fbrzOBLphXrWhC3kQ0wxs95/view?usp=share_link'
                ],
                'Python - HackerRank': [
                    '../assets/certificates/python-hackerrank.png',
                    'Procured this certficate after passing Python assessment on Hackerrank.',
                    'https://www.hackerrank.com/certificates/91fe50949659'
                ],
                'SQL - HackerRank': [
                    '../assets/certificates/sqlpng.png',
                    'Procured this certficate after passing JavaScript assessment on Hackerrank.',
                    'https://www.hackerrank.com/certificates/745729a3c6ab'
                ],
                'Microsoft Excel - Udemy': [
                    '../assets/certificates/excel.jpg',
                    '',
                    'https://www.udemy.com/certificate/UC-0f061dc1-69f0-418b-adba-d97c1b336df2/'
                ],
                'Optimization: Theory and Algorithms. - NPTEL': [
                    '../assets/certificates/nptel.jpg',
                    '',
                    'https://drive.google.com/file/d/1ZyW5lBjAwRQNz6h6VFCeuvo2FKzU_IG3/view?usp=sharing'
                ],
                'Python - Coursera': [
                    '../assets/certificates/python.jpg',
                    '',
                    'https://www.coursera.org/account/accomplishments/certificate/GRTRUA3CTGPF'
                ],
                'HTML, CSS and Javascript - Coursera': [
                    '../assets/certificates/HTML_CSS_JS.png',
                    '',
                    'https://coursera.org/share/3701054983df9cf78ea37bcc1a1a051c'
                ],
                'Linux Commands & Shell Scripting - Coursera': [
                    '../assets/certificates/linux.png',
                    '',
                    'https://coursera.org/share/a1f0fee03f7eb40117971151c4d84114'
                ],
                
            }
        }
    },
    methods: {
        showFull: function (index) {
            if (index > 3) {
                return false
            }
        }
    },
    computed:{
            certiCount: function(){
                return Object.keys(this.otherCertis).length;
            }
        }
}
