// Filename: main.js
require.config({
	paths: {
		"jquery": "vendor/jquery/dist/jquery",
		"underscore": "vendor/underscore/underscore",
		"backbone": "vendor/backbone/backbone",
		"bootstrap": "vendor/bootstrap/dist/js/bootstrap"
	}	
});

require(['views/app'], function(AppView) {
	new AppView;
});
