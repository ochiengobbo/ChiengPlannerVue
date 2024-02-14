import * as Vue from 'vue'
import HelloWorld from "./HelloWorld.vue";
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.js'

Vue.createApp(HelloWorld).use(bootstrap).mount('#app');