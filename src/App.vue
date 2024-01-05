<script setup>
import { onMounted, ref } from "vue";

const isAppLoading = ref(true)
const checkSession = () => {
  // TODO check session
  isAppLoading.value = false;
}

onMounted(() => {
  checkSession()
})

</script>

<template>
  <router-view v-if="!isAppLoading"/>
  <div v-if="isAppLoading">Loading</div>
</template>

<style scoped>
#app {
  width: 100vw;
  height: 100vh;
  color: var(--el-text-color-primary);
}
</style>
