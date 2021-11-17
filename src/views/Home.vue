<template>
  <div class="page">
    <LoginForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginForm from '@/components/organisms/LoginForm.vue';

export default defineComponent({
  name: 'Home',
  components:{
    LoginForm,
  }
});
</script>

<style lang="scss" scoped>

</style>

