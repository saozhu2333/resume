<template>
  <div  class="three-box">
   <div class="three-map">

   </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue"
const a = ref(0)
</script>

<style scoped>
.three-map{
    width: 30000px;
    height: 100vh;
    background-image: url("@/assets/gamebackground.png");
    background-size: 30000px;
    background-repeat: no-repeat;
    background-position: 0 -1280px;
}
</style>
