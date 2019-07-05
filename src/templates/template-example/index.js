// Example from https://developer.wordpress.org/block-editor/developers/block-api/block-templates/
const el = wp.element.createElement;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

const BLOCKS_TEMPLATE = [
    [ 'core/image', {} ],
    [ 'core/paragraph', { placeholder: 'Image Details' } ],
];

registerBlockType( 'gput/test-template', {
    title: 'GPUT Test Template',
    category: 'widgets',
    edit: ( props ) => {
        return el( InnerBlocks, {
            template: BLOCKS_TEMPLATE,
            templateLock: false
        });
    },
    save: ( props ) => {
        return el( InnerBlocks.Content, {} );
    },
});