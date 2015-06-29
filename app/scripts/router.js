// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/home/HomeView',
  'views/gallery/GalleryView',
  'views/contact/ContactView'
], function($, _, Backbone, HomeView, GalleryView, ContactView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'gallery': 'showGallery',
      'contact': 'showContact',
      
      // Default
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;
    
    app_router.on('route:showGallery', function(){
   
        var galleryView = new GalleryView();
        galleryView.render();
    });
    
    app_router.on('route:showContact', function () {
    
        var contactView = new ContactView();
        contactView.render();
    });

    app_router.on('route:defaultAction', function (actions) {
     
        var homeView = new HomeView();
        homeView.render();
    });    

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
