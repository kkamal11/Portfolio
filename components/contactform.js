const form = {
    template: `
    <div>
    <svg class="dark:hidden" id="wave" style="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(11.647, 137.162, 201.851, 1)" offset="0%"></stop><stop stop-color="rgba(10.349, 138.625, 198.816, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,20L120,28.3C240,37,480,53,720,61.7C960,70,1200,70,1440,58.3C1680,47,1920,23,2160,25C2400,27,2640,53,2880,58.3C3120,63,3360,47,3600,48.3C3840,50,4080,70,4320,75C4560,80,4800,70,5040,61.7C5280,53,5520,47,5760,50C6000,53,6240,67,6480,75C6720,83,6960,87,7200,86.7C7440,87,7680,83,7920,68.3C8160,53,8400,27,8640,25C8880,23,9120,47,9360,58.3C9600,70,9840,70,10080,58.3C10320,47,10560,23,10800,13.3C11040,3,11280,7,11520,11.7C11760,17,12000,23,12240,31.7C12480,40,12720,50,12960,51.7C13200,53,13440,47,13680,51.7C13920,57,14160,73,14400,81.7C14640,90,14880,90,15120,90C15360,90,15600,90,15840,83.3C16080,77,16320,63,16560,61.7C16800,60,17040,70,17160,75L17280,80L17280,100L17160,100C17040,100,16800,100,16560,100C16320,100,16080,100,15840,100C15600,100,15360,100,15120,100C14880,100,14640,100,14400,100C14160,100,13920,100,13680,100C13440,100,13200,100,12960,100C12720,100,12480,100,12240,100C12000,100,11760,100,11520,100C11280,100,11040,100,10800,100C10560,100,10320,100,10080,100C9840,100,9600,100,9360,100C9120,100,8880,100,8640,100C8400,100,8160,100,7920,100C7680,100,7440,100,7200,100C6960,100,6720,100,6480,100C6240,100,6000,100,5760,100C5520,100,5280,100,5040,100C4800,100,4560,100,4320,100C4080,100,3840,100,3600,100C3360,100,3120,100,2880,100C2640,100,2400,100,2160,100C1920,100,1680,100,1440,100C1200,100,960,100,720,100C480,100,240,100,120,100L0,100Z"></path></svg>
        <div v-if="rc"  class="grid lg:grid-cols-2 bg-gradient-to-b from-sky-600 to-white ">
            <div class=" text-center dark:bg-gray-900" >
                <h2 class="text-2xl font-medium text-gray-700 my-4 dark:text-gray-300"><span :class="{'text-white':isTyping}" >Send Me a Messsage</span></h2>
                <p class="sm:text-left mx-8 md:mx-28 mb-2 text-gray-700 dark:text-gray-300 font-medium"><span :class="{'text-white':isTyping}">Dropping a line to say hi, ask for my resume or see if we can build something together? I'd love to hear from you!</span></p>
                <form name='submit-to-google-sheet'>
                    <div class="sm:text-left mx-8 md:mx-28">
                        <div class="mb-6">
                            <label for="name" class="block mb-2 text-base font-medium text-gray-700 dark:text-gray-300">Your name <i v-if="showCorrectNameTick" class="bi bi-check2-circle text-xl text-white"></i> </label>
                            <input v-model="userName" name="Name" type="text" id="name" class="outline-sky-800 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-600 dark:focus:border-sky-600" placeholder="Enter your name here.">
                            <p v-if="nameWarning.length > 0" class="bg-red-400 mt-2 p-2 rounded-xl text-white">{{nameWarning}}<button v-on:click="cancelPopUp" class="float-right text-xl mr-2 font-bold hover:text-red-800 "><i class="bi bi-x-lg"></i></button></p>
                        </div>
                        <div class="mb-6">
                            <label for="email" class="block mb-2 text-base font-medium text-gray-700 dark:text-gray-300">Your email* <i v-if="showCorrectEmailTick" class="bi bi-check2-circle text-xl text-white"></i> </label>
                            <input v-model="email" name="Email" type="email" id="email" class="outline-sky-800 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-600 dark:focus:border-sky-600" placeholder="example@email.com" required>
                            <p v-if="emailwarning.length > 0" class="bg-red-400 mt-2 p-2 rounded-xl text-white">{{emailwarning}}<button v-on:click="cancelPopUp" class="float-right text-xl mr-2 font-bold hover:text-red-800 "><i class="bi bi-x-lg"></i></button></p>
                        </div>
                        <div class="mb-4">
                            <label for="message" class="block mb-2 text-base font-medium text-gray-700 dark:text-gray-300">Your message* <i v-if="showCorrectMessageTick" class="bi bi-check2-circle text-xl text-white"></i></label>
                            <textarea v-model="message" name="Message" id="message" rows="4" class="outline-sky-800 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-sky-600 focus:border-sky-500 resize rounded-md caret-indigo-800 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-600 dark:focus:border-sky-600" placeholder="Leave a message here..."></textarea>
                            <p v-if="textwarning.length > 0" class="bg-red-400 mt-2 p-2 rounded-xl text-white" >{{textwarning}}<button v-on:click="cancelPopUp" class="float-right text-xl mr-2 font-bold hover:text-red-800"><i class="bi bi-x-lg"></i></button></p>
                        </div>
                        <p v-if="showThankYouMsg && !messageBeingSent && !showErrorMessage" class="bg-red-600 mt-2 p-2 rounded-xl text-white"> Thank You For Getting In Touch.<button v-on:click="cancelPopUp" class="float-right text-xl mr-2 font-bold hover:text-red-800"><i class="bi bi-x-lg"></i></button></p>
                        <button v-on:click="submitMessage" v-if="!messageBeingSent && !showNewMessage && !showErrorMessage" :disabled="submitButtonDisabled" id="btn" class="p-2 my-3 bg-sky-600 shadow-lg shadow-sky-800/50 text-white rounded-xl"  :class="{'hover:bg-sky-800': !submitButtonDisabled, 'cursor-not-allowed': submitButtonDisabled }">Send... <i class="bi bi-chat-left-heart"></i></button>
                        <button v-if="showNewMessage && !messageBeingSent && !showErrorMessage" disabled class="green p-2 my-3 shadow-lg shadow-sky-800/50 text-white rounded-xl"  :class="{'cursor-not-allowed': submitButtonDisabled }">Message sent successfully. ✔</button>
                        <button v-if="showErrorMessage" disabled class="bg-red-700 p-2 my-3 shadow-lg shadow-sky-800/50 text-white rounded-xl"  :class="{'cursor-not-allowed': submitButtonDisabled }">Oops... An error occured.</button>
                        <button v-if="showNewMessage || showErrorMessage" v-on:click="reload" id="btn2" class="p-2 my-3 bg-yellow-400 shadow-lg shadow-sky-800/50 text-white rounded-xl hover:bg-yellow-600">Send Another <i class="bi bi-chat-left-heart"></i></button>
                        <div v-if="messageBeingSent" class="loader"></div>
                    </div>
                </form>
            </div>
            <div class=" text-center dark:bg-gray-900" >
                <h2 class="text-2xl font-medium text-center text-gray-700 mt-10 md:mt-40 dark:text-gray-300"><span :class="{'text-white': goToLinkedIn }">Or we can get in touch via LinkedIn</span></h2>
                <div class="text-center mb-16 md:mx-16 mt-16" >
                    <a href="https://www.linkedin.com/in/kamal-kishor-chaurasiya-a22866192" v-on:mouseover="goToLinkedIn = true;" v-on:mouseout="goToLinkedIn = false;" target="_blank" class="text-white px-20 py-6 outline-offset-2 hover:outline hover:bg-sky-600 rounded-3xl font-medium text-xl uppercase shadow-lg shadow-sky-800/50 sm-screen-color">LinkedIn <i class="bi bi-send-plus"></i></a>
                </div>
            </div>
        </div>
    </div>`,

    data() {
        return {
            userName: "",
            email: "",
            message: "",
            submitButtonDisabled: true,
            nameWarning: "",
            emailwarning: "",
            textwarning: "",
            showNewMessage: false,
            showErrorMessage: false,
            messageBeingSent: false,
            rc: true,
            showThankYouMsg: false,
            showCorrectNameTick: false,
            showCorrectEmailTick: false,
            showCorrectMessageTick: false,
            isTyping: false,
            goToLinkedIn: false,
            validMailFormat: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            url: 'https://script.google.com/macros/s/AKfycbxKrst6N0hDZylrEjtd2pm7KiuW0lfl4F36Uzij9q9Rh2GDHHljpWQ8lao7q2lxOVnffQ/exec'
        }
    },
    methods: {
        sendWebhookMessage: async function (email) {
            const webhookURL = 'https://chat.googleapis.com/v1/spaces/AAAAXDp-k4E/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=01DYmEH9KI8860NcBGFnIbSFEdzU7c6qvMSaARrDSuM%3D';
            const data = JSON.stringify({
                'text': `You just received a message from ${email}`,
            });
            let response = await fetch(webhookURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                body: data,
            }).catch((err) => {
                return err
            })
            if (response.ok){
                return true
            }
            else{
                return false
            }
        },
        submitMessage: async function (e) {
            if (this.email == "") {
                this.emailwarning = "Please enter your email";
                e.preventDefault();
            }
            else if (!this.email.match(this.validMailFormat)) {
                this.emailwarning = "Invalid email address!"
                e.preventDefault()
            }
            else if (this.message == "") {
                this.textwarning = "Please put a message.";
                e.preventDefault()
            }
            else {
                this.messageBeingSent = true;
                const scriptURL = this.url;
                const form = document.forms['submit-to-google-sheet'];
                let formdata = new FormData(form);
                const time = new Date();
                formdata.append('TimeStamp', time);
                e.preventDefault();

                try {
                    let response = await fetch(scriptURL, {
                        method: 'POST',
                        body: formdata
                    })
                    if (response.ok) {
                        let webStatus = this.sendWebhookMessage(this.email)
                        if (webStatus) {
                            this.messageBeingSent = false;
                            this.showThankYouMsg = true
                            this.submitButtonDisabled = true;
                            this.showNewMessage = true;
                        }
                        else{
                            this.messageBeingSent = false;
                            this.showErrorMessage = true;
                        }
                    }
                    else {
                        this.messageBeingSent = false;
                        this.showErrorMessage = true;
                    }
                } catch (error) {
                    this.messageBeingSent = false;
                    this.showErrorMessage = true;
                }
            }
        },
        //To let user refresh this component after one message has been sent
        reload: function (e) {
            // location.reload(); this reloads entire page
            this.rc = false;
            this.$nextTick(() => {
                this.rc = true
                this.userName = ""
                this.email = ""
                this.message = ""
                this.submitButtonDisabled = true
                this.emailwarning = ""
                this.textwarning = ""
                this.showNewMessage = false
                this.showThankYouMsg = false
                this.isTyping = false
                this.showCorrectMessageTick = false;
                this.showErrorMessage = false;
                e.preventDefault();
            })
        },
        cancelPopUp: function () {
            if (this.nameWarning.length > 0) {
                this.nameWarning = "";
            }
            if (this.emailwarning.length > 0) {
                this.emailwarning = "";
            }
            if (this.textwarning.length > 0) {
                this.textwarning = "";
            }
            if (this.showThankYouMsg) {
                this.showThankYouMsg = false;
            }
        },
    },
    mounted() {
        this.$watch(
            (vm) => [vm.email, vm.message],
            (val) => {
                if (this.email.length != 0) {
                    this.isTyping = true;
                    this.emailwarning = "";
                    if (this.email.match(this.validMailFormat)) { //if mail is valid
                        this.emailwarning = "";
                        this.showCorrectEmailTick = true;
                        if (this.message.length != 0) {
                            this.showCorrectMessageTick = true;
                            this.textwarning = "";
                            this.submitButtonDisabled = false;
                        }
                        else {
                            this.textwarning = "Please put a message.";
                            this.showCorrectMessageTick = false;
                            this.submitButtonDisabled = true;
                        }
                    }
                    else {
                        if (this.email.indexOf("@") == -1) {
                            this.emailwarning = "Please include an @ in the email.";
                        }
                        else {
                            this.emailwarning = "Invalid email address!";
                        }
                        this.textwarning = "";
                        this.showCorrectEmailTick = false;
                        this.submitButtonDisabled = true;
                    }
                }
                else {
                    if (this.message.length != 0) {
                        this.emailwarning = "Please enter email first!";
                    }
                    else {
                        this.emailwarning = "Please enter your email";
                    }
                    this.textwarning = "";
                    this.showCorrectEmailTick = false;
                    this.submitButtonDisabled = true;
                    this.isTyping = false;
                }
            }
        );
    },
    watch: {
        userName: function (val) {
            if (val.length != 0) {
                this.showCorrectNameTick = true;
                this.isTyping = true;
            }
            else {
                this.showCorrectNameTick = false;
                if (this.email.length == 0) {
                    this.isTyping = false;
                }
                else {
                    this.nameWarning = "You can enter your name here"
                }
            }
        }
    }

}

export default form
