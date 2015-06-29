define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/contact/contactTemplate.html',
], function($, _, Backbone, contactTemplate) {

    var ContactView = Backbone.View.extend({
        el: $("#page"),
        
        render: function() {
            $('.menu li').removeClass('active');
            $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
            this.$el.html(contactTemplate);
        }
    });
    return ContactView;
});
