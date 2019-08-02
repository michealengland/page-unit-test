
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

registerBlockType( 'gput/scaffolding', {
	title: 'GPUT Scaffolding',
	icon: 'align-left',
	category: 'layout',
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
							[ 'gput/swatch' ],
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
