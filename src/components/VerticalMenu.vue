<template>
    <div>
        <div class="vertical_menu   bg--300 grid grid-rows-6 h-full w-48">

            <!-- logo -->
            <div class="vertical_menu_logo flex row-span-1 justify-center items-center bg-red-400">
                <span>logo</span>
            </div>

            <!-- links -->
            <div class="vertical_menu_links flex justify-center items-center row-span-4 bg--500">
                <div class="bg--400 w-full h-auto">
                    <nav>
                        <routerLink :to="`${link.link}`" class="nav_link w-full flex justify-center items-center " v-for="(link, index) in navLinks" :key="index">
                           <div style="color:#5a82fc ;" class="mr-1">0{{index+1}}. </div>
                           <div>{{link.name}}</div>
                        </routerLink>
                    </nav>
                </div>
            </div>

            <!-- socials links -->
            <SocialLinks/>
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
                    name: "About Me",
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
        padding: 20px;
        border-top: 1px solid #293557 ;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
            background-color: #2d4583; 
            color: white;
            transition: all 0.3s;

        }
    }
    .vertical_menu {
        background-color: #293557;
        color: white;
    }
</style>