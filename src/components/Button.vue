<template>
    <div>
        <!-- link button -->
        <a  :href="link" type="button" class="fill">
            {{text}}
        </a>
    </div>
</template>
<script>
export default {
    props: {
        text: String, 
        link: {
          type: String, 
          required: false
        },
    }
}
</script>
<style lang="scss">
    @import "../assets/scss/variables";
    /* Fill button styling */
.fill {
  font-size: 20px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 50px 13px;
  outline: 0;
  border: 3px solid $secondary-bg; //dark mode
//   border: 1px solid white; //light mode

  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  
  background-color: rgba(0, 0, 0, 0);
}

.fill::before {
  content: "";
  background-color:$secondary-bg;
  width: 0%;
  position: absolute;
  height: 100%;
  z-index: -2;

  top: 0px;
  left: 0px;
  transition: 0.2s;
  font-family: 'Fira code';
}


.fill:hover::before {
  top: 0px;
  left: 0px;
  width: 100%;
}
// .fill:hover{
//     border-color: $primary-color;
// }
</style>