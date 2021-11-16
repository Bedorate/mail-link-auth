<template>
  <div class="app">
    <GlobalHeader />
    <router-view />
  </div>
</template>

<script lang="ts">
import GlobalHeader from "@/components/layouts/GlobalHeader.vue";

export default {
  name: "App",
  components: {
    GlobalHeader,
  },
};
</script>

<style lang="scss">
html,
body,
.app{
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: black;
}
</style>