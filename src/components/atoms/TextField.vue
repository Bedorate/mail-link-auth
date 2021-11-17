<template>
  <input type="text" :placeholder="label" v-model="innerValue" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TextField",
  props: {
    value: {
      type: String,
      required: true,
    },
    id: Number,
    label: {
      type: String,
      default: "",
    },
  },
  computed: {
    innerValue: {
      get(): String | undefined {
        return this.value;
      },
      set(value: string) {
        this.$emit("change-value", value, this.id);
      },
    },
  },
});
</script>

<style lang="scss" scoped>
input[type="text"] {
  font-size: 20px;
  width: 100%;
  height: 32px;
  color: black;
  background-color: white;
  border: 2px solid black;
  outline: none;
}
</style>