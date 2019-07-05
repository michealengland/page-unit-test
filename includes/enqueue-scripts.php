<?php

/**
 * Enqueue block editor only JavaScript and CSS
 *
 * @author Mike England <mike.england@webdevstudios.com>
 *
 */
function gput_blocks_editor_scripts() {

	$editorJSPath = '/js/editor.js';

	// Enqueue JS.
	wp_enqueue_script(
		'gput-blocks-js',
		plugins_url( $editorJSPath, __FILE__ ),
		[ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor' ],
		filemtime( plugin_dir_path( __FILE__ ) . $blockPath )
	);
}
add_action( 'enqueue_block_editor_assets', 'gput_blocks_editor_scripts' );


/**
 * Enqueue front-end JS.
 *
 * @author Mike England <mike.england@webdevstudios.com>
 */
function gput_blocks_scripts()
{
	// file paths.
	$frontendJSPath = '/js/frontend.js';

	if( !is_admin() ) {
		// Enqueue the bundled block JS file
		wp_enqueue_script(
			'gput-blocks-frontend',
			plugins_url( $frontendJSPath, __FILE__ ),
			[],
			filemtime( plugin_dir_path( __FILE__ ) . $frontendJSPath )
		);
	}
}
add_action( 'enqueue_block_assets', 'gput_blocks_scripts' );