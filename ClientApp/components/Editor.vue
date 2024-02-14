<template>
    <div v-if="editor" class="container mx-auto" style="margin-top: 2rem; margin-bottom: 2rem;">
        <bubble-menu :editor="editor" :tippy-options="{ duration: 100 }" v-if="editor">
            <section class="buttons flex align-items-center flex-wrap gap-4 border border-1 p-4 bg-light">
                <div class="d-sm-inline-flex p-4" id="rightBorder">
                    <input type="text" placeholder="Place URL Here" id="hyperLinkUrl" />
                    <button class="btn btn-light" @click="setLink">
                        <svg-icon type="mdi" :path="setupLink"></svg-icon>
                    </button>
                </div>
                <div class="d-sm-inline-flex p-4">
                    <button @click="editor.chain().focus().toggleBold().run()"
                        :class="{ 'btn-secondary': editor.isActive('bold'), 'btn-light': !editor.isActive('bold') }"
                        class="btn p-1">
                        <svg-icon type="mdi" :path="bold"></svg-icon>
                    </button>
                    <button @click="editor.chain().focus().toggleCode().run()"
                        :class="{ 'btn-secondary': editor.isActive('code'), 'btn-light': !editor.isActive('code') }"
                        class="btn p-1">
                        <svg-icon type="mdi" :path="code"></svg-icon>
                    </button>
                    <button @click="editor.chain().focus().toggleItalic().run()"
                        :class="{ 'btn-secondary': editor.isActive('italic'), 'btn-light': !editor.isActive('italic') }"
                        class="btn p-1">
                        <svg-icon type="mdi" :path="italic"></svg-icon>
                    </button>
                    <button @click="editor.chain().focus().toggleStrike().run()"
                        :class="{ 'btn-secondary': editor.isActive('strike'), 'btn-light': !editor.isActive('strike') }"
                        class="btn p-1">
                        <svg-icon type="mdi" :path="strike"></svg-icon>
                    </button>
                    <button @click="editor.chain().focus().toggleSubscript().run()"
                        :class="{ 'btn-secondary': editor.isActive('subscript'), 'btn-light': !editor.isActive('subscript') }"
                        class="btn p-1">
                        <svg-icon type="mdi" :path="sub"></svg-icon>
                    </button>
                    <button @click="editor.chain().focus().toggleSuperscript().run()"
                        :class="{ 'btn-secondary': editor.isActive('superscript'), 'btn-light': !editor.isActive('superscript') }"
                        class="btn p-1">
                        <svg-icon type="mdi" :path="sup"></svg-icon>
                    </button>
                </div>
            </section>
        </bubble-menu>
        <section class="buttons align-items-center flex-wrap gap-4 border border-1 p-4 bg-light border-secondary" id="toolbarMenu" style="/*border-radius: 10px;*/">
            <div class="d-sm-inline-flex p-4" id="rightBorder">
                <button @click="editor.chain().focus().toggleBlockquote().run()"
                    :class="{ 'btn-secondary': editor.isActive('blockquote'), 'btn-light': !editor.isActive('blockquote') }"
                    class="btn p-1">
                    <svg-icon type="mdi" :path="quote"></svg-icon>
                </button>
                <button @click="editor.chain().focus().toggleCodeBlock().run()"
                    :class="{ 'btn-secondary': editor.isActive('codeBlock'), 'btn-light': !editor.isActive('codeBlock') }"
                    class="btn p-1">
                    <svg-icon type="mdi" :path="block"></svg-icon>
                </button>
                <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
                    :class="{ 'btn-secondary': editor.isActive('heading', { level: 1 }), 'btn-light': !editor.isActive('heading', { level: 1 }) }"
                    class="btn p-1">
                    <svg-icon type="mdi" :path="headOne"></svg-icon>
                </button>
                <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
                    :class="{ 'btn-secondary': editor.isActive('heading', { level: 2 }), 'btn-light': !editor.isActive('heading', { level: 2 }) }"
                    class="btn p-1">
                    <svg-icon type="mdi" :path="headTwo"></svg-icon>
                </button>
                <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
                    :class="{ 'btn-secondary': editor.isActive('heading', { level: 3 }), 'btn-light': !editor.isActive('heading', { level: 3 }) }"
                    class="btn p-1">
                    <svg-icon type="mdi" :path="headThree"></svg-icon>
                </button>
                <button @click="editor.chain().focus().toggleBold().run()"
                    :class="{ 'btn-secondary': editor.isActive('bold'), 'btn-light': !editor.isActive('bold') }"
                    class="btn p-1">
                    <svg-icon type="mdi" :path="bold"></svg-icon>
                </button>
                <button @click="editor.chain().focus().toggleItalic().run()"
                    :class="{ 'btn-secondary': editor.isActive('italic'), 'btn-light': !editor.isActive('italic') }"
                    class="btn p-1">
                    <svg-icon type="mdi" :path="italic"></svg-icon>
                </button>
                <button @click="editor.chain().focus().toggleStrike().run()"
                    :class="{ 'btn-secondary': editor.isActive('strike'), 'btn-light': !editor.isActive('strike') }"
                    class="btn p-1">
                    <svg-icon type="mdi" :path="strike"></svg-icon>
                </button>
                <button @click="editor.chain().focus().toggleSubscript().run()"
                    :class="{ 'btn-secondary': editor.isActive('subscript'), 'btn-light': !editor.isActive('subscript') }"
                    class="btn p-1">
                    <svg-icon type="mdi" :path="sub"></svg-icon>
                </button>
                <button @click="editor.chain().focus().toggleSuperscript().run()"
                    :class="{ 'btn-secondary': editor.isActive('superscript'), 'btn-light': !editor.isActive('superscript') }"
                    class="btn p-1">
                    <svg-icon type="mdi" :path="sup"></svg-icon>
                </button>
            </div>
            <div class="d-sm-inline-flex p-4" id="rightBorder">
                <button @click="editor.chain().focus().setHorizontalRule().run()" class="p-1 btn btn-light">
                    <svg-icon type="mdi" :path="rule"></svg-icon>
                </button>
                <button @click="editor.chain().focus().setHardBreak().run()" class="p-1 btn btn-light">
                    <svg-icon type="mdi" :path="break"></svg-icon>
                </button>
                <button @click="editor.chain().focus().toggleBulletList().run()"
                    :class=" { 'btn-secondary': editor.isActive('bulletList'), 'btn-light': !editor.isActive('bulletList') } "
                    class="btn p-1">
                    <svg-icon type="mdi" :path=" blltLst "></svg-icon>
                </button>
            </div>
            <div class="d-sm-inline-flex p-4" id="rightBorder">
                <div class="dropdown">
                    <button class="btn-light btn dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <svg-icon type="mdi" :path=" txt "></svg-icon>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <ul class='list-inline'>
                            <li>
                                <button @click="editor.chain().focus().setTextAlign('left').run()"
                                    :class=" { 'btn-secondary': editor.isActive({ textAlign: 'left' }), 'btn-light': !editor.isActive({ textAlign: 'left' }) } "
                                    class="btn p-1 dropdown-item">
                                    <svg-icon type="mdi" :path=" alignLeft "></svg-icon>
                                </button>
                            </li>
                            <li>
                                <button @click="editor.chain().focus().setTextAlign('center').run()"
                                    :class=" { 'btn-secondary': editor.isActive({ textAlign: 'center' }), 'btn-light': !editor.isActive({ textAlign: 'center' }) } "
                                    class="btn p-1 dropdown-item">
                                    <svg-icon type="mdi" :path=" alignCenter "></svg-icon>
                                </button>
                            </li>
                            <li>
                                <button @click="editor.chain().focus().setTextAlign('right').run()"
                                    :class=" { 'btn-secondary': editor.isActive({ textAlign: 'right' }), 'btn-light': !editor.isActive({ textAlign: 'right' }) } "
                                    class="btn p-1 dropdown-item">
                                    <svg-icon type="mdi" :path=" alignRight "></svg-icon>
                                </button>
                            </li>
                            <li>
                                <button @click="editor.chain().focus().setTextAlign('justify').run()"
                                    :class=" { 'btn-secondary': editor.isActive({ textAlign: 'justify' }), 'btn-light': !editor.isActive({ textAlign: 'justify' }) } "
                                    class="btn p-1 dropdown-item">
                                    <svg-icon type="mdi" :path=" justify "></svg-icon>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="d-sm-inline-flex p-4" id="rightBorder">
                <input class="form-control-sm p-1 bg-light" id="imageWidth" type="number" placeholder="Width"
                    style="border: gray;width: 60px;" />
                <input class="form-control-sm p-1 bg-light" id="imageHeight" type="number" placeholder="Height"
                    style="border: gray;width: 60px;" />
                <label for="image" id="imgButton" class="btn btn-light"><svg-icon type="mdi"
                        :path=" img "></svg-icon></label>
                <input id="imageInput" name="image" type="file" hidden />
                <input id="imageUrl" name="imgUrl" type="text" hidden />
                <button id="addImageBtn" @click=" addImage " hidden>
                    setImage
                </button>
            </div>
            <div class="d-sm-inline-flex p-4" id="rightBorder">
                <input class="form-control-sm p-1 bg-light" id="videoWidth" type="number" placeholder="Width"
                    style="border: gray;width: 60px;" />
                <input class="form-control-sm p-1 bg-light" id="videoHeight" type="number" placeholder="Height"
                    style="border: gray;width: 60px;" />
                <label for="video" id="videoButton" class="btn btn-light"><svg-icon type="mdi"
                        :path=" video "></svg-icon></label>
                <input id="videoUrl" name="vidUrl" type="text" hidden />
                <input id="videoInput" name="video" type="file" hidden />
                <button id="addVideoBtn" @click=" addVideo " hidden>
                    setImage
                </button>
            </div>
            <div class="cursor-extensions" hidden>
                <div class="dropcursor"></div>
                <div class="gapcursor"></div>
            </div>
            <div class="colors" hidden>
                <button @click="editor.chain().focus().setColor('#958DF1').run()"
                    :class=" { 'is-active': editor.isActive('textStyle', { color: '#958DF1' }) } ">
                    purple
                </button>
                <button @click="editor.chain().focus().setColor('#F98181').run()"
                    :class=" { 'is-active': editor.isActive('textStyle', { color: '#F98181' }) } ">
                    red
                </button>
                <button @click="editor.chain().focus().setColor('#FBBC88').run()"
                    :class=" { 'is-active': editor.isActive('textStyle', { color: '#FBBC88' }) } ">
                    orange
                </button>
                <button @click="editor.chain().focus().setColor('#FAF594').run()"
                    :class=" { 'is-active': editor.isActive('textStyle', { color: '#FAF594' }) } ">
                    yellow
                </button>
                <button @click="editor.chain().focus().setColor('#70CFF8').run()"
                    :class=" { 'is-active': editor.isActive('textStyle', { color: '#70CFF8' }) } ">
                    blue
                </button>
                <button @click="editor.chain().focus().setColor('#94FADB').run()"
                    :class=" { 'is-active': editor.isActive('textStyle', { color: '#94FADB' }) } ">
                    teal
                </button>
                <button @click="editor.chain().focus().setColor('#B9F18D').run()"
                    :class=" { 'is-active': editor.isActive('textStyle', { color: '#B9F18D' }) } ">
                    green
                </button>
                <button @click="editor.chain().focus().unsetColor().run()">
                    unsetColor
                </button>
            </div>
        </section>
        <editor-content :editor=" editor " />
    </div>
