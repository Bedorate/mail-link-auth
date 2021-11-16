<template>
  <div class="global-header">
    <div class="global-header-left">
      <div class="global-header-left-icon" >
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
      width: 36px;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
}
.auth-button {
  display: flex;
  align-items: center;
  &-left {
    font-size: 15px;
    color: orange;
    background-color: orange;
    display: flex;
    border: none;
    padding: 0px 8px;
    cursor: pointer;
  }
  &-right {
    font-size: 15px;
    color: orange;
    background-color: orange;
    display: flex;
    border: none;
    border-left: 1px solid orange;
    padding: 0px 8px;
    cursor: pointer;
  }

  .header-icon {
    width: 40px;
    height: 40px;
    margin-right: 8px;
  }
}
</style>