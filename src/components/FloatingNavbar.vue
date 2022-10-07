<template>
    <div class="floating">
        <section class="float_navbar shadow-lg">
          <routerLink  :to="item.link"  v-for="(item, index) in iconLinks" :key="index" class="shadow-sm icon-link h-16 w-full bg- flex justify-center items-center">
            <font-awesome-icon :icon="item.icon" />
          </routerLink>
        </section>
    </div>
      <!-- float navbar -->
     
</template>
<script>
export default {
    data(){
        
        return {
            iconLinks: [
            {
                link: "/", 
                icon: "fa-solid fa-house"
            }, 
            {
                link: "/design", 
                icon: "fa-regular fa-user"
            }, 
            {
                link: "/design/portfolio", 
                icon: "fa-solid fa-briefcase"
            }, 
            {
                link: "/design/boutique", 
                icon: "fa-solid fa-shop"
            }, 
            {
                link: "/design/contact", 
                icon: "fa-solid fa-address-book"
            }, 
        ] 
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "../assets/scss/variables"; 
        .router-active-class {
        background-color: white;

        color: black !important;
    }
    .icon-link {
        border-radius: 20px;
        color: white;
        transition: all 0.5;
        
        &:hover {
            background-color: white;
            color: $primary-bg; 
            transition: all 0.5s;
            cursor: pointer; ;
        }
    }
    .floating {
        position: absolute;
        left: 95%;
        display: flex; 
        height: 100%;
        align-items: center;
        z-index: 100000000000000000;
    }
    .float_navbar {
        background-color:$secondary-bg;
        width: 50px;
        height: auto;
        border-radius: 20px;
       
    }
    @media only screen and (min-width:320px) and (max-width: 1000px){
        .floating{
            display: none;
        }
    }
</style>