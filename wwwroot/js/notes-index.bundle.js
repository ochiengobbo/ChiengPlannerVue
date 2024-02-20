"use strict";
(self["webpackChunkclientapp"] = self["webpackChunkclientapp"] || []).push([["notes-index"],{

/***/ "./components/video-extension.ts":
/*!***************************************!*\
  !*** ./components/video-extension.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/core */ "./node_modules/@tiptap/core/dist/index.js");


const Video = _tiptap_core__WEBPACK_IMPORTED_MODULE_0__.Node.create({

    name: 'video',


    addOptions() {
        return {
            HTMLAttributes: {},
        }
    },


    group: 'block',
    selectable: true,
    draggable: true,
    atom: true,

    addAttributes() {
        return {
            "src": {
                default: null
            },
            "width": {
                default: null
            },
            "height": {
                default: null
            },
        }
    },

    parseHTML() {
        return [
            {
                tag: 'video',
            }
        ]
    },



    renderHTML({ HTMLAttributes }) {
        return ['video', (0,_tiptap_core__WEBPACK_IMPORTED_MODULE_0__.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes)];
    },

    addNodeView() {
        return ({ editor, node }) => {
            const div = document.createElement('div');
            div.className = 'ratio ratio-16x9'; // or 'video-container' or some other class if you are adding your own css
            const video = document.createElement('video');
            video.width = node.attrs.width;
            video.height = node.attrs.height;
            video.src = node.attrs.src;
            div.append(video);
            return {
                dom: div,
            }
        }
    },
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Video);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-4.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./components/Editor.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./components/Editor.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tiptap_extension_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/extension-image */ "./node_modules/@tiptap/extension-image/dist/index.js");
/* harmony import */ var _video_extension_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video-extension.ts */ "./components/video-extension.ts");
/* harmony import */ var _tiptap_starter_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tiptap/starter-kit */ "./node_modules/@tiptap/starter-kit/dist/index.js");
/* harmony import */ var _tiptap_extension_gapcursor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tiptap/extension-gapcursor */ "./node_modules/@tiptap/extension-gapcursor/dist/index.js");
/* harmony import */ var _tiptap_extension_code_block_lowlight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tiptap/extension-code-block-lowlight */ "./node_modules/@tiptap/extension-code-block-lowlight/dist/index.js");
/* harmony import */ var _tiptap_extension_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tiptap/extension-link */ "./node_modules/@tiptap/extension-link/dist/index.js");
/* harmony import */ var _tiptap_extension_color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tiptap/extension-color */ "./node_modules/@tiptap/extension-color/dist/index.js");
/* harmony import */ var _tiptap_extension_text_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tiptap/extension-text-style */ "./node_modules/@tiptap/extension-text-style/dist/index.js");
/* harmony import */ var _tiptap_extension_subscript__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tiptap/extension-subscript */ "./node_modules/@tiptap/extension-subscript/dist/index.js");
/* harmony import */ var _tiptap_extension_superscript__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tiptap/extension-superscript */ "./node_modules/@tiptap/extension-superscript/dist/index.js");
/* harmony import */ var _tiptap_extension_text_align__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tiptap/extension-text-align */ "./node_modules/@tiptap/extension-text-align/dist/index.js");
/* harmony import */ var _tiptap_vue_3__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @tiptap/vue-3 */ "./node_modules/@tiptap/vue-3/dist/index.js");
/* harmony import */ var _jamescoyle_vue_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @jamescoyle/vue-icon */ "./node_modules/@jamescoyle/vue-icon/lib/svg-icon.vue");
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mdi/js */ "./node_modules/@mdi/js/mdi.js");
/* harmony import */ var highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! highlight.js/lib/languages/css */ "./node_modules/highlight.js/es/languages/css.js");
/* harmony import */ var highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! highlight.js/lib/languages/javascript */ "./node_modules/highlight.js/es/languages/javascript.js");
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! highlight.js/lib/languages/typescript */ "./node_modules/highlight.js/es/languages/typescript.js");
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! highlight.js/lib/languages/xml */ "./node_modules/highlight.js/es/languages/xml.js");
/* harmony import */ var lowlight__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lowlight */ "./node_modules/lowlight/lib/index.js");
/* harmony import */ var lowlight__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lowlight */ "./node_modules/lowlight/lib/all.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


















// load all highlight.js languages
// import { lowlight } from 'lowlight/lib/core'

