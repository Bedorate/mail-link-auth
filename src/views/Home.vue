<template>
  <div class="page">
    <LoginForm :label="label"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginForm from '@/components/organisms/LoginForm.vue';

type mailInfo = {
  mailAdress: string;
  password:string;
  label:string;
}

export default defineComponent({
  name: 'Home',
  components:{
    LoginForm,
  },
  data():mailInfo{
    return{
      mailAdress:"",
      password:"",
      label:"登録"
    }
  },
});
</script>

<style lang="scss" scoped>
.page{
  // text-align: center;
}

</style>

