const {
	__,
} = wp.i18n;

const {
	Fragment,
} = wp.element;

const {
	registerBlockType,
} = wp.blocks;

const {
	select,
} = wp.data;

// Get theme color data.
const themeColors = select( 'core/editor' ).getEditorSettings().colors;

// Assign an empty array.
const colorPairs = [];

// Loop through theme color palette.
for ( let i = 0; i < themeColors.length - 1; i++ ) {
	colorPairs.push( themeColors[ i ] );
}

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
			<Fragment>
				<ul
					className={ className }
				>
					{ themeColors.map( ( value, index ) => {
						// Create filtered array.
						const results = colorPairs.filter( ( pair ) => ( pair.slug ) !== value.slug );

						return (
							// Outputs a list of each theme color.
							<li
								className={ value.slug }
								key={ index }
								style={ {
									backgroundColor: value.color,
									border: '2px solid #222',
									borderBottom: 'none',
								} }
							>
								{ value.name }

								<ul className={ 'color-pairs' } >

									{ results.map( ( pair, key ) => {
										return (
											<li
												key={ key }
												style={ {
													backgroundColor: pair.color,
												} }
											>
												{ pair.name }
											</li>
										);
									} ) }
								</ul>
							</li>
						);
					} ) }
				</ul>
			</Fragment>
		);
	},
	save: ( { className } ) => {
		return (
			<ul
				className={ className }
			>
				{ themeColors.map( ( value, index ) => {
					// Create filtered array.
					const results = colorPairs.filter( ( pair ) => ( pair.slug ) !== value.slug );

					return (
						// Outputs a list of each theme color.
						<li
							className={ value.slug }
							key={ index }
							style={ {
								backgroundColor: value.color,
								border: '2px solid #222',
								borderBottom: 'none',
								marginBottom: `0`,
							} }
						>
							{ value.name }

							<ul className={ 'color-pairs' } >

								{ results.map( ( pair, key ) => {
									return (
										<li
											key={ key }
											style={ {
												backgroundColor: pair.color,
											} }
										>
											{ pair.name }
										</li>
									);
								} ) }
							</ul>
						</li>
					);
				} ) }
			</ul>
		);
	},
} );

