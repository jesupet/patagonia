import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './assets/css/sass/style.css'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_2wzt86JePD_AnA8sYvLGLZ37mc_DtO4",
  authDomain: "futuro-patagonia.firebaseapp.com",
  projectId: "futuro-patagonia",
  storageBucket: "futuro-patagonia.appspot.com",
  messagingSenderId: "588386536949",
  appId: "1:588386536949:web:ba072538e9a01647b1a4bc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

createApp(App).use(store).use(router).use(app).use(db).mount('#app')
