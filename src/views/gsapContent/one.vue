<template>
  <div class="one-box">
    <div class="one-ground"></div>
    <img class="one-cloud1 cloud" src="@/assets/logo.svg" width="200"/>
    <img class="one-block1 cloud" src="@/assets/logo.svg" width="50"/>
    <img class="one-cloud2 cloud" src="@/assets/logo.svg" width="200"/>
    <img class="one-cloud3 cloud" src="@/assets/logo.svg" width="200"/>
    <img class="one-cloud4 cloud" src="@/assets/logo.svg" width="200"/>
    <div class="one-water cloud"></div>
  </div>
</template>

<script setup lang="ts">
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import {ref} from "vue"
const a = ref(0)
//注册滚动触发器
// gsap.registerPlugin(ScrollTrigger);
</script>

<style scoped>
.one-box{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
}
.one-ground{
    width: 3000px;
    height:100%;
    background-color: black;
    position: absolute;
    top:900px;
}
.cloud{
    position: absolute;
}
.one-cloud1{
    left:340px;
    top:200px
}
.one-cloud2{
    left:1140px;
    top:400px
}
.one-cloud3{
    left:2540px;
    top:300px
}
.one-cloud4{
    left:1940px;
    top:100px
}
.one-block1{
    left:1800px;
    top:400px
}
.one-water{
    width: 100vw;
    height:100%;
    left:3000px;
    top:1000px;
    background-color:blue;
    z-index:-1;
}
</style>
