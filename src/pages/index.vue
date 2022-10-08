<template>
    <div>
        <FloatingNavbar/>
        <!-- home page -->
        <NavbarMobile  class="navbar_mobile "/>

        <div class="home_page w-full h-screen  grid grid-cols-2">

            <!-- hero section -->
            <div class="hero_section_container w-full bg-200 flex justify-end items-center">

                <div class="hero_section flex justify-center items-center ">

                    <!-- hero section -->
                    <section class="bg--400">
                        <div class=" max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 ">

                            <!-- personnal information -->
                            <div class="mr-auto place-self-center ">


                                <h1 class="text-7xl header_element header_hello text-indigo-400 uppercase pb-3 " style="font-family: 'Fira Code';">Hi 👋 there,  </h1>

                                <!-- name and position -->
                                <h1
                                    class="header_element text- mb-4 header_title uppercase text-7xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-7xl">
                                    I"M Joel </h1>
                                <span
                                    class="header_element header_position uppercase mt-4 mb-4 p-2 h-auto font-medium bg-indigo-400 text-white px-2  md:text-4xl ">
                                    Graphic designer 
                                </span>

                                <!-- description of myself -->
                                <p class="header_element max-w-2xl mb-6 header_description secondary-font font-lightlg:mb-8 md:text-lg lg:text-xl"
                                    style="padding-top: 20px;padding-bottom:20px;color: #5D6D7E;  ">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde consequuntur,
                                    dignissimos
                                    ut hic ab dolore recusandae, provident, aliquam similique eaque ex. Quaerat ea
                                    illum,
                                    reiciendis minima ipsam ad atque alias.</p>

                                <!-- Get in touch button -->
                                <div class="header_button header_element">
                                    <Button class="uppercase font-extrabold" text="En savoir plus" link="/design" />
                                </div>
                            </div>



                        </div>
                    </section>


                </div>

            </div>

            <!-- logo part -->
            <div class="home_logo_section bg--300 joel_image"></div>
        </div>
    </div>
</template>
<script>
import Button from "@/components/Button.vue"
import NavbarMobile from "../components/NavbarMobile.vue";
import gsap from "gsap"
import FloatingNavbar from "../components/FloatingNavbar.vue";

export default {
    components: { Button, NavbarMobile, FloatingNavbar },
    metaInfo(){
        return {
            title:"hell isjkdlf"
        }
    }, 
    mounted(){
        const tl = gsap.timeline();
        tl.from(".header_element", {
            duration: 1, 
            y: 40, 
            opacity: 0, 
            ease: "Expo.easeInOut", 
            stagger: 0.2
        })
    }
}
</script>
<style lang="scss">
@import "../assets/scss/variables";

// .home_page {
//     background-color: $primary-bg ;
// }
.navbar_mobile {
    display: none;
}

.hero_section {
    width: 90%;

}

.home_logo_section {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: $secondary-bg ;

}

@media only screen and (min-width: 320px) and (max-width: 1000px){
    .navbar_mobile{
        display: flex ;
    }
    .home_logo_section{
        display: none;
    }
    .home_page {
        display: flex;
        min-height: 100vh;
        height: auto ;
    }
    .hero_section_container {
        justify-content: center;
    }
    .header_hello{
        font-size: 2em;
    }
    // .header_title{
    //     font-size: 3emem;
    // }
    
}
</style>