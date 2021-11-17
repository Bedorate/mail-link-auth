<template>
  <div class="form">
    <div class="form-component">
      <FormComponent
        v-for="form in logInDataList"
        :key="form.id"
        :form="form"
        @change-value="changeFormValue"
      />
    </div>
    <div class="common-button">
      <CommonButton :label="sendButtonLabel" />
    </div>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import FormComponent from "@/components/molecules/FormComponent.vue";
import CommonButton from "@/components/atoms/CommonButton.vue";

export default defineComponent({
  name: "LoginForm",
  components: {
    FormComponent,
    CommonButton,
  },
  data() {
    return {
      logInDataList: [
        {
          formType: "TextField",
          value: "",
          label: "メールアドレス",
          id: 1,
        },
        {
          formType: "PassField",
          value: "",
          label: "パスワード",
          id: 2,
        },
      ],
      sendButtonLabel: "パスを送る",
    };
  },
  methods: {
    changeFormValue(value: string, id: number) {
      this.logInDataList[id - 1].value = value;
    },
  },
});
</script>

<style lang="scss" scoped>
.form {
  &-component {
    padding: 50px 100px 0px 100px;
  }
}
.common-button{
  padding:50px 200px 0px 400px; 
}
</style>