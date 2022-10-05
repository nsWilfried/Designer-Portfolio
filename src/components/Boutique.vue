<template >
    <div class="w- min-h-screen portfolio_page">
        
        <!-- section title -->
        <SectionTitle text="boutique" index="4"/>

        <!-- filter buttons -->
        <div class="text-gray-600 projects-categories w-full uppercase bg--400 flex justify-around">
            <div class="flex text-xl justify-around">
                <button :key="index" class=" px-4 py-2 uppercase mixitup-control-active" data-filter="*">Tout</button>
                <button v-for="(item, index) in filterButtons" class="px-4 py-2 uppercase "
                    :data-filter="item.filter">{{item.name}}</button>

            </div>


        </div>

        <!-- boutique products -->
        <section class=" bg--500 flex justify-center">



            <!-- portfolio_projects -->
            <div class=" px-5 py-24 mx-auto">

                <div class="container justify-center w-full bg--400 flex flex-wrap">
                    <div v-for="(item, index) in projects" :key="index" class=" xl:w-1/4 md:w-1/2 p-4 mix"
                        :class="{'box': item.hello==true}">
                        <div class=" bg-gray-100    p-6 rounded-lg">
                            <img class="h-40 rounded w-full object-cover object-center mb-6"
                                src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="content">
                            <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
                            <!-- <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. -->
                            <!-- Distillery hexagon disrupt edison bulbche.</p> -->
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
            ],
            // Tout - logo - flyers - carte de visite - poster
            filterButtons: [
                {
                    name: "logo",
                    filter: ".logo"
                },
                {
                    name: "flyers",
                    filter: ".flyers"
                },
                {
                    name: "Carte de visite",
                    filter: ".visit_card"
                },
                {
                    name: "poster",
                    filter: ".poster"
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



// .project {
//     width: 300px;
//     height: 300px;
//     border: 1px solid white;
// }



.projects-categories>div {
    width: 80%;
    // background-color: blue;
}

.projects-categories button.mixitup-control-active {
    color: white;
}
</style>