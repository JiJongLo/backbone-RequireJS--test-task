/**
 * Created by ¿Î ‡ÿ on 08.09.2015.
 */
define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';
    var Model = Backbone.Model.extend({
        defaults: {
            title: '',
            completed: false
        }
    });

    return Model;
});