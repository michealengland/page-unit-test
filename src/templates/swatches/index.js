const {
	__,
} = wp.i18n;

const {
	registerBlockType,
} = wp.blocks;

const {
	select,
} = wp.data;

// Get theme color data.
const themeColors = select( 'core/editor' ).getEditorSettings().colors;

registerBlockType( 'gput/swatch', {
	title: __( 'Theme Swatches' ),
	description: __( 'Display registered swatches.' ),
	category: __( 'widgets' ),
	attributes: {
		swatches: {
			type: 'string',
			source: 'html',
			selector: 'div',
		},
	},
	edit: ( { className } ) => {
		return (
			<ul
				className={ className }
			>
				{ themeColors.map( ( value, index ) => {
					return (
						<li
							className={ value.slug }
							key={ index }
							style={ {
								backgroundColor: value.color,
							} }
						>
							{ value.name }
						</li>
					);
				} ) }
			</ul>
		);
	},
	save: ( { className } ) => {
		return (
			<ul
				className={ className }
			>
				{ themeColors.map( ( value, index ) => {
					return (
						<li
							className={ value.slug }
							key={ index }
							style={ {
								backgroundColor: value.color,
							} }
						>
							{ value.name }
						</li>
					);
				} ) }
			</ul>
		);
	},
} );

