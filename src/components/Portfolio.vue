<template >
    <div class="w- flex-wrap gap-0 h-screen portfolio_page flex justify-center items-center">
        <section class="text-gray-600 body-font">
            <div class="w-full  h-64 bg--400 flex justify-center items-center">
                <div class="portfolio_title border flex justify-center items-center p-8">
                    <span class="text-white uppercase text-8xl ">
                        <span class="text-indigo-500">03.</span>
                        <span>Portfolio</span>
                    <div class="h-1 w-32 bg-indigo-500 rounded"></div>

                    </span>
                </div>
                
            </div>

            <div class="projects-categories">
                    <button data-filter=".box">hello</button>
                    <button data-filter="*">hello</button>
            </div>
            <div class="container px-5 py-24 mx-auto">
                
                <div  class=" w-full bg--400 flex flex-wrap">
                    <div  v-for="(item, index) in projects" :key="index" class="container xl:w-1/4 md:w-1/2 p-4">
                        <div  class=" bg-gray-100    p-6 rounded-lg" :class="{'box': item.hello==true}">
                            <img class="h-40 rounded w-full object-cover object-center mb-6"
                                src="https://dummyimage.com/720x400" alt="content">
                            <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
                            <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat.
                                Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import mixitup from "mixitup"
export default {
    data() {
        return {
            projects: [
                {
                    img: "https://picsum.photos/id/237/200/300", 
                    hello: true, 
                }, {
                    img: "https://picsum.photos/id/237/200/300", 
                    hello: false,
                }, {
                    img: "https://picsum.photos/id/237/200/300", 
                    hello: true,
                }, {
                    img: "https://picsum.photos/id/237/200/300", 
                    hello: false,
                }
            ]
        }
    }, 
    mounted() {
        let mix = mixitup('.container')
    },
}
</script>
<style lang="scss">
@import "../assets/scss/variables";

.portfolio_page {
    background-color: $primary-bg;
}
.portfolio_title {
    width: 90%;
}

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
</style>