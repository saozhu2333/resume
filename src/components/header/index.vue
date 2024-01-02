<template>
  <div class="flex">
    <div class="w-full lg:w-1/2 h-full hidden lg:block" >
      <!-- <object class="h-40" id="marioOne" :data="MarioSVG" type="image/svg+xml"></object> -->
      <!-- <iframe class="h-40" id="marioOne" :src="MarioSVG" frameborder="0"></iframe> -->
      <div class="w-full h-full lg:block"  style="display: flex; justify-content: space-around; transform-style: preserve-3d; perspective: 500px; ">
        <img class="h-40" id="mario" src="@/assets/Mario.png" style="  transform-style: preserve-3d;" alt="" >
      <MarioSVG class="h-40" id="marioOne"></MarioSVG>
      </div>
      
    </div>
    <div
      class="w-full lg:w-1/2 h-full bg-gradient-to-r from-sky-500 to-indigo-500"
    >
      <div class="flex space-x-16 items-center mx-5 py-3 text-white">
        <h1 class="text-5xl">姓名</h1>
        <span class="text-xl text-right">前端工程师</span>
      </div>
      <hr
        class="mx-5"
        style="background-color: white; height: 2px; border: none"
      />
      <div class="flex flex-wrap">
        <ul class="w-full lg:w-1/2 pl-5 py-3 text-white">
          <li>男/1999/河北衡水</li>
          <li>河北北方学院/本科/2022</li>
          <li>经验：2022.2-至今</li>
          <li>电话：15133876896</li>
          <li>邮箱：2233720980@qq.com</li>
        </ul>
        <ul class="w-full lg:w-1/2 pl-5 py-3 text-white">
          <li class="hover:text-slate-300">
            <a href="https://juejin.cn/user/4330325551357245"
              ><text class="iconfont icon-juejin text-base mr-3"></text>
              掘金主页</a
            >
          </li>
          <li class="hover:text-slate-300">
            <a href="http://blog.tutouguai.cn/"
              ><text class="iconfont icon-boke text-xl mr-3"></text>个人博客</a
            >
          </li>
          <li class="hover:text-slate-300">
            <a href=""
              ><text class="iconfont icon-zuopin text-xl mr-3"></text
              >个人作品1</a
            >
          </li>
          <li class="hover:text-slate-300">
            <a href=""
              ><text class="iconfont icon-zuopin text-xl mr-3"></text
              >个人作品2</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MarioSVG from "@/components/svg/marioSvg.vue"
import { idText } from "typescript";
import { onMounted, ref } from "vue";
const mario = ref()
const marioOne = ref()
let Xdeg = 0
let Ydeg = 0

onMounted(()=>{
  mario.value = document.getElementById('mario');
  marioOne.value = document.querySelector('#marioOne');
  Xdeg = document.body.scrollWidth / 30
  Ydeg = document.body.scrollHeight / 30
  searchChild(marioOne.value.childNodes[0].childNodes)
})


document.addEventListener('mousemove', function(event) {
  var mouseX = event.clientX;
  var mouseY = event.clientY;
  
  marioOne.value.style.transform=`rotateY(${(mouseX - marioOne.value.offsetLeft - (marioOne.value.offsetWidth / 2))/Xdeg}deg) rotateX(${-(mouseY - marioOne.value.offsetTop - (marioOne.value.offsetHeight / 2)) /Ydeg}deg)`;
  mario.value.style.transform=`rotateY(${(mouseX - mario.value.offsetLeft - (mario.value.offsetWidth / 2))/Xdeg}deg) rotateX(${-(mouseY - mario.value.offsetTop - (mario.value.offsetHeight / 2)) /Ydeg}deg)`;
});

const searchChild = (ele: NodeListOf<HTMLElement>)=>{
  if(!ele.length) return 
  ele.forEach( res => {
    if(res.nodeName == 'rect'){
      console.log(res.getTotalLength());
      res.style.stroke = res.style.fill
      res.style.fill = 'none'
      // res.getTotalLength()
      res.style.strokeWidth = '8.4666615'
      res.style.strokeDasharray = `${res.getTotalLength()}`
      res.style.strokeDashoffset = `${res.getTotalLength()}`
      res.style.setProperty('--l', res.getTotalLength()/4*3)
      res.style.strokeOpacity = '1'
      res.style.animation = 'stroke 2s forwards'
    }
    if(res.childNodes.length > 0) searchChild(res.childNodes as NodeListOf<HTMLElement>)
  });
}
</script>

<style>
@keyframes stroke {
  to{
    stroke-dashoffset:var(--l);
  }
}
</style>
