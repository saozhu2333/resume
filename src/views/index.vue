<template>
  <div class="w-full h-auto bg-slate-100" style="overflow: auto;">
    <div class="grid h-full my-8 mx-96 xl:grid-cols-12   xl:gap-5  grid-cols-5 gap-1 bg-white">
        <div class="w-full 2xl:h-60 xl:h-96 xl:row-span-6 xl:col-span-5 rounded-lg " ></div>

        <div class="w-full 2xl:h-60 xl:h-96 xl:row-span-6 xl:col-span-7 bg-gradient-to-r from-sky-500 to-indigo-500">
          <div class="flex space-x-16 items-center mx-5 py-3 text-white"> <h1 class="text-5xl ">姓名</h1> <span  class="text-xl text-right">前端工程师</span></div>
          <hr class="mx-5" style="background-color: white;height:2px; border:none;">
          <div class="2xl:flex" style="justify-content: space-between;">
            <ul class="mx-5 py-3 text-white">
            <li>男/1999/河北衡水</li>
            <li>本科/2022</li>
            <li>经验：2022.2-至今</li>
            <li>电话：15133876896</li>
            <li>邮箱：2233720980@qq.com</li>
          </ul>
          <ul class="mx-5 py-3 text-white">
            <li class="hover:text-slate-300"><a href="https://juejin.cn/user/4330325551357245"><text  class="iconfont icon-juejin text-base mr-3"></text > 掘金主页</a></li>
            <li class="hover:text-slate-300"><a href="http://blog.tutouguai.cn/"><text  class="iconfont icon-boke text-xl mr-3"></text >个人博客</a></li>
            <li class="hover:text-slate-300"><a href=""><text  class="iconfont icon-zuopin text-xl mr-3"></text >个人作品1</a></li>
            <li class="hover:text-slate-300"><a href=""><text  class="iconfont icon-zuopin text-xl mr-3"></text >个人作品2</a></li>
          </ul>
          </div>
          
        </div>
        <div class="xl:row-span-8 xl:col-span-12 flex  flex-wrap">
          <div class=" md:w-full xl:w-1/2  2xl:h-44 xl:h-40 rounded-lg px-3 text-base font-thin" >
            <div class="w-full font-medium text-xl"><i class="iconfont icon-hengxian fill-blue-500"></i> 专业技能 </div>
            <ul class="text-slate-500 list-disc pl-5">
              <li class="hover:bg-slate-100 cursor-grab">熟练使用vue2、vue3等前端框架</li>
              <li class="hover:bg-slate-100 cursor-grab">熟练使用 uni-app 跨平台及周边生态工具库开发,熟悉微信小程序</li>
              <li class="hover:bg-slate-100 cursor-grab">熟练使用 element、element Plus、echarts、datav 等常用前端组件</li>
              <li class="hover:bg-slate-100 cursor-grab">熟练使用 Git、 svn 常用版本管理工具 npm、yarn 包管理工具</li>
              <li class="hover:bg-slate-100 cursor-grab">熟悉后端 node.js 框架 ，express ，可以进行后端简单接口开发</li>
            </ul>
          </div>
          <div class=" md:w-full xl:w-1/2  rounded-lg  px-3 text-base font-thin 2xl:mr-0">
            <div class="w-full font-medium text-xl"><i class="iconfont icon-hengxian fill-blue-500"></i> 工作经历 </div>
            <ul class="text-slate-500 list-disc pl-5">
              <li class="hover:bg-slate-100 cursor-grab flex" style="justify-content: space-between;"><div>天津再登科技有限公司</div> <div>2022.2-2023.8</div></li>
              <li class="hover:bg-slate-100 cursor-grab flex" style="justify-content: space-between;"><div>济南西玛联合科技有限公司</div> <div>2022.9-2024.1</div></li>
            </ul>
          </div>
          <div class="w-1/2 2xl:h-44 xl:h-40 rounded-lg  px-3 text-base font-thin">
            <div class="w-full font-medium text-xl"><i class="iconfont icon-hengxian fill-blue-500"></i> 专业技能 </div>
            <ul class="text-slate-500 list-disc pl-5">
              <li>熟练使用vue2、vue3等前端框架</li>
              <li>熟练使用 uni-app 跨平台及周边生态工具库开发,熟悉微信小程序</li>
              <li>熟练使用 element、element Plus、echarts、datav 等常用前端组件</li>
              <li>熟练使用 Git、 svn 常用版本管理工具 npm、yarn 包管理工具</li>
              <li>熟悉后端 node.js 框架 ，express ，可以进行后端简单接口开发</li>
            </ul>
          </div>
          <div class="w-1/2 2xl:h-44 xl:h-40 rounded-lg  px-3 text-base font-thin">
            <div class="w-full font-medium text-xl"><i class="iconfont icon-hengxian fill-blue-500"></i> 专业技能 </div>
            <ul class="text-slate-500 list-disc pl-5">
              <li>熟练使用vue2、vue3等前端框架</li>
              <li>熟练使用 uni-app 跨平台及周边生态工具库开发,熟悉微信小程序</li>
              <li>熟练使用 element、element Plus、echarts、datav 等常用前端组件</li>
              <li>熟练使用 Git、 svn 常用版本管理工具 npm、yarn 包管理工具</li>
              <li>熟悉后端 node.js 框架 ，express ，可以进行后端简单接口开发</li>
            </ul>
          </div>
        </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const a = ref(0);
</script>

<style scoped>

</style>
