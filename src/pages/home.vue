<template >
    <div class="home_layout relative  flex flex-col h-screen w-full bg-gree-400 ">
      
        <FloatingNavbar/>
        <!-- mobile navbar -->
        <NavbarMobile class="navbar_mobile"/>
        <!-- vertical navbar -->
        <VerticalMenu />
        <div class="all_pages">
            <router-view></router-view>
        </div>

    </div>
</template>
<script >
import About from '../components/About.vue';
import VerticalMenu from '../components/VerticalMenu.vue';
import NavbarMobile from '../components/NavbarMobile.vue';
import FloatingNavbar from '../components/FloatingNavbar.vue';
export default {
    components: { About, VerticalMenu, NavbarMobile, FloatingNavbar }, 
   
}
</script>
<style lang="scss" scoped>
    @import "../assets/scss/variables"; 
    .all_pages {
        margin-left: 192px;
    }

    @media only screen and (min-width: 320px) and (max-width: 1000px){
    .all_pages{
        margin-left: 0px;
    }
    
}
</style>