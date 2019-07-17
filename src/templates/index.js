
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

registerBlockType( 'gput/scaffolding', {
	title: 'GPUT Scaffolding',
	icon: 'align-left',
	category: 'layout',
	attributes: {
	},
	edit( { className } ) {
		return (
			<div className={ className }>
				<InnerBlocks
					layouts={ [
						{
							name: 'inner',
							label: __( 'Inner Content', 'gput' ),
							icon: 'columns',
						},
					] }
					templateLock={ 'all' }
					template={
						[
							// List each block.
							[ 'core/heading', {
								placeholder: __( 'Heading 2 Example', 'gput' ),
								default: __( 'Heading 2 Value', 'gput' ),
							} ],
						]
					}
				/>
			</div>
		);
	},
	save( { className } ) {
		return (
			<div className={ className }>
				<InnerBlocks.Content />
			</div>
		);
	},
} );
