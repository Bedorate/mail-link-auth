<template>
  <div class="form-component">
    <div class="form-component-label">{{ form.label }}</div>
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
import PassField from "@/components/atoms/PassField.vue";

export type PropFormType = {
  id: number;
  label: string;
  value: string | number;
  formType: string;
};

export default defineComponent({
  name: "FormComponent",
  components: {
    TextField,
    PassField
  },
  props: {
    form: {
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

<style lang="scss" scoped>
.form-component {
  width: 100%;
  height: 100%;
  padding: 8px;
  &-label {
    height: 24px;
  }
}
</style>