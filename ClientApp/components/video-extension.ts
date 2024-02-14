import { Node, mergeAttributes } from '@tiptap/core'

const Video = Node.create({

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
        return ['video', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)];
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

export default Video
