/*global require*/
'use strict';

require.config({

    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        jquery: {
            exports: 'jQuery'
        },
        backboneLocalstorage: {
            deps: ['backbone'],
            exports: 'Store'
        }
    },
    paths: {
        jquery: '../node_modules/jquery/dist/jquery',
        underscore: '../node_modules/underscore/underscore',
        backbone: '../node_modules/backbone/backbone',
        backboneLocalstorage: '../node_modules/backbone.localstorage/backbone.localStorage',
        text: '../node_modules/requirejs-text/text'
    }
});

require([
    'backbone',
    "underscore",
    "jquery",
    'routers/router'
], function (Backbone, _, $ , Workspace) {
       $.ajax({
        url: "tabs.json"
    }).done(function(response) {

           var routes = {};
           _.each(response, function(item){
               routes[item.id] = item.id
           });
       new Workspace(routes);
        Backbone.history.start();
        var firstStep = _.min(response, function(obj){ return +obj.order; });
           var firstPage = require(["./js/" +firstStep.path]);
           debugger;


    });


});
