<script setup lang="ts">
import { RouterView } from 'vue-router'
import router from './router';
import { onMounted } from 'vue';

const homePage = () => {
  router.push("/log/select")
}

onMounted(()=>{
  homePage()
})
</script>

<template>
  <RouterView />
</template>