<?php
/**
 * Display success message upon plugin activation.
 *
 * @author Mike England <mike.england@webdevstudios.com>
 */
function gput_plugin_activate__success() {
	?>
	<div class="notice notice-success is-dismissible">
		<p><?php _e( 'Your scaffolding page has been generated.', 'gput' ); ?> <a href="#"><?php _e( 'View GPUT Scaffolding', 'gput' ); ?></a></p>
	</div>
	<?php
}
add_action( 'admin_notices', 'gput_plugin_activate__success' );