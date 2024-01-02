<template>
  <div>
    <uHeader></uHeader>
    <div class=" flex flex-wrap">
      <uContent
        v-for="item in contentValue"
        :key="item.id"
        :data="item"
      ></uContent>
      <div class="w-full font-medium text-xl mt-3">
      <i class="iconfont icon-hengxian fill-blue-500"></i>
      项目
    </div>
      <uProject :dataTitle="'项目'"  
      v-for="(item,index) in projectValue"
        :key="item['项目名称']"
        :data="item"
        :index="index"></uProject>
    </div>
  </div>
</template>

<script setup lang="ts">
import uHeader from "@/components/header/index.vue";
import uContent from "@/components/content/index.vue";
import uProject from "@/components/content/project.vue";
import { ref } from "vue";
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
    项目时间: "2022.3-至今",
    "移动端 H5 链接":
      '<a href="http://yaoxi.tutouguai.cn">http://yaoxi.tutouguai.cn</a>',
    "APP 链 接":
      '<a href="https://wwi.lanzoup.com/iV7bA0z3zc8j">https://wwi.lanzoup.com/iV7bA0z3zc8j</a>',
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
]);
</script>

<style module></style>
