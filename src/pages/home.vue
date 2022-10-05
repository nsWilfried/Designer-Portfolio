<template >
    <div class="home_layout flex flex-col h-screen w-full bg-gree-400 ">

        <!-- mobile navbar -->
        <NavbarMobile class="navbar_mobile"/>
        <!-- vertical navbar -->
        <VerticalMenu />
        <div class="all_pages">
            <router-view></router-view>
        </div>

    </div>
</template>
<script>
import About from '../components/About.vue';
import VerticalMenu from '../components/VerticalMenu.vue';
import NavbarMobile from '../components/NavbarMobile.vue';
export default {
    components: { About, VerticalMenu, NavbarMobile }
}
</script>
<style lang="scss">
    .all_pages {
        margin-left: 192px;
    }
    @media only screen and (min-width: 320px) and (max-width: 1000px){
    .all_pages{
        margin-left: 0px;
    }
}
</style>