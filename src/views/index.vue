<template>
  <div class="w-full h-auto">
    <div class="grid h-full py-8 px-96 xl:grid-cols-12   xl:gap-5  grid-cols-5 gap-3 ">
        <div class="w-full h-96 xl:row-span-6 xl:col-span-5 bg-black"></div>

        <div class="w-full h-96 xl:row-span-6 xl:col-span-7 grid  gap-1">
        <div class="w-full  xl:row-span-6 xl:col-span-2 bg-black"></div>
        <div class="w-full  xl:row-span-3 xl:col-span-1 bg-black"></div>
        <div class="w-full  xl:row-span-3 xl:col-span-1 bg-black"></div>
        <div class="w-full  xl:row-span-3 xl:col-span-1 bg-black"></div>
        <div class="w-full  xl:row-span-3 xl:col-span-1 bg-black"></div>
        </div>
        
        <div class="w-full h-36 xl:row-span-2 xl:col-span-12 bg-black">
        </div>
        <div class="w-full h-36 xl:row-span-2 xl:col-span-12 bg-black"></div>
        <div class="w-full h-36 xl:row-span-2 xl:col-span-12 bg-black"></div>
        <div class="w-full h-36 xl:row-span-2 xl:col-span-12 bg-black"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const a = ref(0);
</script>

<style scoped></style>