var lowlight = (0,lowlight__WEBPACK_IMPORTED_MODULE_16__.createLowlight)(lowlight__WEBPACK_IMPORTED_MODULE_17__.grammars);
lowlight.register('html', highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_15__["default"]);
lowlight.register('css', highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_12__["default"]);
lowlight.register('js', highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_13__["default"]);
lowlight.register('ts', highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_14__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    EditorContent: _tiptap_vue_3__WEBPACK_IMPORTED_MODULE_18__.EditorContent,
    SvgIcon: _jamescoyle_vue_icon__WEBPACK_IMPORTED_MODULE_11__["default"],
    BubbleMenu: _tiptap_vue_3__WEBPACK_IMPORTED_MODULE_18__.BubbleMenu
  },
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      editor: null,
      isEditable: true,
      quote: _mdi_js__WEBPACK_IMPORTED_MODULE_19__.mdiFormatQuoteClose,
      block: _mdi_js__WEBPACK_IMPORTED_MODULE_19__.mdiCodeBlockBraces,
      headOne: _mdi_js__WEBPACK_IMPORTED_MODULE_19__.mdiFormatHeader1,
      headTwo: _mdi_js__WEBPACK_IMPORTED_MODULE_19__.mdiFormatHeader2,
      headThree: _mdi_js__WEBPACK_IMPORTED_MODULE_19__.mdiFormatHeader3,
      rule: _mdi_js__WEBPACK_IMPORTED_MODULE_19__.mdiMinus,
      break: _mdi_js__WEBPACK_IMPORTED_MODULE_19__.mdiFormatPageBreak,
      bold: _mdi_js__WEBPACK_IMPORTED_MODULE_19__.mdiFormatBold,
      code: _mdi_js__WEBPACK_IMPORTED_MODULE_19__.mdiCodeArray,
      italic: _mdi_js__WEBPACK_IMPORTED_MODULE_19__.mdiFormatItalic,
      strike: _mdi_js__WEBPACK_IMPORTED_MODULE_19__.mdiFormatStrikethrough,
      sub: _mdi_js__WEBPACK_IMPORTED_MODULE_19__.mdiFormatSubscript,
      sup: _mdi_js__WEBPACK_IMPORTED_MODULE_19__.mdiFormatSuperscript,
      img: _mdi_js__WEBPACK_IMPORTED_MODULE_19__.mdiImage,
      blltLst: _mdi_js__WEBPACK_IMPORTED_MODULE_19__.mdiFormatListBulleted,
      txt: _mdi_js__WEBPACK_IMPORTED_MODULE_19__.mdiText,
      alignLeft: _mdi_js__WEBPACK_IMPORTED_MODULE_19__.mdiFormatAlignLeft,
      alignRight: _mdi_js__WEBPACK_IMPORTED_MODULE_19__.mdiFormatAlignRight,
      alignCenter: _mdi_js__WEBPACK_IMPORTED_MODULE_19__.mdiFormatAlignCenter,
      justify: _mdi_js__WEBPACK_IMPORTED_MODULE_19__.mdiFormatAlignJustify,
      setupLink: _mdi_js__WEBPACK_IMPORTED_MODULE_19__.mdiLinkBoxVariantOutline,
      createLink: _mdi_js__WEBPACK_IMPORTED_MODULE_19__.mdiLinkBoxVariant,
      video: _mdi_js__WEBPACK_IMPORTED_MODULE_19__.mdiVideoBox
    };
  },
  methods: {
    addImage() {
      const url = document.getElementById('imageUrl').value;
      if (url) {
        this.editor.chain().focus().setImage({
          src: url
        }).run();
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
      const url = document.getElementById('hyperLinkUrl').value;
      $('#hyperlinkDiv').css('display', 'none');

      // cancelled
      if (url === null) {
        return;
      }

      // empty
      if (url === '') {
        this.editor.chain().focus().extendMarkRange('link').unsetLink().run();
        return;
      }

      // update link
      this.editor.chain().focus().extendMarkRange('link').setLink({
        href: url
      }).run();
    },
    hyperlinkPopover() {
      $('#hyperlinkDiv').css('display', 'block');
      $('#hyperlinkDiv').css('position', 'absolute');
      $('#hyperlinkDiv').css('left', window.Event.clientX + 10);
      $('#hyperlinkDiv').css('top', window.Event.clientY - 15);
    }
  },
  watch: {
    modelValue(value) {
      // HTML
      const isSame = this.editor.getHTML() === value;

      // JSON
      // const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value)

      if (isSame) {
        return;
      }
      this.editor.commands.setContent(value, false);
    },
    isEditable(value) {
      this.editor.setEditable(value);
    }
  },
  mounted() {
    this.editor = new _tiptap_vue_3__WEBPACK_IMPORTED_MODULE_18__.Editor({
      extensions: [_tiptap_starter_kit__WEBPACK_IMPORTED_MODULE_2__["default"].configure({
        blockquote: true,
        bulletList: true,
        hardBreak: true,
        heading: {
          HTMLAttributes: {
            class: 'tiptap-title'
          }
        },
        horizontalRule: {
          HTMLAttributes: {
            style: 'border-top: 1px solid black;'
          }
        },
        orderedList: true,
        listItem: true,
        bold: true,
        code: true,
        italic: true,
        strike: true
      }), _tiptap_extension_code_block_lowlight__WEBPACK_IMPORTED_MODULE_4__["default"].configure({
        lowlight: lowlight,
        languageClassPrefix: true
      }), _tiptap_extension_text_style__WEBPACK_IMPORTED_MODULE_7__["default"], _tiptap_extension_color__WEBPACK_IMPORTED_MODULE_6__.Color, _tiptap_extension_image__WEBPACK_IMPORTED_MODULE_0__["default"].configure({
        HTMLAttributes: {
          id: 'resizable'
        }
      }), _video_extension_ts__WEBPACK_IMPORTED_MODULE_1__["default"], _tiptap_extension_link__WEBPACK_IMPORTED_MODULE_5__["default"], _tiptap_extension_subscript__WEBPACK_IMPORTED_MODULE_8__["default"], _tiptap_extension_superscript__WEBPACK_IMPORTED_MODULE_9__["default"], _tiptap_extension_text_align__WEBPACK_IMPORTED_MODULE_10__["default"].configure({
        types: ['heading', 'paragraph']
      }), _tiptap_extension_gapcursor__WEBPACK_IMPORTED_MODULE_3__["default"]],
      content: this.modelValue,
      onUpdate: () => {
        // HTML
        this.$emit('update:modelValue', this.editor.getHTML());

        // JSON
        // this.$emit('update:modelValue', this.editor.getJSON())
      },
      editorProps: {
        attributes: {
          class: 'border border-1 p-4',
          style: 'min-height: 12rem'
        }
      }
    });
  },
  beforeUnmount() {
    this.editor.destroy();
  }
});

