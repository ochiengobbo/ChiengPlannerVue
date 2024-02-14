import { Node, mergeAttributes } from '@tiptap/core'

/**
 * Matches following attributes in Markdown-typed image: [, width, height, src]
 *
 * Example:
 * ![Lorem](image.jpg) -> [, "Lorem", "image.jpg"]
 * ![](image.jpg "Ipsum") -> [, "", "image.jpg", "Ipsum"]
 * ![Lorem](image.jpg "Ipsum") -> [, "Lorem", "image.jpg", "Ipsum"]
 */
// const VIDEO_INPUT_REGEX = /!\[(\d+)\]\[(\d+)\]\((\S+)\)?\)/;

// const Video = Node.create({

//     name: 'video',
//     group: 'block',
//     selectable: true,
//     draggable: true,
//     atom: true,

//     parseHTML() {
//         return [
//             {
//                 tag: 'embed[data-type="video"]',
//             }
//         ]
//     },

//     addAttributes() {
//         return {
//           "src": {
//             default: null
//           },
//           "width": {
//             default: null
//           },
//           "height": {
//             default: null
//           },
//         }
//       },

//       renderHTML({ HTMLAttributes }) {
//         return ['video', mergeAttributes(HTMLAttributes)];
//     },
// })

// export default Video

export default class Video extends Node {
    get name() {
        return 'video'
    }

    get schema() {
        return {
            inline: true,
            attrs: {
                src: {},
                width: {
                    default: null,
                },
                height: {
                    default: null,
                },
            },
            group: 'inline',
            draggable: true,
            parseDOM: [
                {
                    tag: 'video[src]',
                    getAttrs: dom => ({
                        src: dom.getAttribute('src'),
                        width: dom.getAttribute('width'),
                        height: dom.getAttribute('height'),
                    }),
                },
            ],
            toDOM: node => ['video', node.attrs],
        }
    }

    commands({ type }) {
        return attrs => (state, dispatch) => {
            const { selection } = state;
            const position = selection.$cursor ? selection.$cursor.pos : selection.$to.pos;
            const node = type.create(attrs);
            const transaction = state.tr.insert(position, node);
            dispatch(transaction)
        }
    }

    // inputRules({ type }) {
    //     return [
    //         nodeInputRule(VIDEO_INPUT_REGEX, type, match => {
    //             const [, width, height, src] = match;
    //             return {
    //                 src,
    //                 width,
    //                 height,
    //             }
    //         }),
    //     ]
    // }
}