</template>


<style>
/*Tooltip div styling */
.hyperlink-div {
    display: none;
    width: 250px;
    z-index: 101;
    background-color: #fff;
    border: 3px solid #666;
    padding: 12px 12px 12px 12px;
    border-radius: 0px 25px 0px 25px;
}

#rightBorder {
    border-right: 2px solid lightgray;
}

#toolbarMenu {
    z-index:100;
}
</style>
  
<script>
import Image from '@tiptap/extension-image'
import Video from './video-extension.ts'
import StarterKit from '@tiptap/starter-kit'
import Gapcursor from '@tiptap/extension-gapcursor'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import Link from '@tiptap/extension-link'
import { Color } from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import TextAlign from '@tiptap/extension-text-align'
import { BubbleMenu, Editor, EditorContent } from '@tiptap/vue-3'
import SvgIcon from '@jamescoyle/vue-icon';
import {
    mdiFormatQuoteClose, mdiCodeBlockBraces, mdiFormatHeader1, mdiFormatHeader2,
    mdiFormatHeader3, mdiMinus, mdiFormatPageBreak, mdiFormatBold, mdiCodeArray, mdiFormatItalic,
    mdiFormatStrikethrough, mdiFormatSubscript, mdiFormatSuperscript, mdiImage, mdiFormatListBulleted,
    mdiText, mdiFormatAlignLeft, mdiFormatAlignCenter, mdiFormatAlignRight, mdiFormatAlignJustify,
    mdiLinkBoxVariantOutline, mdiLinkBoxVariant, mdiVideoBox
} from '@mdi/js';
import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'
// load all highlight.js languages
// import { lowlight } from 'lowlight/lib/core'
import { createLowlight, all } from 'lowlight'
var lowlight = createLowlight(all);
lowlight.register('html', html)
lowlight.register('css', css)
lowlight.register('js', js)
lowlight.register('ts', ts)

