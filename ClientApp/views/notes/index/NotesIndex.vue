<template>
  <div id="app">
    <div class="container mx-auto" style="margin-top: 2rem; margin-bottom: 2rem;">
      <input class="mx-auto form-control-lg inputGroup-sizing-lg border border-secondary border-1" type="text"
        placeholder="Title" id="noteTitle" style="width: -webkit-fill-available;" />
    </div>
    <editor v-model="content" />
    <div class="container mx-auto" style="margin-top: 2rem; margin-bottom: 2rem;">
      <button id="saveNote" class="btn btn-outline-dark p-1">Save</button>
    </div>
  </div>
</template>

<script>
import Editor from '../../../components/Editor.vue'

export default {
  name: "NotesIndex",
  components: { Editor },

  data() {
    return {
      content: '<p>A Vue.js wrapper component for tiptap to use <code>v-model</code>.</p>',
    }
  },
}
</script>


<style lang="scss">
/* Basic editor styles */
.tiptap {
  >*+* {
    margin-top: 0.75em;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  //border-radius: 10px;
}

.tiptap.ProseMirror-focused {
    outline: none !important;
    border-color: #6c757d !important;
  }

button {
  background-color: unset;
  padding-block: unset;
  padding-inline: unset;
}

blockquote {
  padding-left: 1rem;
  border-left: 3px solid rgba(#0D0D0D, 0.1);
}

// .content {
//   padding: 1rem 0 0;

//   h3 {
//     margin: 1rem 0 0.5rem;
//   }

//   pre {
//     border-radius: 5px;
//     color: #333;
//   }

//   code {
//     display: block;
//     white-space: pre-wrap;
//     font-size: 0.8rem;
//     padding: 0.75rem 1rem;
//     background-color:#e9ecef;
//     color: #495057;
//   }
// }
</style>