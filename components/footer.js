const footer = {
    template: `
    <div>
        <footer class="clear-both p-4 bg-white sm:p-6 dark:bg-gray-900">
            <div class="flex items-center justify-center">
                <div class="my-8 md:px-36 sm:px-14 text-gray-700">
                    <a href="https://github.com/kkamal11" class="hover:text-cyan-500 inline-block mr-6" target="_blank"><i class="bi bi-github" style="font-size:30px"></i></a>
                    <a href="https://www.linkedin.com/in/kamal-kishor-chaurasiya-a22866192" class=" hover:text-cyan-500 inline-block mr-6" target="_blank"><i class="bi bi-linkedin" style="font-size:30px"></i></a>
                    <a href="mailto:reachmeviamaill@gmail.com" class="hover:text-cyan-500 inline-block mr-6"><i class="bi bi-google" style="font-size:30px"></i></a>
                    <a href="https://instagram.com/kkamal3?igshid=ZDdkNTZiNTM=" class="hover:text-cyan-500 inline-block" target="_blank"><i class="bi bi-instagram" style="font-size:30px"></i></a>
                </div>
            </div>
            <hr class="mb-4 border-gray-300 sm:mx-auto dark:border-gray-700 " >
            <div class="grid sm:grid-cols-3 items-center">
                <div class="mb-8 sm:mb-0 md:mx-auto text-sm text-gray-500 text-center dark:text-gray-400">Last Update: Jan, 2023</div>
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