export default {
    components: {
        EditorContent,
        SvgIcon,
        BubbleMenu,
    },

    props: {
        modelValue: {
            type: String,
            default: '',
        },
    },

    emits: ['update:modelValue'],

    data() {
        return {
            editor: null,
            isEditable: true,
            quote: mdiFormatQuoteClose,
            block: mdiCodeBlockBraces,
            headOne: mdiFormatHeader1,
            headTwo: mdiFormatHeader2,
            headThree: mdiFormatHeader3,
            rule: mdiMinus,
            break: mdiFormatPageBreak,
            bold: mdiFormatBold,
            code: mdiCodeArray,
            italic: mdiFormatItalic,
            strike: mdiFormatStrikethrough,
            sub: mdiFormatSubscript,
            sup: mdiFormatSuperscript,
            img: mdiImage,
            blltLst: mdiFormatListBulleted,
            txt: mdiText,
            alignLeft: mdiFormatAlignLeft,
            alignRight: mdiFormatAlignRight,
            alignCenter: mdiFormatAlignCenter,
            justify: mdiFormatAlignJustify,
            setupLink: mdiLinkBoxVariantOutline,
            createLink: mdiLinkBoxVariant,
            video: mdiVideoBox,
        }
    },

    methods: {
        addImage() {
            const url = document.getElementById('imageUrl').value;

            if (url) {
                this.editor.chain().focus().setImage({ src: url }).run()
            }
        },
        addVideo() {
            const src = document.getElementById('videoUrl').value;
            var width = document.getElementById('videoWidth').value;
            var height = document.getElementById('videoHeight').value;

            if (isNaN(width) || width == "") {
                width = 288;
            }
            if (isNaN(height) || height == "") {
                height = 360;
            }

            if (src) {
                this.editor.chain().focus().insertContent("<video src=\"" + src + "\" height=\"" + height + "\" width=\"" + width + "\"></video>").run();
            }
        },
        setLink() {
            const url = document.getElementById('hyperLinkUrl').value
            $('#hyperlinkDiv').css('display', 'none');

            // cancelled
            if (url === null) {
                return
            }

            // empty
            if (url === '') {
                this.editor
                    .chain()
                    .focus()
                    .extendMarkRange('link')
                    .unsetLink()
                    .run()

                return
            }

            // update link
            this.editor
                .chain()
                .focus()
                .extendMarkRange('link')
                .setLink({ href: url })
                .run()
        },
        hyperlinkPopover() {
            $('#hyperlinkDiv').css('display', 'block');
            $('#hyperlinkDiv').css('position', 'absolute');
            $('#hyperlinkDiv').css('left', event.clientX + 10);
            $('#hyperlinkDiv').css('top', event.clientY + 15);
        },
    },

    watch: {
        modelValue(value) {
            // HTML
            const isSame = this.editor.getHTML() === value

            // JSON
            // const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value)

            if (isSame) {
                return
            }

            this.editor.commands.setContent(value, false)
        },
        isEditable(value) {
            this.editor.setEditable(value)
        },
    },

    mounted() {
        this.editor = new Editor({
            extensions: [
                StarterKit.configure({
                    blockquote: true,
                    bulletList: true,
                    hardBreak: true,
                    heading: {
                        HTMLAttributes: {
                            class: 'tiptap-title',
                        }
                    },
                    horizontalRule: true,
                    orderedList: true,
                    listItem: true,
                    bold: true,
                    code: true,
                    italic: true,
                    strike: true
                }),
                CodeBlockLowlight.configure({
                    lowlight: lowlight,
                    languageClassPrefix: true
                }),
                TextStyle,
                Color,
                Image.configure({
                    HTMLAttributes: {
                        id: 'resizable',
                    }
                }),
                Video,
                Link,
                Subscript,
                Superscript,
                TextAlign.configure({
                    types: ['heading', 'paragraph'],
                }),
                Gapcursor,
            ],
            content: this.modelValue,
            onUpdate: () => {
                // HTML
                this.$emit('update:modelValue', this.editor.getHTML())

                // JSON
                // this.$emit('update:modelValue', this.editor.getJSON())
            },
            editorProps: {
                attributes: {
                    class: 'border border-1 p-4',
                    style: 'min-height: 12rem'
                },
            },
        })
    },

    beforeUnmount() {
        this.editor.destroy()
    },
}

// editor.commands.setImage({src: ""});
</script>