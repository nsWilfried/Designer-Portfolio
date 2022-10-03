<template>
    <div>
        <!-- home page -->
        <div class="home_page w-full h-screen  grid grid-cols-2">

            <!-- hero section -->
            <div class="w-full bg-200 flex justify-end items-center">

                <div class="hero_section flex justify-center items-center ">

                    <!-- hero section -->
                    <section>
                        <div class=" max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 ">

                            <!-- personnal information -->
                            <div class="mr-auto place-self-center ">


                                <h1 class="text-3xl text-red-400 uppercase pb-3" style="font-family: 'Fira Code';">Hi_
                                    👋 ,
                                    je suis </h1>

                                <!-- name and position -->
                                <h1 style="color: #2C3E50; "
                                    class=" text- mb-4 header__title text-7xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-7xl">
                                    Wilfried N'SOUKPOE </h1>
                                <h1
                                    class=" mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-7xl">
                                    Full Stack Web Developer<span class="text-" style="color: #2C3E50;">.( )</span>
                                </h1>

                                <!-- description of myself -->
                                <p class="max-w-2xl mb-6 secondary-font font-lightlg:mb-8 md:text-lg lg:text-xl"
                                    style="padding-top: 20px;padding-bottom:20px;color: #5D6D7E;  ">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde consequuntur,
                                    dignissimos
                                    ut hic ab dolore recusandae, provident, aliquam similique eaque ex. Quaerat ea
                                    illum,
                                    reiciendis minima ipsam ad atque alias.</p>

                                <!-- Get in touch button -->
                                <div>
                                    <Button class="uppercase" text="Me contacter" link="#contact" />
                                </div>
                            </div>



                        </div>
                    </section>


                </div>

            </div>

            <!-- logo part -->
            <div class="home_logo_section bg-red-300"></div>
        </div>
    </div>
</template>
<script>
import Button from "@/components/Button.vue"
export default {
    components: { Button }, 
    mounted(){
    }
}
</script>
<style lang="scss">
@import "../assets/scss/variables";

.home_page {
    background-color: $primary-bg ;
}

.hero_section {
    width: 90%;

}

.home_logo_section {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: $secondary-bg ;

}
</style>