<template>
  <div v-if="editor">
    <button @click="editor.chain().focus().toggleBlockquote().run()"
      :class="{ 'is-active': editor.isActive('blockquote') }">
      toggleBlockquote
    </button>
    <button @click="editor.chain().focus().setBlockquote().run()" :disabled="!editor.can().setBlockquote()">
      setBlockquote
    </button>
    <button @click="editor.chain().focus().unsetBlockquote().run()" :disabled="!editor.can().unsetBlockquote()">
      unsetBlockquote
    </button>



    <editor-content :editor="editor" />
  </div>
</template>
  
  <script>
  import { Editor, EditorContent } from '@tiptap/vue-3'
  import StarterKit from '@tiptap/starter-kit'
  
  export default {
    components: {
      EditorContent,
    },
  
    data() {
      return {
        editor: null,
      }
    },
  
    mounted() {
      this.editor = new Editor({
        content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
        extensions: [
          StarterKit.configure({
            blockquote: true,
          }),
        ],
      })
    },
  
    beforeUnmount() {
      this.editor.destroy()
    },
  }
  </script>