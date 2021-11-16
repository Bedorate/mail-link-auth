<template>
  <div>
    <FormComponent
      v-for="form in logInDataList"
      :key="form.id"
      :form="form"
      @change-value="changeFormValue"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import FormComponent from "@/components/molecules/FormComponent.vue";

export default defineComponent({
  name: "LoginForm",
  components: {
    FormComponent,
  },
  data() {
    return {
      logInDataList: [
        {
          formType: "TextField",
          value: "",
          label: "メールアドレス",
          id: "1",
        },
        {
          formType: "PassField",
          value: "",
          label: "メールアドレス",
          id: "1",
        },
      ],
    };
  },
  methods: {
    changeFormValue(value:string, id:number) {
      this.logInDataList[id - 1].value = value;
    },
  },
});
</script>

<style>
</style>