import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import { initializeApp } from "firebase/app"
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA_kXW_feqxBLTYPL0X_88bYPI2Rv4C7yI",
    authDomain: "clothes-store-618d7.firebaseapp.com",
    projectId: "clothes-store-618d7",
    storageBucket: "clothes-store-618d7.appspot.com",
    messagingSenderId: "640160757824",
    appId: "1:640160757824:web:7ca052710a891af20e47a5"
  };
  
  let defaultProject = initializeApp(firebaseConfig)
  export let defaultStorage = getStorage(defaultProject)


const pinia = createPinia()

createApp(App).use(pinia).use(router).mount('#app')
