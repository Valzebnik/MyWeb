define([
    'underscore',
    'backbone',
], function(_, Backbone) {

    var ContactModel = Backbone.Model.extend({

        defaults: {
            name: '',
            email: '',
            website: '',
            message: ''
        },

        url: '/php/contact.php',

        validate: function(attributes) {
            var errors = [];
            if (!attributes.name) {
                errors.push({
                    name: 'name',
                    message: 'Missing!'
                });
            }
            if (!attributes.email) {
                errors.push({
                    name: 'email',
                    message: 'Missing!'
                });
            }
            if (!attributes.website) {
                errors.push({
                    name: 'website',
                    message: 'Missing!'
                });
            }
            if (!attributes.message) {
                errors.push({
                    name: 'message',
                    message: 'Missing!'
                });
            }
            return errors.length > 0 ? errors : false;
        },
    });

    return ContactModel;

});
