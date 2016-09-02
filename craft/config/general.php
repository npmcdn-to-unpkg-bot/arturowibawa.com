<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(

	'*' => array(
		'omitScriptNameInUrls' => true,
	),

	'arturowibawa.dev' => array (
		'devMode' => true,
		'cpTrigger' => 'login',
		'environmentVariables' => array(
			'assetsBaseUrl' => 'http://arturowibawa.dev/images/',
			'assetsBasePath' => '/Users/arturowibawa/Sites/arturowibawa/html/images/',
		)
	),

	'arturowibawa.com' => array (
		// 'devMode' => true,
		'cpTrigger' => 'login',
		'environmentVariables' => array(
			'assetsBaseUrl' => 'http://arturowibawa.com/images/',
			'assetsBasePath' => 'http://arturowibawa.com/html/images/',
		)
	)

);
