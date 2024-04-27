import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: 'AIzaSyD8jMDQA8GCUPDO6rHDlusDmE0j-0dQco0',
    authDomain: 'clothes-3e23b.firebaseapp.com',
    projectId: 'clothes-3e23b',
    storageBucket: 'clothes-3e23b.appspot.com',
    messagingSenderId: '751534893657',
    appId: '1:751534893657:web:bf34b8285a981e68b29f48',
}


initializeApp(firebaseConfig)

const pinia = createPinia()

createApp(App).use(pinia).use(router).mount('#app')
