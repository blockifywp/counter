<?php
/**
 * Plugin Name: Blockify Counter
 * Plugin URI:  https://blockifywp.com/blocks/counter
 * Description: Lightweight, customizable counter block for WordPress.
 * Author:      Blockify
 * Author URI:  https://blockifywp.com/
 * Version:     0.0.1
 * License:     GPLv2-or-Later
 * Text Domain: blockify
 */

declare( strict_types=1 );

namespace Blockify\Counter;

const NS = __NAMESPACE__ . '\\';
const DS = DIRECTORY_SEPARATOR;

use function add_action;
use function register_block_type;

add_action( 'after_setup_theme', NS . 'register' );
/**
 * Registers the block.
 *
 * @since 0.0.1
 *
 * @since 1.0.0
 *
 * @return void
 */
function register() {
	register_block_type( __DIR__ . '/build' );
}
