import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAHKrtuyW_KxcxBg1OsqGo2nITS4rAy-L0",
  authDomain: "mail-link-auth.firebaseapp.com",
  projectId: "mail-link-auth",
  storageBucket: "mail-link-auth.appspot.com",
  messagingSenderId: "68096273669",
  appId: "1:68096273669:web:84271a4e4cb9906ddddb6c",
  measurementId: "G-641DTLZG33"
};
firebase.initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount('#app')
