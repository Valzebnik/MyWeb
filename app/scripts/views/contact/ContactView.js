define([
    'jquery',
    'underscore',
    'backbone',
    'model/ContactModel',
    'text!templates/contact/contactTemplate.html',
], function($, _, Backbone, ContactModel, contactTemplate) {

    var ContactView = Backbone.View.extend({
        el: $("#page"),

        events: {
            'click #submit': 'submitClicked'
        },

        render: function() {
            $('.menu li').removeClass('active');
            $('.menu li a[href="' + window.location.hash + '"]').parent().addClass('active');
            this.$el.html(contactTemplate);
        },

        submitClicked: function(e) {
            e.preventDefault();

            this.hideErrors();

            var model = new ContactModel();
            model.set({
                name: this.$('#name').val(),
                email: this.$('#email').val(),
                website: this.$('#website').val(),
                message: this.$('#message').val()
            });

            var me = this;
            model.on('invalid', function(model, error) {
                me.showErrors(model.validationError);
            });

            model.save();
        },

        showErrors: function(errors) {
            _.each(errors, function(error) {
                var controlGroup = this.$('.' + error.name);
                controlGroup.addClass('error');
                controlGroup.find('.help-inline').text(error.message);
            }, this);
        },

        hideErrors: function() {
            this.$('.control-group').removeClass('error');
            this.$('.help-inline').text('');
        }
    });
    return ContactView;
});
