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
                    message: 'missing!'
                });
            }
            if (!attributes.email) {
                errors.push({
                    name: 'email',
                    message: 'missing!'
                });
            }
            else if (!this.validateEmail(attributes.email)) {
                errors.push({
                    name: 'email',
                    message: 'invalid!'
                });
            }
            if (!attributes.message) {
                errors.push({
                    name: 'message',
                    message: 'missing!'
                });
            }
            return errors.length > 0 ? errors : false;
        },

        validateEmail: function(email) {
            var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            return re.test(email);
        },

    });

    return ContactModel;

});
