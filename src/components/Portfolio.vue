<template >
    <!-- portfolio_page -->
    <div class="w- h-auto min-h-screen portfolio_page">
        
        <!-- section title -->
        <SectionTitle index="3" text="Portfolio"/>
        <!-- filter buttons -->
        <div class="text-gray-600 bg--200 projects-categories w-full uppercase bg--400 flex justify-around">
            <div class="flex text-xl justify-around">
                <button class="uppercase mixitup-control-active" data-filter="*">Tout</button>
                <button class="uppercase " data-filter=".djlf">Graphic design</button>
                <button class="uppercase" data-filter=".hello">Web design</button>
                <button class="uppercase" data-filter=".box">Photography</button>
            </div>


        </div>

        <!-- portfolio_projects -->
        <section class="w-full bg--400 flex justify-center">
            <div class=" px-5 py-12 mx-auto flex flex-wrap" style="width: 90%;">

                <div class="container w-full bg--400 flex justity-center flex-wrap">
                    <div v-for="(item, index) in projects" :key="index"
                        class="project_container xl:w-1/4 md:w-1/2 p-4 mix" :class="{'box': item.hello==true}">
                        <div class=" bg-gray-100    p-6 rounded-lg">
                            <img class="h-40 rounded w-full object-cover object-center mb-6"
                                src="https://dummyimage.com/720x400" alt="content">

                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>
<script>
import mixitup from "mixitup"
import SectionTitle from "./SectionTitle.vue";
export default {
    data() {
        return {
            projects: [
                {
                    img: "https://picsum.photos/id/237/200/300",
                    hello: true,
                },
                {
                    img: "https://picsum.photos/id/237/200/300",
                    hello: false,
                },
                {
                    img: "https://picsum.photos/id/237/200/300",
                    hello: true,
                },
                {
                    img: "https://picsum.photos/id/237/200/300",
                    hello: false,
                },
                {
                    img: "https://picsum.photos/id/237/200/300",
                    hello: false,
                },
                {
                    img: "https://picsum.photos/id/237/200/300",
                    hello: false,
                },
                {
                    img: "https://picsum.photos/id/237/200/300",
                    hello: false,
                },
                {
                    img: "https://picsum.photos/id/237/200/300",
                    hello: false,
                }
            ]
        };
    },
    mounted() {
        let mix = mixitup(".container");
    },
    components: { SectionTitle }
}
</script>
<style lang="scss">
@import "../assets/scss/variables";



.project {
    width: 300px;
    height: 300px;
    border: 1px solid white;
}

img {
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    transition: all 0.2s;
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;

    &:hover {
        cursor: pointer;
        filter: grayscale(0%);
        -webkit-filter: grayscale(0%);
        -moz-filter: grayscale(0%);
        transform: scale(1.1);
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        z-index: 3;
    }
}

.projects-categories>div {
    width: 80%;
    // background-color: blue;
}

.projects-categories button.mixitup-control-active {
    // background-color: $third-bg;
    color: $third-bg;
    padding: 15px;

    border-radius: 20px;
    transition: all 0.3s;
}
</style>