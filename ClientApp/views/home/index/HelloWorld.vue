<script setup>
import DefaultLayout from '../../../components/layout/DefaultLayout.vue';
import { BootstrapVue } from "bootstrap-vue";
</script>
<template>
  <default-layout>
    <b-container class="test-global-css test-scoped-css">
      Hello {{ name }} from Vue!
      <img src="../../../assets/images/highwaystar.png">
      <pre class="text-white">
        {{ JSON.stringify(vm, null, 2) }}
      </pre>
    </b-container>
  </default-layout>
</template>
  
  <script>
  export default {
    name: "HelloWorld",
    data() {
      return {
        name: "world",
        vm: vm,
      }
    },
  }
  </script>
  
  <style scoped lang="scss">
  $fontColor: #fff;
  .test-scoped-css {
    color: $fontColor;
  }
  </style>