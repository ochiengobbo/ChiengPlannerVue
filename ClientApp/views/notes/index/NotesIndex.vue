<!-- <script setup>
import DefaultLayout from '../../../components/layout/DefaultLayout.vue';
import { BootstrapVue } from "bootstrap-vue";
</script> -->
<template>
    <div id="note" class="p-5">
        <div>
            <div class="d-inline-flex w-100">
                <div id="noteTitle" class="w-75">
                </div>
                <div class="text-right w-25">
                    <a class="p-1 btn btn-light" id="editLink" href="/" style="color: #7a0696;">
                        <svg-icon type="mdi" :path="edit"></svg-icon>
                    </a>
                </div>
            </div>
            <div id="noteBody">
            </div>
        </div>

    </div>
</template>
  
<script>
import { mdiTextBoxEdit } from '@mdi/js';
import NotesEdit from '../Edit/NotesEdit.vue';
import SvgIcon from '@jamescoyle/vue-icon';
export default {
    components: {
        SvgIcon,
    },

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