<template>
  <div class="w-full lg:w-1/2 rounded-lg px-3 mt-3 text-base font-thin">
    <div class="w-full font-medium text-xl">
      <i class="iconfont icon-hengxian fill-blue-500"></i>
      {{ props.data.title }}
    </div>
    <slot>
      <ul class="text-slate-500 list-disc pl-5">
        <li
          class="hover:bg-slate-100 cursor-grab flex"
          style="justify-content: space-between"
          v-for="item in props.data.val"
          :key="item"
          v-html="item"
        ></li>
      </ul>
    </slot>
    
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
});
const a = ref(0);
</script>

<style module></style>
