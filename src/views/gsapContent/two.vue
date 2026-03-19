<template>
  <div class="two-box">
   <div class="two-water"></div>
   <div class="absolute two-water-right ">
    <div class="relative "  style=" z-index:1; top:50px; left:50px; width:80px;height:500px; background-color:black;"></div>
   </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue"
const a = ref(0)
</script>

<style scoped>
.two-box{
    width: 100vw;
    height: 100vh;
    position: relative;
    
}
.two-water{
    width: 3800px;
    height:100%;
    background-color:blue;
}
.two-water-right{
    width: 3200px;
    height: 1200px;
    background-color:#734f31;
    left:3800px;
    bottom:0;
}

</style>
