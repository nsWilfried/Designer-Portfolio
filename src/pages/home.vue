<template >
    <div class="home_layout flex h-screen w-full bg-gree-400 ">

        <!-- vertical navbar -->
        <VerticalMenu/>
        <div class="w-full all_pages">
            <router-view></router-view>
        </div>

    </div>
</template>
<script>
import About from '../components/About.vue';
import VerticalMenu from '../components/VerticalMenu.vue';
export default {
    components: { About, VerticalMenu }
}
</script>
<style lang="scss">
    .all_pages {
        margin-left: 192px;
    }
</style>