// editor.commands.setImage({src: ""});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-4.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./views/notes/Edit/NotesEdit.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./views/notes/Edit/NotesEdit.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Editor_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/Editor.vue */ "./components/Editor.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "NotesEdit",
  components: {
    Editor: _components_Editor_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data() {
    return {
      content: '<p>Type here...</p>',
      notesId: notesId
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-4.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./views/notes/index/NotesIndex.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./views/notes/index/NotesIndex.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mdi/js */ "./node_modules/@mdi/js/mdi.js");
/* harmony import */ var _Edit_NotesEdit_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Edit/NotesEdit.vue */ "./views/notes/Edit/NotesEdit.vue");
/* harmony import */ var _jamescoyle_vue_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jamescoyle/vue-icon */ "./node_modules/@jamescoyle/vue-icon/lib/svg-icon.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    SvgIcon: _jamescoyle_vue_icon__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  name: "NotesIndex",
  data() {
    return {
      edit: _mdi_js__WEBPACK_IMPORTED_MODULE_2__.mdiTextBoxEdit,
      notesId: notesId
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-4.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./components/Editor.vue?vue&type=template&id=47f88008":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./components/Editor.vue?vue&type=template&id=47f88008 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  key: 0,
  class: "container mx-auto",
  style: {
    "margin-top": "2rem",
    "margin-bottom": "2rem"
  }
};
const _hoisted_2 = {
  class: "buttons d-sm-inline-flex border border-1 p-4 bg-light"
};
const _hoisted_3 = {
  class: "p-4 d-sm-inline-flex"
};
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  placeholder: "Place URL Here",
  id: "hyperLinkUrl"
}, null, -1 /* HOISTED */);
const _hoisted_5 = {
  class: "p-4 d-sm-inline-flex"
};
const _hoisted_6 = {
  class: "buttons align-items-center flex-wrap gap-4 border border-1 p-4 bg-light border-secondary",
  id: "toolbarMenu",
  style: {}
};
const _hoisted_7 = {
  class: "d-sm-inline-flex p-4",
  id: "rightBorder"
};
const _hoisted_8 = {
  class: "d-sm-inline-flex p-4",
  id: "rightBorder"
};
const _hoisted_9 = {
  class: "d-sm-inline-flex p-4",
  id: "rightBorder"
};
const _hoisted_10 = {
  class: "dropdown"
};
const _hoisted_11 = {
  class: "btn-light btn dropdown-toggle",
  type: "button",
  id: "dropdownMenuButton",
  "data-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
};
const _hoisted_12 = {
  class: "dropdown-menu",
  "aria-labelledby": "dropdownMenuButton"
};
const _hoisted_13 = {
  class: "list-inline"
};
const _hoisted_14 = {
  class: "d-sm-inline-flex p-4",
  id: "rightBorder"
};
const _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  class: "form-control-sm p-1 bg-light",
  id: "imageWidth",
  type: "number",
  placeholder: "Width",
  style: {
    "border": "gray",
    "width": "60px"
  }
}, null, -1 /* HOISTED */);
const _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  class: "form-control-sm p-1 bg-light",
  id: "imageHeight",
  type: "number",
  placeholder: "Height",
  style: {
    "border": "gray",
    "width": "60px"
  }
}, null, -1 /* HOISTED */);
const _hoisted_17 = {
  for: "image",
  id: "imgButton",
  class: "btn btn-light"
};
const _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  id: "imageInput",
  name: "image",
  type: "file",
  hidden: ""
}, null, -1 /* HOISTED */);
const _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  id: "imageUrl",
  name: "imgUrl",
  type: "text",
  hidden: ""
}, null, -1 /* HOISTED */);
const _hoisted_20 = {
  class: "d-sm-inline-flex p-4",
  id: "rightBorder"
};
const _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  class: "form-control-sm p-1 bg-light",
  id: "videoWidth",
  type: "number",
  placeholder: "Width",
  style: {
    "border": "gray",
    "width": "60px"
  }
}, null, -1 /* HOISTED */);
const _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  class: "form-control-sm p-1 bg-light",
  id: "videoHeight",
  type: "number",
  placeholder: "Height",
  style: {
    "border": "gray",
    "width": "60px"
  }
}, null, -1 /* HOISTED */);
const _hoisted_23 = {
  for: "video",
  id: "videoButton",
  class: "btn btn-light"
};
const _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  id: "videoUrl",
  name: "vidUrl",
  type: "text",
  hidden: ""
}, null, -1 /* HOISTED */);
const _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  id: "videoInput",
  name: "video",
  type: "file",
  hidden: ""
}, null, -1 /* HOISTED */);
const _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "cursor-extensions",
  hidden: ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "dropcursor"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "gapcursor"
})], -1 /* HOISTED */);
const _hoisted_27 = {
  class: "colors",
  hidden: ""
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_svg_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("svg-icon");
  const _component_bubble_menu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("bubble-menu");
  const _component_editor_content = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("editor-content");
  return $data.editor ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [$data.editor ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_bubble_menu, {
    key: 0,
    editor: $data.editor,
    "tippy-options": {
      duration: 100
    }
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      class: "btn btn-light",
      onClick: _cache[0] || (_cache[0] = function () {
        return $options.setLink && $options.setLink(...arguments);
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_icon, {
      type: "mdi",
      path: $data.setupLink
    }, null, 8 /* PROPS */, ["path"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      onClick: _cache[1] || (_cache[1] = $event => $data.editor.chain().focus().toggleBold().run()),
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
        'btn-secondary': $data.editor.isActive('bold'),
        'btn-light': !$data.editor.isActive('bold')
      }, "btn p-1"])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_icon, {
      type: "mdi",
      path: $data.bold
    }, null, 8 /* PROPS */, ["path"])], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      onClick: _cache[2] || (_cache[2] = $event => $data.editor.chain().focus().toggleCode().run()),
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
        'btn-secondary': $data.editor.isActive('code'),
        'btn-light': !$data.editor.isActive('code')
      }, "btn p-1"])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_icon, {
      type: "mdi",
      path: $data.code
    }, null, 8 /* PROPS */, ["path"])], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      onClick: _cache[3] || (_cache[3] = $event => $data.editor.chain().focus().toggleItalic().run()),
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
        'btn-secondary': $data.editor.isActive('italic'),
        'btn-light': !$data.editor.isActive('italic')
      }, "btn p-1"])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_icon, {
      type: "mdi",
      path: $data.italic
    }, null, 8 /* PROPS */, ["path"])], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      onClick: _cache[4] || (_cache[4] = $event => $data.editor.chain().focus().toggleStrike().run()),
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
        'btn-secondary': $data.editor.isActive('strike'),
        'btn-light': !$data.editor.isActive('strike')
      }, "btn p-1"])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_icon, {
      type: "mdi",
      path: $data.strike
    }, null, 8 /* PROPS */, ["path"])], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      onClick: _cache[5] || (_cache[5] = $event => $data.editor.chain().focus().toggleSubscript().run()),
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
        'btn-secondary': $data.editor.isActive('subscript'),
        'btn-light': !$data.editor.isActive('subscript')
      }, "btn p-1"])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_icon, {
      type: "mdi",
      path: $data.sub
    }, null, 8 /* PROPS */, ["path"])], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      onClick: _cache[6] || (_cache[6] = $event => $data.editor.chain().focus().toggleSuperscript().run()),
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
        'btn-secondary': $data.editor.isActive('superscript'),
        'btn-light': !$data.editor.isActive('superscript')
      }, "btn p-1"])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_icon, {
      type: "mdi",
      path: $data.sup
    }, null, 8 /* PROPS */, ["path"])], 2 /* CLASS */)])])]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["editor"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[7] || (_cache[7] = $event => $data.editor.chain().focus().toggleBlockquote().run()),
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'btn-secondary': $data.editor.isActive('blockquote'),
      'btn-light': !$data.editor.isActive('blockquote')
    }, "btn p-1"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_icon, {
    type: "mdi",
    path: $data.quote
  }, null, 8 /* PROPS */, ["path"])], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[8] || (_cache[8] = $event => $data.editor.chain().focus().toggleCodeBlock().run()),
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'btn-secondary': $data.editor.isActive('codeBlock'),
      'btn-light': !$data.editor.isActive('codeBlock')
    }, "btn p-1"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_icon, {
    type: "mdi",
    path: $data.block
  }, null, 8 /* PROPS */, ["path"])], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[9] || (_cache[9] = $event => $data.editor.chain().focus().toggleHeading({
      level: 1
    }).run()),
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'btn-secondary': $data.editor.isActive('heading', {
        level: 1
      }),
      'btn-light': !$data.editor.isActive('heading', {
        level: 1
      })
    }, "btn p-1"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_icon, {
    type: "mdi",
    path: $data.headOne
  }, null, 8 /* PROPS */, ["path"])], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[10] || (_cache[10] = $event => $data.editor.chain().focus().toggleHeading({
      level: 2
    }).run()),
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'btn-secondary': $data.editor.isActive('heading', {
        level: 2
      }),
      'btn-light': !$data.editor.isActive('heading', {
        level: 2
      })
    }, "btn p-1"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_icon, {
    type: "mdi",
    path: $data.headTwo
  }, null, 8 /* PROPS */, ["path"])], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[11] || (_cache[11] = $event => $data.editor.chain().focus().toggleHeading({
      level: 3
    }).run()),
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'btn-secondary': $data.editor.isActive('heading', {
        level: 3
      }),
      'btn-light': !$data.editor.isActive('heading', {
        level: 3
      })
    }, "btn p-1"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_icon, {
    type: "mdi",
    path: $data.headThree
  }, null, 8 /* PROPS */, ["path"])], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[12] || (_cache[12] = $event => $data.editor.chain().focus().toggleBold().run()),
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'btn-secondary': $data.editor.isActive('bold'),
      'btn-light': !$data.editor.isActive('bold')
    }, "btn p-1"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_icon, {
    type: "mdi",
    path: $data.bold
  }, null, 8 /* PROPS */, ["path"])], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[13] || (_cache[13] = $event => $data.editor.chain().focus().toggleItalic().run()),
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'btn-secondary': $data.editor.isActive('italic'),
      'btn-light': !$data.editor.isActive('italic')
    }, "btn p-1"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_icon, {
    type: "mdi",
    path: $data.italic
  }, null, 8 /* PROPS */, ["path"])], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[14] || (_cache[14] = $event => $data.editor.chain().focus().toggleStrike().run()),
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'btn-secondary': $data.editor.isActive('strike'),
      'btn-light': !$data.editor.isActive('strike')
    }, "btn p-1"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_icon, {
    type: "mdi",
    path: $data.strike
  }, null, 8 /* PROPS */, ["path"])], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[15] || (_cache[15] = $event => $data.editor.chain().focus().toggleSubscript().run()),
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'btn-secondary': $data.editor.isActive('subscript'),
      'btn-light': !$data.editor.isActive('subscript')
    }, "btn p-1"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_icon, {
    type: "mdi",
    path: $data.sub
  }, null, 8 /* PROPS */, ["path"])], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[16] || (_cache[16] = $event => $data.editor.chain().focus().toggleSuperscript().run()),
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'btn-secondary': $data.editor.isActive('superscript'),
      'btn-light': !$data.editor.isActive('superscript')
    }, "btn p-1"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_icon, {
    type: "mdi",
    path: $data.sup
  }, null, 8 /* PROPS */, ["path"])], 2 /* CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[17] || (_cache[17] = $event => $data.editor.chain().focus().setHorizontalRule().run()),
    class: "p-1 btn btn-light"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_icon, {
    type: "mdi",
    path: $data.rule
  }, null, 8 /* PROPS */, ["path"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[18] || (_cache[18] = $event => $data.editor.chain().focus().setHardBreak().run()),
    class: "p-1 btn btn-light"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_icon, {
    type: "mdi",
    path: $data.break
  }, null, 8 /* PROPS */, ["path"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[19] || (_cache[19] = $event => $data.editor.chain().focus().toggleBulletList().run()),
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'btn-secondary': $data.editor.isActive('bulletList'),
      'btn-light': !$data.editor.isActive('bulletList')
    }, "btn p-1"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_icon, {
    type: "mdi",
    path: $data.blltLst
  }, null, 8 /* PROPS */, ["path"])], 2 /* CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_icon, {
    type: "mdi",
    path: $data.txt
  }, null, 8 /* PROPS */, ["path"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[20] || (_cache[20] = $event => $data.editor.chain().focus().setTextAlign('left').run()),
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'btn-secondary': $data.editor.isActive({
        textAlign: 'left'
      }),
      'btn-light': !$data.editor.isActive({
        textAlign: 'left'
      })
    }, "btn p-1 dropdown-item"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_icon, {
    type: "mdi",
    path: $data.alignLeft
  }, null, 8 /* PROPS */, ["path"])], 2 /* CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[21] || (_cache[21] = $event => $data.editor.chain().focus().setTextAlign('center').run()),
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'btn-secondary': $data.editor.isActive({
        textAlign: 'center'
      }),
      'btn-light': !$data.editor.isActive({
        textAlign: 'center'
      })
    }, "btn p-1 dropdown-item"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_icon, {
    type: "mdi",
    path: $data.alignCenter
  }, null, 8 /* PROPS */, ["path"])], 2 /* CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[22] || (_cache[22] = $event => $data.editor.chain().focus().setTextAlign('right').run()),
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'btn-secondary': $data.editor.isActive({
        textAlign: 'right'
      }),
      'btn-light': !$data.editor.isActive({
        textAlign: 'right'
      })
    }, "btn p-1 dropdown-item"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_icon, {
    type: "mdi",
    path: $data.alignRight
  }, null, 8 /* PROPS */, ["path"])], 2 /* CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[23] || (_cache[23] = $event => $data.editor.chain().focus().setTextAlign('justify').run()),
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'btn-secondary': $data.editor.isActive({
        textAlign: 'justify'
      }),
      'btn-light': !$data.editor.isActive({
        textAlign: 'justify'
      })
    }, "btn p-1 dropdown-item"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_icon, {
    type: "mdi",
    path: $data.justify
  }, null, 8 /* PROPS */, ["path"])], 2 /* CLASS */)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_hoisted_15, _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_icon, {
    type: "mdi",
    path: $data.img
  }, null, 8 /* PROPS */, ["path"])]), _hoisted_18, _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    id: "addImageBtn",
    onClick: _cache[24] || (_cache[24] = function () {
      return $options.addImage && $options.addImage(...arguments);
    }),
    hidden: ""
  }, " setImage ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_hoisted_21, _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_icon, {
    type: "mdi",
    path: $data.video
  }, null, 8 /* PROPS */, ["path"])]), _hoisted_24, _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    id: "addVideoBtn",
    onClick: _cache[25] || (_cache[25] = function () {
      return $options.addVideo && $options.addVideo(...arguments);
    }),
    hidden: ""
  }, " setImage ")]), _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[26] || (_cache[26] = $event => $data.editor.chain().focus().setColor('#958DF1').run()),
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'is-active': $data.editor.isActive('textStyle', {
        color: '#958DF1'
      })
    })
  }, " purple ", 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[27] || (_cache[27] = $event => $data.editor.chain().focus().setColor('#F98181').run()),
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'is-active': $data.editor.isActive('textStyle', {
        color: '#F98181'
      })
    })
  }, " red ", 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[28] || (_cache[28] = $event => $data.editor.chain().focus().setColor('#FBBC88').run()),
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'is-active': $data.editor.isActive('textStyle', {
        color: '#FBBC88'
      })
    })
  }, " orange ", 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[29] || (_cache[29] = $event => $data.editor.chain().focus().setColor('#FAF594').run()),
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'is-active': $data.editor.isActive('textStyle', {
        color: '#FAF594'
      })
    })
  }, " yellow ", 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[30] || (_cache[30] = $event => $data.editor.chain().focus().setColor('#70CFF8').run()),
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'is-active': $data.editor.isActive('textStyle', {
        color: '#70CFF8'
      })
    })
  }, " blue ", 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[31] || (_cache[31] = $event => $data.editor.chain().focus().setColor('#94FADB').run()),
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'is-active': $data.editor.isActive('textStyle', {
        color: '#94FADB'
      })
    })
  }, " teal ", 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[32] || (_cache[32] = $event => $data.editor.chain().focus().setColor('#B9F18D').run()),
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'is-active': $data.editor.isActive('textStyle', {
        color: '#B9F18D'
      })
    })
  }, " green ", 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[33] || (_cache[33] = $event => $data.editor.chain().focus().unsetColor().run())
  }, " unsetColor ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_editor_content, {
    editor: $data.editor
  }, null, 8 /* PROPS */, ["editor"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-4.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./views/notes/Edit/NotesEdit.vue?vue&type=template&id=0ee2ae43":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./views/notes/Edit/NotesEdit.vue?vue&type=template&id=0ee2ae43 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  id: "app",
  class: "mx-auto"
};
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "container mx-auto",
  style: {
    "margin-top": "2rem",
    "margin-bottom": "2rem"
  }
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  class: "mx-auto form-control-lg inputGroup-sizing-lg border border-secondary border-1",
  type: "text",
  placeholder: "Enter Your Title Here...",
  id: "noteTitle",
  style: {
    "width": "-webkit-fill-available"
  }
})], -1 /* HOISTED */);
const _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "container mx-auto",
  style: {
    "margin-top": "2rem",
    "margin-bottom": "2rem"
  }
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  id: "saveNote",
  class: "btn btn-outline-dark p-1"
}, "Save"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  id: "deleteNoteBtn",
  class: "btn btn-outline-danger p-1",
  style: {
    "display": "none"
  }
}, "Delete")], -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_editor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("editor");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_editor, {
    modelValue: $data.content,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $data.content = $event)
  }, null, 8 /* PROPS */, ["modelValue"]), _hoisted_3]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-4.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./views/notes/index/NotesIndex.vue?vue&type=template&id=3e27726b&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./views/notes/index/NotesIndex.vue?vue&type=template&id=3e27726b&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-3e27726b"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1 = {
  id: "note",
  class: "p-5"
};
const _hoisted_2 = {
  class: "d-inline-flex w-100"
};
const _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "noteTitle",
  class: "w-75"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1")], -1 /* HOISTED */));
