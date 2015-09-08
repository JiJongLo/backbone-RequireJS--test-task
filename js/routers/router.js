/**
 * Created by ¿Î ‡ÿ on 08.09.2015.
 */
define([
    'jquery',
    "underscore",
    'backbone'
], function ($, _, Backbone) {
    'use strict';
    var Router = Backbone.Router.extend({
        initialize: function(options) {
            var self = this;
            _.each(options , function(i){
               self.route(i , "open");
            });
        },
        open : function (action){
            debugger;
        }

    });
    return Router;
});