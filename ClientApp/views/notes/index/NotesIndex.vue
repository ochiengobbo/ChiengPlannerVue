<!-- <script setup>
import DefaultLayout from '../../../components/layout/DefaultLayout.vue';
import { BootstrapVue } from "bootstrap-vue";
</script> -->
<template>
    <div id="note" class="p-5">
        <div>
            <a class="p-1 btn btn-light" href="Notes/Edit?Id=" + {{ notesId }}>
                <svg-icon type="mdi" :path="edit"></svg-icon>
            </a>
        </div>
        <div id="noteTitle">
            <h1></h1>
        </div>
        <div id="noteBody">
        </div>
    </div>
</template>
  
<script>
import { mdiTextBoxEdit } from '@mdi/js';
import NotesEdit from '../Edit/NotesEdit.vue';
export default {
    name: "NotesIndex",
    data() {
        return {
            edit: mdiTextBoxEdit,
            notesId: notesId,
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