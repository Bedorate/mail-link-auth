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
        <CommonButton :label="label" @click-event="sendMail" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import FormComponent, {
  PropFormType as ILogInDataList,
} from "@/components/molecules/FormComponent.vue";
import CommonButton from "@/components/atoms/CommonButton.vue";

type ILogInDataType = {
  logInDataList: ILogInDataList[];
  isPush: boolean;
};

export default defineComponent({
  name: "LoginForm",
  components: {
    FormComponent,
    CommonButton,
  },
  props:{
    label: {
      //ボタンの中に表示する文字列
      type: String,
      required: true,
    },
  },
  data(): ILogInDataType {
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
      isPush: false,
    };
  },
  methods: {
    changeFormValue(value: string, id: number) {
      this.logInDataList[id - 1].value = value;
    },
    sendMail() {
      (this as any).isPush = true;
      (this as any).$router.push("/complete");
      // (this as any).$store.dispatch("auth/signUp",{
      //   id: this.logInDataList[0].value,
      //   password: this.logInDataList[1].value,
      // })
      (this as any).$store.dispatch(
        "auth/fetchSignIn",
        this.logInDataList[0].value
      );
      (this as any).$store.dispatch("auth/sendSignInLinkToEmail",this.logInDataList[0].value)
    },
  },
});
</script>

<style lang="scss" scoped>
.form {
  &-component {
    margin: 0 auto;
    width: 400px;
    padding-top: 50px;
  }
}
.common-button {
  width: 386px;
  padding-top: 30px;
  padding-left: 200px;
}
</style>