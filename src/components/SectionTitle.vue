<template>
    <div class="w-full  h-64 bg--400 flex justify-center items-center">
            <div
                class="section_title bg--400 border border-dashed border-indigo-400 flex justify-center items-center p-8">
                <span class="text- uppercase text-6xl ">
                    <span class="text-indigo-500">0{{index}}.</span>
                    <span>{{text}}</span>
                    <div class="h-1 w-32 bg-indigo-500 rounded"></div>

                </span>
            </div>

        </div>
</template>
<script>
export default {
    props: {
        text: String, 
        index: String
    }
}
</script>
<style lang="scss">
    @import "../assets/scss/variables";
    .section_title {
    width: 90%;
    font-family: $primary-font;
}
</style>