<?php

/**
 * Enqueue block editor only JavaScript and Editor CSS
 *
 * @author Mike England <mike.england@webdevstudios.com>
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

	wp_enqueue_style(
		'gput-editor-styles',
		plugins_url( '../build/editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . '../build/editor.css' )
	);
}
add_action( 'enqueue_block_editor_assets', 'gput_blocks_editor_scripts' );

/**
 * Enqueue Frontend Styles
 *
 * @author Mike England <mike.england@webdevstudios.com>
 *
 */
function gput_register_block_styles() {

	wp_enqueue_style(
		'gput-styles',
		plugins_url( '../build/style.css', __FILE__ ),
		array( ),
		filemtime( plugin_dir_path( __FILE__ ) . '../build/style.css' )
	);
}
add_action( 'init', 'gput_register_block_styles' );