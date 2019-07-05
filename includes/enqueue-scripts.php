<?php

/**
 * Enqueue block editor only JavaScript and CSS
 *
 * @author Mike England <mike.england@webdevstudios.com>
 *
 */
function gput_blocks_editor_scripts() {

	$editorJSPath = '../build/index.js';

	// Enqueue editor JS.
	wp_enqueue_script(
		'gput-blocks-js',
		plugins_url( $editorJSPath, __FILE__ ),
		[ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor' ],
		filemtime( plugin_dir_path( __FILE__ ) . $blockPath )
	);
}
add_action( 'enqueue_block_editor_assets', 'gput_blocks_editor_scripts' );
