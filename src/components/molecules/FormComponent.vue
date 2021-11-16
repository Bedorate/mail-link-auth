<template>
  <div class="form-component">
    <div class="form-component-label">
      {{ form.label }}
    </div>
    <component
      :is="form.formType"
      :value="form.value"
      :id="form.id"
      @change-value="changeValue"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import TextField from "@/components/atoms/TextField.vue";

export type PropFormType = {
  id: number;
  label: string;
  value: string;
  formType: string;
};
export default defineComponent({
  name: "FormComponent",
  component: {
    TextField,
  },
  props: {
    form: {
      //フォームのデータ
      type: Object as PropType<PropFormType>,
      required: true,
    },
  },
  methods: {
    changeValue(value: string | number, key: number) {
      this.$emit("change-value", value, key);
    },
  },
});
</script>

<style>
</style>