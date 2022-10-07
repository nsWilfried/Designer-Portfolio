<template >
    <div class="contact_page min-h-screen h-auto w-full bg--300 ">

        <!-- contact form container  -->
        <div class="contact_form_container flex flex-col justify-center items-center bg--300">
            <!-- section title -->
            <SectionTitle text="Contact"  index="6" class="contact_element bg--300" />

            <section class="text-gray-600 flex  bg--400">
                <div class="container px-5  mx-auto flex sm:flex-nowrap flex-wrap">

                    <!-- google map -->
                    <div
                        class=" contact_element lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map"
                            marginheight="0" marginwidth="0" scrolling="no"
                            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                            style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe>
                        <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div class="lg:w-1/2 px-6">
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p class="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter
                                </p>
                            </div>
                            <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <a class="text-indigo-500 leading-relaxed">batard@email.com</a>
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4 uppercase">Téléphone
                                </h2>
                                <p class="leading-relaxed">123-456-7890</p>
                            </div>
                        </div>
                    </div>

                    <!-- contact form  -->
                    <div class="lg:w-1/3 md:w-1/2 bg- flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font contact_element">Contactez-moi</h2>
                        <p class="leading-relaxed mb-5 text-gray-600 contact_element">Post-ironic portland shabby chic echo park, banjo
                            fashion axe</p>
                        <div class="p-4 w-full mx-auto">
                            <div class="flex flex-wrap -m-2">
                                <div class=" w-1/2 contact_element">
                                    <div class="relative">
                                        <label for="name" class="leading-7 text-sm text-gray-600">Nom</label>
                                        <input type="text" id="name" name="name" v-model="values.name"
                                            @blur="validate('name')" @keypress="validate('name')"
                                            class="w-full rounded border border-black-300 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                                        <span class="pt-2 text-indigo-400">{{ errors.name }}</span>
                                    </div>
                                </div>
                                <div class="pl-2 w-1/2  contact_element">
                                    <div class="relative">
                                        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                                        <input type="email" id="email" name="email" v-model="values.email"
                                            @blur="validate('email')" @keypress="validate('email')"
                                            class="w-full rounded border border-gray-300 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        <span class="pt-2 text-indigo-400">{{ errors.email }}</span>
                                    </div>
                                </div>
                                <div class=" w-full  contact_element">
                                    <div class="relative">
                                        <label for="subject" class="leading-7 text-sm text-gray-600">Sujet</label>
                                        <input type="text" id="subject" name="subject" v-model="values.subject"
                                            @blur="validate('subject')" @keypress="validate('subject')"
                                            class="w-full rounded border border-gray-300 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        <span class="pt-2 text-indigo-400">{{ errors.subject }}</span>
                                    </div>
                                </div>
                                <div class=" w-full  contact_element">
                                    <div class="relative">
                                        <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                                        <textarea id="message" name="message" v-model="values.message"
                                            @blur="validate('message')" @keypress="validate('message')"
                                            class="w-full rounded border border-gray-300 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                        <span class="pt-2 text-indigo-400">{{ errors.message }}</span>
                                    </div>
                                </div>
                                <div class=" contact_element contact__button py-2 bg--400 w-full ">
                                    <!-- boutton d'envoi de l'email -->
                                    <Button text="Envoyer" class="uppercase" @click="sendMeEmail()" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </div>
</template>
<script>
import Button from "./Button.vue";
import gsap from "gsap"
import { object, string } from "yup";
import SectionTitle from "./SectionTitle.vue";
export default {
    components: { Button, SectionTitle },
    data() {
        const contactSchema = object().shape({
            email: string().required("Email requis").email("Entrez un email valide"),
            name: string().required("Nom requis"),
            subject: string().required("Sujet requis"),
            message: string().required("Message requis"),
        });
        return {
            values: {
                name: "",
                email: "",
                subject: "",
                message: "",
            },
            errors: {
                name: "",
                email: "",
                subject: "",
                message: "",
            },
            contactSchema,
        };
    },

    methods: {
        validate(field) {
            this.contactSchema
                .validateAt(field, this.values)
                .then(() => {
                    this.errors[field] = "";
                })
                .catch((err) => {
                    this.errors[field] = err.message;
                });
        },
        sendMeEmail() {
            this.contactSchema
                .validate(this.values, { abortEarly: false })
                .then((res) => {
                    this.errors = {};

                    this.axios.post(`${import.meta.env.VITE_MAILTRAP_API_URL}/api/send`, {
                        from: {
                            email: this.values.email,
                            name: this.values.name
                        },
                        to: {
                            email: "wacnsoukpoe@gmail.com",
                            name: "Wilfried N'SOUKPOE"
                        },
                        subject: this.values.subject,
                        text: this.values.message
                    }, {
                        headers: {
                            "authorization": "Bearer " + import.meta.env.VITE_MAILTRAP_KEY
                        }
                    }).then(res => {
                        this.$swal("Succès", "Message envoyé", "success",)
                    }, err => {
                        this.$swal("Erreur", "Erreur lors de l'envoi du message", "error")
                    })
                })
                .catch((err) => {
                    err.inner.forEach((error) => {
                        this.errors[error.path] = error.message;
                    });
                });
        },
    },

    mounted(){
        const tl = gsap.timeline(); 
        tl.from('.contact_element', {
            duration: 1, 
            opacity: 0, 
            y: 20, 
            ease: "Expo.easeInOut", 
            stagger:0.2

        })
        console.log("quelque chose cloche par ici ")
    }
};
</script>
<style lang="scss" scoped>

.contact_form {
    width: 90%;
}

</style>