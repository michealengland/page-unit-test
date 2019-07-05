<?php
/**
 * Plugin Name: Gutenberg Page Unit Test
 * Plugin URI:  https://example.com/plugins/the-basics/
 * Description: Create block layouts for Gutenberg.
 * Version:     0.0.1
 * Author:      Mike England
 * Author URI:  https://michealengland.com/
 * License:     GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: gput
 * Domain Path: /languages
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

// Enqueue files for the editor and front-end.
include_once( plugin_dir_path( __FILE__ ) . '/includes/enqueue-scripts.php' );

// During plugin activation.
include_once( plugin_dir_path( __FILE__ ) . '/includes/notifications.php' );

// Generate scaffolding page.
include_once( plugin_dir_path( __FILE__ ) . '/includes/generate-scaffold.php' );


/**
 * Delete generated pages when plugin is deactivated.
 *
 * @author Mike England <mike.england@webdevstudios.com>
 */
function deactivate_plugin() {

	// Scaffolding page strings.
	$title = 'GPUT Scaffolding';
	$slug  = 'gput-page-unit-scaffolding';

	// Escape function if page not found.
	if( ! post_exists( $title ) ) {
		return;
	}

	// Vars.
	$page = get_page_by_title( $title ); // Get post object.
	$scaffold_page_id = $page->ID; // Get post id.
	$scaffold_page_slug = $page->post_name; // Get post slug.

	// Completely remove page during deactivation.
	if( $scaffold_page_slug === $slug ) {
		wp_delete_post( $scaffold_page_id, true );
	}
}

register_deactivation_hook( __FILE__, 'deactivate_plugin' );