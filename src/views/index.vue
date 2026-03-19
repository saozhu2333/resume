<template>

  <div id="dayin" style="position: relative; overflow: hidden;">
    <!--startprint-->
    <div  class="mx-0 lg:mx-36 xl:mx-48">
      <uHeader></uHeader>
      <div class="flex flex-wrap">
        <uContent
          v-for="item in contentValue"
          :key="item.id"
          :data="item"
        ></uContent>
        <div class="w-full font-medium text-xl mt-3 px-3">
          <i class="iconfont icon-hengxian fill-blue-500"></i>
          项目
        </div>
        <uProject
          :dataTitle="'项目'"
          v-for="(item, index) in projectValue"
          :key="item['项目名称']"
          :data="item"
          :index="index"
        ></uProject>
      </div>
    </div>
      <!--endprint-->
    <div
      style="
        position: absolute;
        right: -100px;
        bottom: 50px;
        background-color: #fff;
      "
      class="printBotton"
    >
      <button
        @click="shuaxin"
        class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        打印
      </button>
    </div>
  </div>

</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import uHeader from "@/components/header/index.vue";
import uContent from "@/components/content/index.vue";
import uProject from "@/components/content/project.vue";
import { useRouter } from 'vue-router';
import { onMounted, ref } from "vue";
//注册滚动触发器
gsap.registerPlugin(ScrollTrigger);
const router = useRouter()
const contentValue = ref([
  {
    id: "1",
    title: "专业技能",
    val: [
      "熟练使用vue2、vue3等前端框架",
      "熟练使用 uni-app 跨平台及周边生态工具库开发,熟悉微信小程序开发",
      "熟练使用 element、element Plus、echarts、datav 等常用前端组件",
      "熟练使用 Git、 svn 常用版本管理工具 npm、yarn 包管理工具",
      "熟悉后端 node.js 框架 ，express ，可以进行后端简单接口开发",
    ],
  },
  {
    id: "2",
    title: "工作经历",
    val: [
      '<div class=" font-bold">天津再登科技有限公司</div> <div class="text-slate-700">2022.2-2023.8</div>',
      '<div class="text-sm ">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp参与新项目开发 ，使用新技术对老项目进行迭代更新 ，将 低代码平台项目迁移到 vue3。封装管理系统公共组件 ，如基于 Element 动态表单 ，动态表格封装 ，以及项目后台模板搭建。.使用 websocket 对可视化大屏进行实时信息展示</div>',
      '<div class=" font-bold">济南西玛联合科技有限公司</div> <div class="text-slate-700">2023.9-2024.1</div>',
      '<div class="text-sm ">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp部分模块需求功能更改，配合后端修改modstartcms进行企业系统快速搭建，优化uniapp中搜索应用功能。</div>',
    ],
  },
]);
const projectValue = ref([
  {
    项目名称: "点点云校",
    项目时间: "2023.9-2024.1",
    项目描述:
      "该项目由济南市教育公共资源服务平台为依托，济南市市中区推广并已在部分中小学投入使用的一款微信小程序，其含有考勤请假、体温、校园动态、温泉、新生分班、快捷考场、场所预约等多种功能。",
    运用技术: "微信开发者工具、ThorUI",
    职责描述:
      "<div>1.	部分模块bug修复以及功能更新</div><div>2.	快捷考场app搜索已安装应用功能优化</div><div>3.	整合更换api接口，旧api迁移更换至新api</div>",
  },
  {
    项目名称: "耀西休闲 (个人项目移动端 h5 +app)",
    项目时间: "2023.3-至今",
    "移动端 H5 链接":
      '<a href="http://yaoxi.tutouguai.cn">http://yaoxi.tutouguai.cn</a>',
    "APP 链 接":
      '<a href="https://wwi.lanzoup.com/ic2an1k51jzc">https://wwi.lanzoup.com/ic2an1k51jzc</a>',
    项目描述:
      "该项目主要用于休闲娱乐 ，主要制作了前端方向 ，接口数据均来自网络 ，主要休闲功能含有小说、漫画、影视方面。 目前只更新了首页、简介、详情、搜索等模块内容。",
    运用技术: "uniapp 、vue2 、ES6 、aliyun-aliplayer 、uview 等",
    职责描述:
      "<div>1.	项目从 0-1 搭建 ，路由、vuex 初始化</div><div>2.	使用 nvue 提升 app 渲染章节列表提升加载速度</div><div>3.	使用懒加载处理漫画图片加载缓慢问题</div>",
  },
  {
    项目名称: "大屏展示管理系统 ",
    项目时间: "2022.11-2023.8",
    项目描述:
      "大屏展示管理系统 ，是一套集大屏数据展示以及大屏数据管理的平台 ，不同的军团车间可根据自己车间不同的实际情况做出对应的处理。主要模块划分为环境检测、安全监测、能    耗检测 ，机器设备状态检测、大屏信息管理、权限管理。",
    运用技术:
      "axios 、vue3 、ES6 、Echarts 、element plus	datav	websocket	uniapp 等",
    职责描述:
      "<div>1.	项目从 0-1 搭建 ，路由、 pinia、 axios 初始化</div><div>2.	封装部分通用组件，使用vue-i18n实现国际化</div><div>3.	使用 websocket 对大屏数据进行实时更新</div>",
  },
  {
    项目名称: "智能库房管理系统 ",
    项目时间: "2022.7-2023.8",
    项目描述:
      "该项目是一款基于 ruoyi 框架的一款库房管理系统 ，主要用于对库房物料进行计算以及各个仓库货架物料情况的展示。",
    运用技术: "axios 、vue 、ES6 、Echarts 、elementui 等",
    职责描述:
      "<div>1.  使用 echarts、制作图形化界面用来更加直观的了解库房物料数据</div><div>2.	对 elementui 中表格框架、提交修改功能进行封装</div><div>3.	使用 elementui+vue2 对 wifi 管理、集成器管理、物料管理、物料盒管理、传感器管理、等页面进行开发</div>",
  },
  {
    项目名称: "安防管理平台 ",
    项目时间: "2022.2-2023.7",
    项目描述:
      "该项目是一款 安防项目 ，是集接警中心、智慧安防、智慧消防、ai 智能应用、  中心值班管理、 日常安全管理、业务联动、APP 应用、大数据、系统维护等功能于一体的综合化管理平台。",
    运用技术:
      "HTML 、CSS 、JavaScript 、axios 、vue 、ES6 、Echarts 、elementui 等",
    职责描述:
      "<div>1.  对协查管理模块进行接口联调</div><div>2.	对抓拍管理模块进行开发</div><div>3.  对已经开发完成的部分模块进行维护更新</div>",
  },
]);
onMounted(() => {
  addBottonLine();
  if(localStorage.getItem("print-type")){
    doPrint()
    localStorage.removeItem("print-type");
  }
});
const addBottonLine = () => {
  let bottonLine = gsap.timeline({
    scrollTrigger: {
      trigger: "body",
      pin: true,
      start: "bottom bottom", // when the top of the trigger hits the top of the viewport
      end: "+=100", // end after scrolling 500px beyond the start
      scrub: true,
    },
  });
  bottonLine.to(".printBotton", { x: -200 });
};
const shuaxin=() => {
  localStorage.setItem("print-type", JSON.stringify('print'));
  location.reload()
}
function doPrint() {
      // let oldStr = document.getElementsByTagName('body')[0].innerHTML // 获取body的内容，作为缓存，调用打印功能后重新渲染
      // let start = "<!--startprint-->"; // 开始打印标识, 17个字符
      // let end = "<!--endprint-->"; // 结束打印标识
      // let newStr = oldStr.substr(oldStr.indexOf(start) + 17); // 截取开始打印标识之后的内容
      // newStr = newStr.substring(0, newStr.indexOf(end)); // 截取开始打印标识和结束打印标识之间的内容
      // document.getElementsByTagName('body')[0].innerHTML = newStr; // 把需要打印的指定内容赋给body
      window.print(); // 调用浏览器的打印功能打印指定区域
      // document.getElementsByTagName('body')[0].innerHTML = oldStr; // body替换为原来的内容
}
</script>

<style>
@media print {
  body{
    width: 1000px !important;
    height: auto !important;
    /* zoom: 1.3; */
    /* height: auto !important; */
  }
  
}
.page {
    page-break-after: always;
  }
</style>
