<template>
    <div>
        <div class="vertical_menu   bg--300 grid grid-rows-6 h-full w-48">

            <!-- logo -->
            <routerLink to="/" class="vertical_menu_logo flex row-span-1 justify-center items-center text-white ">
                <span class="text-5xl" style="font-family: Montez;">Fantôme</span>
            </routerLink>

            <!-- links -->
            <div class="vertical_menu_links flex justify-center items-center row-span-5 bg--500">
                <div class="bg--400 w-full h-auto">
                    <nav>
                        <routerLink :to="`${link.link}`"
                            class="nav_link text-xl w-full flex uppercase   justify-center items-center "
                            v-for="(link, index) in navLinks" :key="index">
                            <!-- <div style="color:#5a82fc ;" >0{{index+1}}. </div> -->
                            <div>{{link.name}}</div>
                        </routerLink>
                    </nav>
                </div>
            </div>

            <!-- socials links -->
            <div class="p-4">
                <SocialLinks />
            </div>
        </div>

    </div>
</template>
<script>
import SocialLinks from './SocialLinks.vue';
export default {
    data() {
        return {
            navLinks: [
                {
                    name: "Accueil",
                    link: "/"
                },
                {
                    name: "About",
                    link: "/design/"
                },
                {
                    name: "Portfolio",
                    link: "/design/portfolio"
                },
                {
                    name: "Boutique",
                    link: "/design/boutique"
                },
                {
                    name: "Contact",
                    link: "/design/contact"
                }
            ]
        };
    },
    components: { SocialLinks }
}
</script>
<style lang="scss">
@import "../assets/scss/variables";

.nav_link {
    padding: 30px;
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
    font-family: $primary-font;
    &:hover {
        background-color: $third-bg;
        color: white;
        transition: all 0.3s;

        &::before {
            background-color: $third-bg ;
        }
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        height: 3px;
        width: 50px;
        transform: rotate(90deg);
        background-color: $third-bg;
    }
    &:nth-child(1){
        ::after{
            content: "";
            width: 15px;
            height: 15px;
            background: $secondary-bg;
            border-radius: 50%;
            position: absolute;
            top: -35px;
            left: 46.4%;
        }
    }
    &:nth-last-child(1) {
        ::before {
            content: "";
            position: absolute;
            bottom: 0;
            left: 37%;
            height: 2px;
            width: 50px;
            transform: rotate(90deg);
            background-color: $third-bg;

        }

        ::after {
            content: "";
            width: 15px;
            height: 15px;
            background: $secondary-bg;
            border-radius: 50%;
            position: absolute;
            bottom: -35px;
            left: 46.5%;

        }
    }

}

.vertical_menu {
    background-color: $primary-bg;
    color: white;
    position: fixed;
    height: 100vh;

    &_logo {
        background-color: $third-bg;
    }
}
@media only screen and (min-width: 320px) and (max-width: 1000px){
    .vertical_menu{
        display: none;
    }
}
</style>