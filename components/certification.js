export default {
    template: `
    <div class="hidden md:block mt-4 lg:mx-12">
        <H1 class="text-sky-700 text-center dark:text-gray-300 font-bold text-2xl tracking-wider">Certifications</H1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-center">
            <div id="im" v-for="[key,value] in Object.entries(top3Certis)" class="container">
                <img class="image block" :src="value[0]" alt="certificates">
                <div class="overlay bg-neutral-400">
                    <div class="content text-white">
                        <h1 class="text-2xl mb-2 font-medium">{{key}}</h1>
                        <p class="text-justify">{{value[1]}}</p>
                        <a :href="value[2]" class="inline-block py-2 px-4 my-3 bg-sky-600 shadow-lg shadow-blue-800/50 text-white rounded-xl hover:bg-sky-700">Verify Here</a>
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
                        <a :href="value[2]" target="_blank" class="inline-block py-2 px-4 my-3 bg-sky-600 shadow-lg shadow-blue-800/50 text-white rounded-xl hover:bg-sky-700">Verify Here</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center items-center mt-8">
            <button @click="showAll = !showAll" class=" text-center inline-block py-2 px-4 my-3 bg-sky-600 shadow-lg shadow-blue-800/50 text-white rounded-xl hover:bg-sky-700" >
                <span v-if="!showAll">Show More</span>
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
                    'link'
                ],
                'Python - HackerRank': [
                    '../assets/certificates/python-hackerrank.png',
                    'Procured this certficate after passing Python assessment on Hackerrank.',
                    'https://www.hackerrank.com/certificates/91fe50949659'
                ],
                'JavaScript - HackerRank': [
                    '../assets/certificates/javascriptBasic.png',
                    'Procured this certficate after passing JavaScript assessment on Hackerrank.',
                    'https://www.hackerrank.com/certificates/91fe50949659'
                ],
            },
            otherCertis: {
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
                'Python - Coursera': [
                    '../assets/certificates/python.jpg',
                    '',
                    'https://www.coursera.org/account/accomplishments/certificate/GRTRUA3CTGPF'
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
    }
}