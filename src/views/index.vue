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
      '<div class=" font-bold">山东埃姆斯物联网有限公司</div> <div class="text-slate-700">2024.4-至今</div>',
      '<div class="text-sm ">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp拖拽式大屏编辑器开发，物联网可视化平台2.0开发，微信小程序及h5开发，物联网可视化平台1.0迭代更新及维护，crm系统更新及维护。</div>',
      '<div class=" font-bold">济南西玛联合科技有限公司</div> <div class="text-slate-700">2023.9-2024.1</div>',
      '<div class="text-sm ">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp部分模块需求功能更改，配合后端修改modstartcms进行企业系统快速搭建，优化uniapp中搜索应用功能。</div>',
      '<div class=" font-bold">天津再登科技有限公司</div> <div class="text-slate-700">2022.2-2023.8</div>',
      '<div class="text-sm ">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp参与新项目开发 ，使用新技术对老项目进行迭代更新 ，将 低代码平台项目迁移到 vue3。封装管理系统公共组件 ，如基于 Element 动态表单 ，动态表格封装 ，以及项目后台模板搭建。.使用 websocket 对可视化大屏进行实时信息展示</div>',
    ],
  },
]);
const projectValue = ref([
  {
    项目名称: "大屏编辑器",
    项目时间: "2025.4-至今",
    "参考案例链接":
      '<a href="http://screen.tutouguai.cn">http://screen.tutouguai.cn(仅支持pc)</a>',
    项目描述:
      "无需编写代码即可创建和定制数据可视化大屏。用户可以从组件库中选择各种图表和控件，拖拽到画布上，并通过属性面板进行配置，最终生成一个具有交互性的数据大屏",
    运用技术: "vue3、echarts、websocket、webrtc、天地图",
    职责描述:
      "<div>1.	项目从 0-1 搭建</div><div>2.	目前已实现组件20余种</div><div>3.	自适应不同尺寸屏幕</div>",
  },
  {
    项目名称: "物联网可视化平台1.0(IDEA)-物联网可视化平台2.0(若依)",
    项目时间: "2024.4-至今",
    项目描述:
      "功能全面的管理体系，支持项目、设备、点位三级结构。用户可以轻松管理和监控多个项目和设备。在数据监控方面，用户可以随时查看各个点位的历史数据以及数据变化的历史曲线，这对设备性能的分析和故障预警极为有用。同时，软件还具备实时视频查看功能，此外，软件提供了高效的触发器功能，能够自动监控各点位的状态，当点位出现异常或预设条件时，会立即触发预警。用户可以选择通过短信或微信推送的方式接收通知，实现快速响应",
    运用技术: "(1.0:VUE2，jquery,2.0:VUE3)、echarts、websocket、webrtc、天地图",
    职责描述:
      "<div>1.	优化实时数据页面n条数据实时更新(虚拟列表+滚动位置检测轮巡更新)</div><div>2.	设备更新断点续传</div><div>3.	优化组态模块(内存泄漏、轮巡更改socket、组件添加)</div><div>4.	其他模块功能添加及bug修复(能耗分析、大屏管理、场景管理等)</div>",
  },
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
