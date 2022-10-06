<template>
    <div class="about_page w-full bg--400 h-auto min-h-screen grid grid-cols-2">
        <div class="about_container flex justify-center items-center">
            <div class="about_content">
                <!-- title -->
                <SectionTitle class="about_element" text="About" index="2" />
                <!-- description -->
                <div class="about_element contact_form_description p-8 w-full  bg--300 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsum velit laudantium suscipit
                    earum eum harum asperiores ipsa unde! Placeat, deserunt ut esse enim repellat repellendus commodi
                    praesentium molestiae officiis aspernatur recusandae modi omnis culpa facere nulla molestias
                    voluptatibus, aliquam totam libero perspiciatis! Sed, ab. Quaerat asperiores ullam ipsam at.
                </div>

                <div class="about_element contact_form_description p-8 w-full bg--300  text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolores dolore provident incidunt
                    fugiat. Libero nihil consectetur iusto provident earum esse ipsum quo molestiae deleniti cumque,
                    atque quidem quae ab sint, voluptatibus aliquid eum, odio dolore impedit autem asperiores. Veritatis
                    quis adipisci maxime dignissimos inventore! Accusantium, illum. Nam, fugiat aliquid.
                </div>



            </div>
        </div>
        <div class="bg--400  w-full h-auto min-h-screen joel_image"></div>
    </div>
</template>
<script>
import SocialLinks from './SocialLinks.vue';
import SectionTitle from './SectionTitle.vue';
import gsap from "gsap"
export default {
    components: { SocialLinks, SectionTitle }, 
    mounted(){
        const tl = gsap.timeline();
        tl.from(".about_element",{
            duration :1, 
            opacity: 0, 
            y:40, 
            ease: 'Expo.easeInOut', 
            stagger: 0.2
        })
    }
}
</script>
<style lang="scss">
@import "../assets/scss/variables";

.about_content {
    width: 90%;
    z-index: 1;
}

// .about_container {
//     // background-color: $primary-bg;
// }

// .about_page {
//     // background-color: $secondary-bg;
// }
.joel_image {
    background-image: url("../public/image.jpeg");
    background-size: cover;
    background-position: center;
    object-fit: cover;
    mix-blend-mode: multiply;
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;

    &:hover {
        cursor: pointer;
        mix-blend-mode: normal;
        transition: all 0.5s;
        filter: grayscale(0%);
        -webkit-filter: grayscale(0%);
        -moz-filter: grayscale(0%);
    }
}
@media only screen and (min-width: 320px) and (max-width: 1000px){
    .about_page{
        display: flex;
        flex-direction: column;
        height: auto;
    }
    .contact_form_description{
        padding: 10px;
    }
    .joel_image{
        margin-top: 30px;
    }
}
</style>