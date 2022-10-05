<template>
    <div class="w-full  shadow-md p-2 bg--400 flex justify-center ">
        <div class="nav_mobile_container bg--400 w-full h-16 grid grid-cols-2">
            <div class="col-span-1 flex  items-center">
                <span style="font-family:Montez ;" class="text-5xl">joel</span>
            </div>
            <div class="relative col-span-1 bg--400">
                <Slide right noOverlay>
                    <div class="h-auto min-h-screen">
                        <VerticalMenu :mobile="true" />

                    </div>
                </Slide>
            </div>
        </div>
    </div>

</template>
<script>
import { Slide } from 'vue3-burger-menu'
import VerticalMenu from './VerticalMenu.vue';
export default {
    components: { Slide, VerticalMenu }
}
</script>
<style lang="scss" >
.nav_mobile_container {
    width: 90%;
    
}
.bm-menu {
display: flex ;
justify-content: center;
align-items: center;
    }
    .bm-burger-button {
      position: absolute;
      width: 36px;
      height: 30px;
      left: 90%; 
      top: 16px;
      cursor: pointer;
    }
</style>