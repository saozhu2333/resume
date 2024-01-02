<template>
    <div class="w-full lg:w-1/2 rounded-lg px-3 text-base font-thin">
    <!-- <div class="w-full font-medium text-xl">
      <i class="iconfont icon-hengxian fill-blue-500"></i>
      {{ props.dataTitle }}
    </div> -->
      <main class="w-full text-slate-500 list-disc pl-5">
      <slot>
        <!-- 页面内容 -->
        <ul>
            <li class="font-bold my-3">项目{{ index + 1 }}</li>
            <li class="flex" v-for="(value, key) in data" :key="key">
              <div class="w-28 mr-3 font-medium">{{ key }}</div>
              <div class="flex-1" v-html="value"></div>
            </li>
          </ul>
      </slot>
    </main>
    </div>
  </template>
  
  <script setup lang="ts">
  import {ref} from "vue"
  const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
  dataTitle: {
    type: String,
    default: '',
  },
  index: {
    type: Number,
    default: '',
  },
});
  </script>
  
  <style  module>
  
  </style>
  