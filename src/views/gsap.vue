<template>
  <div style="height: 9000px">
    <div
      id="mario"
      class="w-36 h-48"
      style="position: fixed; top: 700px; left: 45%; z-index: 999"
    ></div>
    <One></One>
    <Two></Two>
    <!-- <div class="one-box">
    <div class="one-ground"></div> -->
    <!-- </div> -->
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, ref } from "vue";
import One from "@/views/gsapContent/one.vue";
import Two from "@/views/gsapContent/two.vue";
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
    console.log(scrollTop);
    if(scrollTop>1163 && scrollTop<8588){
      walkFn(0);
    }else{
      walkFn(1);
    }
    
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
      trigger: ".one-box",
      pin: true,
      start: "center center", // when the top of the trigger hits the top of the viewport
      end: "+=3000", // end after scrolling 500px beyond the start
      scrub: true,
    },
  });
  OneLine.to(".one-ground", { x: -3000 })
    .to(".one-cloud1", { x: -3000 }, "<")
    .to(".one-cloud2", { x: -3000 }, "<")
    .to(".one-cloud3", { x: -3000 }, "<")
    .to(".one-cloud4", { x: -3000 }, "<")
    .to(".one-block1", { x: -3000 }, "<")
    .to(".one-water", { x: -3000 }, "<")
    .to(".one-ground", { y: -900 }, "-=0.28")
    .to(".one-water", { y: -900 }, "<");

  let TwoLine = gsap.timeline({
    scrollTrigger: {
      trigger: ".two-box",
      pin: true,
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: "+=9000", // end after scrolling 500px beyond the start
      scrub: true,
    },
  });

  TwoLine.to(".two-water", { x: -(4000 - document.body.clientWidth) }, "<")
    .to(".two-water-right", { x: -(4000 - document.body.clientWidth), y: 0  }, "<")
    .to(".two-water-right", { x: -(4000 - document.body.clientWidth)-700, y: 1000 }, "-=0.1")
    .to(".two-water", { x: -(4000 - document.body.clientWidth)-700,y: 1000 }, "<").add("endright").to(".two-water-right", { x: -5000 }, ">")
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
