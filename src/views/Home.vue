<template>
  <div class="page">
    <LoginForm />
    <div class="massage" v-if="!isPush">
      {{mailAdress}}に{{password}}を送信しました。
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginForm from '@/components/organisms/LoginForm.vue';

type mailInfo = {
  mailAdress: string;
  password:string;
  isPush:boolean;
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
      isPush:false,
    }
  }
});
</script>

<style lang="scss" scoped>
.massage {
  padding: 50px 100px 0px 100px;
}
</style>

