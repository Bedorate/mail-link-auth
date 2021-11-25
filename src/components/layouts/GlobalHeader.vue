<template>
  <div class="global-header">
    <div class="global-header-left">
      <div class="global-header-left-icon">
        <router-link to="/">登録</router-link>
        /
        <router-link to="/signin">サインイン</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GlobalHeader",
});
</script>

<style lang="scss" scoped>
.global-header {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 72px;
  background: orange;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px 0px 8px;

  &-left {
    display: grid;
    grid-template-columns: 36px auto;
    column-gap: 8px;
    &-icon {
      width: 200px;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>