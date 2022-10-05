<template >
    <!-- portfolio_page -->
    <div class="w- h-auto min-h-screen portfolio_page">

        <!-- section title -->
        <SectionTitle index="3" text="Portfolio" />
        <!-- filter buttons -->
        <div class="text-gray-600 bg--200 projects-categories w-full uppercase bg--400 flex justify-around">
            <div class="flex text-xl justify-around">
                <button class="uppercase px-4 py-2 mixitup-control-active" data-filter="*">Tout</button>
                <button class="uppercase px-4 py-2" data-filter=".djlf">Graphic design</button>
                <button class="uppercase px-4 py-2" data-filter=".hello">Web design</button>
                <button class="uppercase px-4 py-2" data-filter=".box">Photography</button>
            </div>


        </div>


        <!-- portfolio_projects -->
        <section class="w-full bg--400 flex justify-center">
            <div class=" px-5 py-12 mx-auto flex justify-center flex-wrap bg--400" style="width: 90%;">

                <div :settings="{ speed: 500, plugins: plugins }" :onInit="onInit" :onBeforeSlide="onBeforeSlide"
                    class="container w-full bg--400 flex justity-center flex-wrap">
                    <div v-for="(item, index) in projects" :key="index"
                        class="project_container xl:w-1/4 md:w-1/2 p-4  mix" :class="{'box': item.hello==true}">
                        <lightgallery :settings="{ speed: 500, plugins: plugins }" :onInit="onInit" :onBeforeSlide="onBeforeSlide" class=" bg-gray-100   rounded-lg">
                            <img class="h-44 rounded w-full object-cover object-center mb-6"
                                src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="content">

                        </lightgallery>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>
<script>
import mixitup from "mixitup"
import Lightgallery from 'lightgallery/vue';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import SectionTitle from "./SectionTitle.vue";
import styles from 'lightgallery/scss/lightgallery.scss';
export default {
    components: {
        Lightgallery, SectionTitle
    },
    data() {

        return {
            plugins: [lgThumbnail, lgZoom],
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
    methods: {
        
    },
}
</script>
<style lang="scss">
@import "../assets/scss/variables";



// .project {
//     width: 300px;
//     height: 300px;
//     border: 1px solid white;
//     background-color: aqua;
// }

img {
    transition: all 0.2s;
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;

    &:hover {
        cursor: pointer;
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
    background-color: $third-bg;
    color: $third-bg;
    // padding: 15px;

    border-radius: 20px;
    color: white;
    transition: all 0.3s;
}

@media only screen and (min-width: 320px) and (max-width: 1000px) {
    .projects-categories {
        >div {
            flex-wrap: wrap;
            gap: 10px;
            width: 90%;


        }
    }

    .project_container {
        width: 100%;

        // background-color: blue;
        >div {
            width: 100%;

        }
    }
}
</style>