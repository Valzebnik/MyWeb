// Filename: main.js
require.config({
	paths: {
		jquery: "vendor/jquery/dist/jquery",
		underscore: "vendor/underscore/underscore",
		backbone: "vendor/backbone/backbone",
		bootstrap: "vendor/bootstrap/dist/js/bootstrap",
        templates: '../templates',
	}	
});

require([
    // Load our app module and pass it to our definition function
    'app',

], function(App) {
    // The "app" dependency is passed in as "App"
    // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
    App.initialize();
});
