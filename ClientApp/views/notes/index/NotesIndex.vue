<!-- <script setup>
import DefaultLayout from '../../../components/layout/DefaultLayout.vue';
import { BootstrapVue } from "bootstrap-vue";
</script> -->
<template>
    <div id="note" class="p-5">
        <div id="noteTitle">
            <h1></h1>
        </div>
        <div id="noteBody">
        </div>
    </div>
</template>
  
<script>

export default {
    name: "NotesIndex",
    data() {
        return {
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