const footer = {
    template: `
    <div>
        <footer class="clear-both p-4 bg-white sm:p-6 dark:bg-gray-900">
            <div class="flex items-center justify-center">
                <div class="mt-8 md:px-36 sm:px-14">
                    <a href="https://github.com/kkamal11" class="hover:text-gray-500 inline-block mr-6" target="_blank"><i class="bi bi-github" style="font-size:40px"></i></a>
                    <a href="https://www.linkedin.com/in/kamal-kishor-chaurasiya-a22866192" class=" hover:text-blue-600 inline-block mr-6 text-blue-700" target="_blank"><i class="bi bi-linkedin" style="font-size:40px"></i></a>
                    <a href="mailto:reachmeviamaill@gmail.com" class="hover:text-red-500 inline-block mr-6 text-red-600"><i class="bi bi-google" style="font-size:40px"></i></a>
                    <a href="https://instagram.com/kkamal3?igshid=ZDdkNTZiNTM=" class="hover:text-pink-700 inline-block text-pink-600" target="_blank"><i class="bi bi-instagram" style="font-size:40px"></i></a>
                </div>
            </div>
            <div class="flex items-center justify-center">
                <div class="mt-2 mb-8 md:px-36 sm:px-14 text-gray-700 grid md:grid-cols-3 gap-2">
                    <div class="bg-green-600 px-2 py-1 font-semibold text-white rounded-sm hover:bg-green-700 text-center">
                        <a href="https://www.hackerrank.com/kishorkamal7091" class="inline-block" target="_blank"><img src="../assets/hackerrank.png" alt="image" class="logo" />Hackerrank</a>
                    </div>
                    <div class="bg-gray-600 px-2 py-1 font-semibold text-white rounded-sm hover:bg-gray-700 text-center">
                        <a href="https://www.codechef.com/users/kamalk1" class="inline-block" target="_blank"><img src="../assets/codechef.png" alt="image" class="logo" />CodeChef</a>
                    </div>
                    <div class="bg-gray-100 px-2 py-1 font-semibold text-white rounded-sm hover:bg-gray-200 text-center">
                        <a href="#" class="inline-block text-sky-400" target="_blank"><img src="../assets/kaggle.png" alt="image" class="logo" />Kaggle</a>
                    </div>
                </div>
            </div>
            <hr class="mb-4 border-gray-300 sm:mx-auto dark:border-gray-700 " >
            <div class="grid sm:grid-cols-3 items-center">
                <div class="mb-8 sm:mb-0 md:mx-auto text-sm text-gray-500 text-center dark:text-gray-400">
                    <p>Last Update: Jan, 2023</p>
                    <div class="my-2">
                        <img src="https://visitcount.itsvg.in/api?id=kkamal11&label=Profile%20Views&color=6&icon=0&pretty=true" />
                    </div>
                </div>
                <div class="mb-8 sm:mb-0 md:mx-auto text-sm text-gray-500 text-center dark:text-gray-400">&copy; 2023 Kamal Kishor Chaurasiya</div>
                <div>
                    <p v-for="[key,value] in Object.entries(links)" class="md:mx-auto text-sm text-gray-500 text-center hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"><router-link :to="value" class="hover:underline underline-offset-2 hover:cursor-pointer">{{ key }}</router-link></p>
                </div>
            </div>
        </footer>
    </div>`,
    data() {
        return {
            links: {
                "Home": "/",
                "Projects": "/projects",
                "About": "/about",
                "Contact": "/contact",
            },
        }
    }
};

export default footer;
