<template>
  <div class="form">
    <div class="form-component">
      <FormComponent
        v-for="form in logInDataList"
        :key="form.id"
        :form="form"
        @change-value="changeFormValue"
      />
      <div class="common-button">
        <CommonButton :label="sendButtonLabel" @click-event="showPass"/>
        <div v-if="isPush">
          {{logInDataList[0].value}}に、
          <br>
          パスワード『{{logInDataList[1].value}}』を送信しました。
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import FormComponent,{PropFormType as ILogInDataList,} from "@/components/molecules/FormComponent.vue";
import CommonButton from "@/components/atoms/CommonButton.vue";

type ILogInDataType = {
  logInDataList:ILogInDataList[];
  sendButtonLabel:string;
  isPush:boolean;
}; 

export default defineComponent({
  name: "LoginForm",
  components: {
    FormComponent,
    CommonButton,
  },
  data() :ILogInDataType {
    return {
      logInDataList: [
        {
          id: 1, 
          label: "メールアドレス",
          value: "",
          formType: "TextField",
        },
        {
          id: 2,
          label: "パスワード",
          value: "",
          formType: "PassField",
        },
      ],
      sendButtonLabel: "パスを送る",
      isPush:false,
    };
  },
  methods: {
    changeFormValue(value: string, id: number) {
      this.logInDataList[id - 1].value = value;
    },
    showPass(){
      (this as any).isPush = true;
    }
  },
});
</script>

<style lang="scss" scoped>
.form {
  &-component {
    padding: 50px 100px 0px 100px;
  }
}
.common-button {
  padding: 50px 100px 0px 100px;
}
</style>