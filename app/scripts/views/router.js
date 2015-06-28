// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/home/HomeView',
  'views/gallery/GalleryView',
  'views/videos/VideosView',
  'views/contact/ContactView'
], function($, _, Backbone, HomeView, GalleryView, VideosView, ContactView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'gallery': 'showGallery',
      'videos': 'showVideos',
      'contact': 'showContact',
      
      // Default
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;
    
    app_router.on('route:showGallery', function(){
   
        // Call render on the module we loaded in via the dependency array
        var galleryView = new GalleryView();
        galleryView.render();

    });

    app_router.on('route:showVideos', function () {
    
        // Like above, call render but know that this view has nested sub views which 
        // handle loading and displaying data from the GitHub API  
        var videosView = new VideosView();
    });
    
    app_router.on('route:showContact', function () {
    
        // Like above, call render but know that this view has nested sub views which 
        // handle loading and displaying data from the GitHub API  
        var contactView = new ContactView();
        contactView.render();
    });

    app_router.on('route:defaultAction', function (actions) {
     
       // We have no matching route, lets display the home page 
        var homeView = new HomeView();
        homeView.render();
    });

    // Unlike the above, we don't call render on this view as it will handle
    // the render call internally after it loads data. 
    var footerView = new FooterView();

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
