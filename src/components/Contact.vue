<template >
    <div class="contact_page h-full w-full bg--300 grid grid-cols-2">

        <!-- contact form container  -->
        <div class="contact_form_container flex justify-center items-center bg--300">
            <div class="contact_form">
                <!-- title -->
                <div class="contact_form_title w-full p-4 bg--300">

                    <span class="text-4xl">
                        <span class="section_number">05.</span>
                        <span>Contactez Moi</span>
                    </span>
                </div>

                <!-- description -->
                <div class="contact_form_description p-4 w-full bg--300">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nostrum architecto fugit, alias
                    nemo sit sequi ab, ipsum aliquid possimus illum dolores nihil magnam natus perspiciatis, dicta fuga
                    unde? Qui.
                </div>

                <!-- contact form -->
                <div class="p-4 w-full mx-auto">
                    <div class="flex flex-wrap -m-2">
                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="name" class="leading-7 text-sm text-gray-600">Nom</label>
                                <input type="text" id="name" name="name" v-model="values.name" @blur="validate('name')"
                                    @keypress="validate('name')"
                                    class="w-full rounded border border-black-300 focus:border-red-400 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                                <span class="pt-2 text-red-400">{{ errors.name }}</span>
                            </div>
                        </div>
                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="email" v-model="values.email"
                                    @blur="validate('email')" @keypress="validate('email')"
                                    class="w-full rounded border border-gray-300 focus:border-red-400 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                <span class="pt-2 text-red-400">{{ errors.email }}</span>
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <div class="relative">
                                <label for="subject" class="leading-7 text-sm text-gray-600">Sujet</label>
                                <input type="text" id="subject" name="subject" v-model="values.subject"
                                    @blur="validate('subject')" @keypress="validate('subject')"
                                    class="w-full rounded border border-gray-300 focus:border-red-400 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                <span class="pt-2 text-red-400">{{ errors.subject }}</span>
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <div class="relative">
                                <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                                <textarea id="message" name="message" v-model="values.message"
                                    @blur="validate('message')" @keypress="validate('message')"
                                    class="w-full rounded border border-gray-300 focus:border-red-400 focus:bg-white focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                <span class="pt-2 text-red-400">{{ errors.message }}</span>
                            </div>
                        </div>
                        <div class="contact__button p-2 bg--400 w-full ">
                            <!-- boutton d'envoi de l'email -->
                            <Button text="Envoyer" class="uppercase" @click="sendMeEmail()" />
                        </div>

                    </div>
                </div>
            </div>
        </div>


        <!-- google maps -->
        <div class="bg-green-300">
        </div>
    </div>
</template>
<script>
// components
import Button from "./Button.vue";

import { object, string } from "yup";
export default {
    components: { Button },
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
};
</script>
<style lang="scss">
@import "../assets/scss/variables";

.contact_form {
    width: 90%;
    // background-color: orange;

}

.contact_page {
    background-color: $primary-bg;
    color: white;
}
</style>