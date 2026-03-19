<template>
    <div style="height: 9000px">
      <div
        id="mario"
        class="w-36 h-48"
        style="position: fixed; bottom: 50px; left: 45%; z-index: 999"
      ></div>
    <Three></Three>
    </div>
  </template>
  
  <script setup lang="ts">
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { onMounted, ref } from "vue";
  import Three from "@/views/gsapContent/three.vue"
  const MarioDom = ref();
  const MarioWalk = ref([0, 0]);
  const MarioWalkPosition = ref([-195, -380, -560, -745]);
  let nowPosition = 0;
  //注册滚动触发器
  gsap.registerPlugin(ScrollTrigger);
  
  onMounted(() => {
    MarioDom.value = document.getElementById("mario");
    addOneLine();
  });
  
  window.addEventListener("scroll", function (e) {
    // 在此处编写滚动时需要执行的代码
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  
    //   console.log(scrollTop);
    if (
      scrollTop - MarioWalk.value[0] > 100 ||
      MarioWalk.value[0] - scrollTop > 100
    ) {
      MarioWalk.value[0] = MarioWalk.value[1];
      MarioWalk.value[1] = scrollTop;
        walkFn(1);
    }
  });
  
  const walkFn = (type:number) => {
    if (MarioWalk.value[0] < MarioWalk.value[1]) {
      nowPosition++;
    } else {
      nowPosition--;
    }
  
    if (nowPosition > 3) {
      nowPosition = 0;
    } else if (nowPosition < 0) {
      nowPosition = 3;
    }
    //  1为行走 0为游泳
    if(type){
      MarioDom.value.style.backgroundPosition = `${MarioWalkPosition.value[nowPosition]}px -490px`;
    }else{
      MarioDom.value.style.backgroundPosition = `${MarioWalkPosition.value[nowPosition]}px -1000px`;
    }
    
  };
  
  const addOneLine = () => {
    let OneLine = gsap.timeline({
      scrollTrigger: {
        trigger: ".three-box",
        pin: true,
        start: "center center", // when the top of the trigger hits the top of the viewport
        end: "+=9000", // end after scrolling 500px beyond the start
        scrub: true,
      },
    });
    OneLine.to(".three-map", { x: -30000 + document.body.clientWidth })
  
  };
  </script>
  
  <style scoped>
  #mario {
    /* background-color: black; */
    background-image: url("@/assets/dongzuo.png");
    background-size: 2560px;
    background-repeat: no-repeat;
    background-position: -195px -490px;
  }
  </style>
  