const _hoisted_4 = {
  class: "text-right w-25"
};
const _hoisted_5 = {
  class: "p-1 btn btn-light",
  id: "editLink",
  href: "/",
  style: {
    "color": "#7a0696"
  }
};
const _hoisted_6 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "noteBody"
}, null, -1 /* HOISTED */));
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_svg_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("svg-icon");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_icon, {
    type: "mdi",
    path: $data.edit
  }, null, 8 /* PROPS */, ["path"])])])]), _hoisted_6])]);
}

/***/ }),

/***/ "./views/notes/index/main.js":
/*!***********************************!*\
  !*** ./views/notes/index/main.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _NotesIndex_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotesIndex.vue */ "./views/notes/index/NotesIndex.vue");


vue__WEBPACK_IMPORTED_MODULE_0__.createApp(_NotesIndex_vue__WEBPACK_IMPORTED_MODULE_1__["default"]).mount('#app');

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./components/Editor.vue?vue&type=style&index=0&id=47f88008&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./components/Editor.vue?vue&type=style&index=0&id=47f88008&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*Tooltip div styling */
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
  z-index: 100;
}`, "",{"version":3,"sources":["webpack://./components/Editor.vue","webpack://./Editor.vue"],"names":[],"mappings":"AACA,uBAAA;AACA;EACI,aAAA;EACA,YAAA;EACA,YAAA;EACA,sBAAA;EACA,sBAAA;EACA,4BAAA;EACA,gCAAA;ACAJ;ADGA;EACI,iCAAA;ACAJ;ADGA;EACI,YAAA;ACAJ","sourcesContent":["\r\n/*Tooltip div styling */\r\n.hyperlink-div {\r\n    display: none;\r\n    width: 250px;\r\n    z-index: 101;\r\n    background-color: #fff;\r\n    border: 3px solid #666;\r\n    padding: 12px 12px 12px 12px;\r\n    border-radius: 0px 25px 0px 25px;\r\n}\r\n\r\n#rightBorder {\r\n    border-right: 2px solid lightgray;\r\n}\r\n\r\n#toolbarMenu {\r\n    z-index:100;\r\n}\r\n","/*Tooltip div styling */\n.hyperlink-div {\n  display: none;\n  width: 250px;\n  z-index: 101;\n  background-color: #fff;\n  border: 3px solid #666;\n  padding: 12px 12px 12px 12px;\n  border-radius: 0px 25px 0px 25px;\n}\n\n#rightBorder {\n  border-right: 2px solid lightgray;\n}\n\n#toolbarMenu {\n  z-index: 100;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./views/notes/Edit/NotesEdit.vue?vue&type=style&index=0&id=0ee2ae43&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./views/notes/Edit/NotesEdit.vue?vue&type=style&index=0&id=0ee2ae43&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Basic editor styles */
.tiptap > * + * {
  margin-top: 0.75em;
}
.tiptap code {
  background-color: rgba(97, 97, 97, 0.1);
  color: #616161;
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
  border-left: 3px solid rgba(13, 13, 13, 0.1);
}`, "",{"version":3,"sources":["webpack://./views/notes/Edit/NotesEdit.vue","webpack://./NotesEdit.vue"],"names":[],"mappings":"AACA,wBAAA;AAEE;EACE,kBAAA;ACDJ;ADIE;EACE,uCAAA;EACA,cAAA;ACFJ;ADQA;EACI,wBAAA;EACA,gCAAA;ACLJ;ADQA;EACE,uBAAA;EACA,oBAAA;EACA,qBAAA;ACLF;ADQA;EACE,kBAAA;EACA,4CAAA;ACLF","sourcesContent":["\r\n/* Basic editor styles */\r\n.tiptap {\r\n  >*+* {\r\n    margin-top: 0.75em;\r\n  }\r\n\r\n  code {\r\n    background-color: rgba(#616161, 0.1);\r\n    color: #616161;\r\n  }\r\n\r\n  //border-radius: 10px;\r\n}\r\n\r\n.tiptap.ProseMirror-focused {\r\n    outline: none !important;\r\n    border-color: #6c757d !important;\r\n  }\r\n\r\nbutton {\r\n  background-color: unset;\r\n  padding-block: unset;\r\n  padding-inline: unset;\r\n}\r\n\r\nblockquote {\r\n  padding-left: 1rem;\r\n  border-left: 3px solid rgba(#0D0D0D, 0.1);\r\n}\r\n\r\n// .content {\r\n//   padding: 1rem 0 0;\r\n\r\n//   h3 {\r\n//     margin: 1rem 0 0.5rem;\r\n//   }\r\n\r\n//   pre {\r\n//     border-radius: 5px;\r\n//     color: #333;\r\n//   }\r\n\r\n//   code {\r\n//     display: block;\r\n//     white-space: pre-wrap;\r\n//     font-size: 0.8rem;\r\n//     padding: 0.75rem 1rem;\r\n//     background-color:#e9ecef;\r\n//     color: #495057;\r\n//   }\r\n// }\r\n","/* Basic editor styles */\n.tiptap > * + * {\n  margin-top: 0.75em;\n}\n.tiptap code {\n  background-color: rgba(97, 97, 97, 0.1);\n  color: #616161;\n}\n\n.tiptap.ProseMirror-focused {\n  outline: none !important;\n  border-color: #6c757d !important;\n}\n\nbutton {\n  background-color: unset;\n  padding-block: unset;\n  padding-inline: unset;\n}\n\nblockquote {\n  padding-left: 1rem;\n  border-left: 3px solid rgba(13, 13, 13, 0.1);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./views/notes/index/NotesIndex.vue?vue&type=style&index=0&id=3e27726b&scoped=true&lang=scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./views/notes/index/NotesIndex.vue?vue&type=style&index=0&id=3e27726b&scoped=true&lang=scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.test-scoped-css[data-v-3e27726b] {
  color: #fff;
}`, "",{"version":3,"sources":["webpack://./views/notes/index/NotesIndex.vue","webpack://./NotesIndex.vue"],"names":[],"mappings":"AAGA;EACI,WAHQ;ACCZ","sourcesContent":["\r\n$fontColor: #fff;\r\n\r\n.test-scoped-css {\r\n    color: $fontColor;\r\n}\r\n",".test-scoped-css {\n  color: #fff;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./components/Editor.vue?vue&type=style&index=0&id=47f88008&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./components/Editor.vue?vue&type=style&index=0&id=47f88008&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Editor_vue_vue_type_style_index_0_id_47f88008_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Editor.vue?vue&type=style&index=0&id=47f88008&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./components/Editor.vue?vue&type=style&index=0&id=47f88008&lang=css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Editor_vue_vue_type_style_index_0_id_47f88008_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Editor_vue_vue_type_style_index_0_id_47f88008_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Editor_vue_vue_type_style_index_0_id_47f88008_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Editor_vue_vue_type_style_index_0_id_47f88008_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./views/notes/Edit/NotesEdit.vue?vue&type=style&index=0&id=0ee2ae43&lang=scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./views/notes/Edit/NotesEdit.vue?vue&type=style&index=0&id=0ee2ae43&lang=scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_NotesEdit_vue_vue_type_style_index_0_id_0ee2ae43_lang_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./NotesEdit.vue?vue&type=style&index=0&id=0ee2ae43&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./views/notes/Edit/NotesEdit.vue?vue&type=style&index=0&id=0ee2ae43&lang=scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_NotesEdit_vue_vue_type_style_index_0_id_0ee2ae43_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_NotesEdit_vue_vue_type_style_index_0_id_0ee2ae43_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_NotesEdit_vue_vue_type_style_index_0_id_0ee2ae43_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_NotesEdit_vue_vue_type_style_index_0_id_0ee2ae43_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./views/notes/index/NotesIndex.vue?vue&type=style&index=0&id=3e27726b&scoped=true&lang=scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./views/notes/index/NotesIndex.vue?vue&type=style&index=0&id=3e27726b&scoped=true&lang=scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_NotesIndex_vue_vue_type_style_index_0_id_3e27726b_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./NotesIndex.vue?vue&type=style&index=0&id=3e27726b&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./views/notes/index/NotesIndex.vue?vue&type=style&index=0&id=3e27726b&scoped=true&lang=scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_NotesIndex_vue_vue_type_style_index_0_id_3e27726b_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_NotesIndex_vue_vue_type_style_index_0_id_3e27726b_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_NotesIndex_vue_vue_type_style_index_0_id_3e27726b_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_NotesIndex_vue_vue_type_style_index_0_id_3e27726b_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./components/Editor.vue":
/*!*******************************!*\
  !*** ./components/Editor.vue ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Editor_vue_vue_type_template_id_47f88008__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editor.vue?vue&type=template&id=47f88008 */ "./components/Editor.vue?vue&type=template&id=47f88008");
/* harmony import */ var _Editor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editor.vue?vue&type=script&lang=js */ "./components/Editor.vue?vue&type=script&lang=js");
/* harmony import */ var _Editor_vue_vue_type_style_index_0_id_47f88008_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Editor.vue?vue&type=style&index=0&id=47f88008&lang=css */ "./components/Editor.vue?vue&type=style&index=0&id=47f88008&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Editor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Editor_vue_vue_type_template_id_47f88008__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"components/Editor.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./views/notes/Edit/NotesEdit.vue":
/*!****************************************!*\
  !*** ./views/notes/Edit/NotesEdit.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NotesEdit_vue_vue_type_template_id_0ee2ae43__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotesEdit.vue?vue&type=template&id=0ee2ae43 */ "./views/notes/Edit/NotesEdit.vue?vue&type=template&id=0ee2ae43");
/* harmony import */ var _NotesEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotesEdit.vue?vue&type=script&lang=js */ "./views/notes/Edit/NotesEdit.vue?vue&type=script&lang=js");
/* harmony import */ var _NotesEdit_vue_vue_type_style_index_0_id_0ee2ae43_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotesEdit.vue?vue&type=style&index=0&id=0ee2ae43&lang=scss */ "./views/notes/Edit/NotesEdit.vue?vue&type=style&index=0&id=0ee2ae43&lang=scss");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_NotesEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_NotesEdit_vue_vue_type_template_id_0ee2ae43__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"views/notes/Edit/NotesEdit.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./views/notes/index/NotesIndex.vue":
/*!******************************************!*\
  !*** ./views/notes/index/NotesIndex.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NotesIndex_vue_vue_type_template_id_3e27726b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotesIndex.vue?vue&type=template&id=3e27726b&scoped=true */ "./views/notes/index/NotesIndex.vue?vue&type=template&id=3e27726b&scoped=true");
/* harmony import */ var _NotesIndex_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotesIndex.vue?vue&type=script&lang=js */ "./views/notes/index/NotesIndex.vue?vue&type=script&lang=js");
/* harmony import */ var _NotesIndex_vue_vue_type_style_index_0_id_3e27726b_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotesIndex.vue?vue&type=style&index=0&id=3e27726b&scoped=true&lang=scss */ "./views/notes/index/NotesIndex.vue?vue&type=style&index=0&id=3e27726b&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_NotesIndex_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_NotesIndex_vue_vue_type_template_id_3e27726b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-3e27726b"],['__file',"views/notes/index/NotesIndex.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./components/Editor.vue?vue&type=script&lang=js":
/*!*******************************************************!*\
  !*** ./components/Editor.vue?vue&type=script&lang=js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_4_use_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Editor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_4_use_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Editor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-4.use!../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Editor.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-4.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./components/Editor.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./views/notes/Edit/NotesEdit.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./views/notes/Edit/NotesEdit.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_4_use_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_NotesEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_4_use_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_NotesEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-4.use!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./NotesEdit.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-4.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./views/notes/Edit/NotesEdit.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./views/notes/index/NotesIndex.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./views/notes/index/NotesIndex.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_4_use_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_NotesIndex_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_4_use_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_NotesIndex_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-4.use!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./NotesIndex.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-4.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./views/notes/index/NotesIndex.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./components/Editor.vue?vue&type=template&id=47f88008":
/*!*************************************************************!*\
  !*** ./components/Editor.vue?vue&type=template&id=47f88008 ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_4_use_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Editor_vue_vue_type_template_id_47f88008__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_4_use_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Editor_vue_vue_type_template_id_47f88008__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-4.use!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Editor.vue?vue&type=template&id=47f88008 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-4.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./components/Editor.vue?vue&type=template&id=47f88008");


/***/ }),

/***/ "./views/notes/Edit/NotesEdit.vue?vue&type=template&id=0ee2ae43":
/*!**********************************************************************!*\
  !*** ./views/notes/Edit/NotesEdit.vue?vue&type=template&id=0ee2ae43 ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_4_use_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_NotesEdit_vue_vue_type_template_id_0ee2ae43__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_4_use_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_NotesEdit_vue_vue_type_template_id_0ee2ae43__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-4.use!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./NotesEdit.vue?vue&type=template&id=0ee2ae43 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-4.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./views/notes/Edit/NotesEdit.vue?vue&type=template&id=0ee2ae43");


/***/ }),

/***/ "./views/notes/index/NotesIndex.vue?vue&type=template&id=3e27726b&scoped=true":
/*!************************************************************************************!*\
  !*** ./views/notes/index/NotesIndex.vue?vue&type=template&id=3e27726b&scoped=true ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_4_use_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_NotesIndex_vue_vue_type_template_id_3e27726b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_4_use_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_NotesIndex_vue_vue_type_template_id_3e27726b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-4.use!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./NotesIndex.vue?vue&type=template&id=3e27726b&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-4.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./views/notes/index/NotesIndex.vue?vue&type=template&id=3e27726b&scoped=true");


/***/ }),

/***/ "./components/Editor.vue?vue&type=style&index=0&id=47f88008&lang=css":
/*!***************************************************************************!*\
  !*** ./components/Editor.vue?vue&type=style&index=0&id=47f88008&lang=css ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Editor_vue_vue_type_style_index_0_id_47f88008_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/style-loader/dist/cjs.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Editor.vue?vue&type=style&index=0&id=47f88008&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./components/Editor.vue?vue&type=style&index=0&id=47f88008&lang=css");


/***/ }),

/***/ "./views/notes/Edit/NotesEdit.vue?vue&type=style&index=0&id=0ee2ae43&lang=scss":
/*!*************************************************************************************!*\
  !*** ./views/notes/Edit/NotesEdit.vue?vue&type=style&index=0&id=0ee2ae43&lang=scss ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_NotesEdit_vue_vue_type_style_index_0_id_0ee2ae43_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./NotesEdit.vue?vue&type=style&index=0&id=0ee2ae43&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./views/notes/Edit/NotesEdit.vue?vue&type=style&index=0&id=0ee2ae43&lang=scss");


/***/ }),

/***/ "./views/notes/index/NotesIndex.vue?vue&type=style&index=0&id=3e27726b&scoped=true&lang=scss":
/*!***************************************************************************************************!*\
  !*** ./views/notes/index/NotesIndex.vue?vue&type=style&index=0&id=3e27726b&scoped=true&lang=scss ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_NotesIndex_vue_vue_type_style_index_0_id_3e27726b_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./NotesIndex.vue?vue&type=style&index=0&id=3e27726b&scoped=true&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./views/notes/index/NotesIndex.vue?vue&type=style&index=0&id=3e27726b&scoped=true&lang=scss");


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["core","vendor"], () => (__webpack_exec__("./views/notes/index/main.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=notes-index.bundle.js.map