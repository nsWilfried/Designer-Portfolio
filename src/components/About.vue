<template>
    <div class="about_page w-full bg-green-400 h-screen grid grid-cols-2">
        <div class="flex justify-center items-center">
            <div class="about_content">
                <!-- title -->
                <div class="contact_form_title w-full  bg--300 border flex- justify-center items-center p-8">
                    <span class="uppercase text-6xl">
                        <span class="section_number">02.</span>
                        <span>About Me</span>
                    </span>
                    <div class="h-1 w-20 bg-indigo-500 rounded"></div>

                </div>

                <!-- description -->
                <div class="contact_form_description p-4 w-full bg--300 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsum velit laudantium suscipit
                    earum eum harum asperiores ipsa unde! Placeat, deserunt ut esse enim repellat repellendus commodi
                    praesentium molestiae officiis aspernatur recusandae modi omnis culpa facere nulla molestias
                    voluptatibus, aliquam totam libero perspiciatis! Sed, ab. Quaerat asperiores ullam ipsam at.
                </div>

                <div class="contact_form_description p-4 w-full bg--300  text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolores dolore provident incidunt
                    fugiat. Libero nihil consectetur iusto provident earum esse ipsum quo molestiae deleniti cumque,
                    atque quidem quae ab sint, voluptatibus aliquid eum, odio dolore impedit autem asperiores. Veritatis
                    quis adipisci maxime dignissimos inventore! Accusantium, illum. Nam, fugiat aliquid.
                </div>



            </div>
        </div>
        <div class="bg-green-400 w-full h-screen  joel_image"></div>
    </div>
</template>
<script>
import SocialLinks from './SocialLinks.vue';
export default {
    components: { SocialLinks }
}
</script>
<style lang="scss">
@import "../assets/scss/variables";

.about_content {
    width: 90%;
    color: white;
    // background-color: antiquewhite;
    z-index: 1;
}

.about_page {
    background-color: $primary-bg;
}
.joel_image {
    background-image: url("../public/image.jpeg");
    background-size: cover;
    object-fit: cover;
}
</style>