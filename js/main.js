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
           var templateBtn = '';
           var sortTabs =  _.sortBy(response, function(obj){
               return +obj.order
           });

           _.each(response, function(item){
               routes[item.id] = item.id;

           });
       var router  = new Workspace(routes);
        Backbone.history.start();
        var firstStep = _.min(response, function(obj){ return +obj.order; });
           _.each( sortTabs, function(item){
               templateBtn += '<button type="button" class="btn btn-primary">' + item.order + '</button>'
           });
           $("footer p").append(templateBtn);
           $("footer p").on("click", function(event){
               var order = $(event.target).html();
               var currentTabs = _.findWhere(sortTabs , {"order": order});
               if(currentTabs) router.navigate(currentTabs.id , {trigger : true});
           });
           var hash = window.location.hash;
           Backbone.history.on("all", function (route, router) {
               var currentPage = require(["tabs/" +window.location.hash.slice(1)] , function(View){
                   var view = new View;
                   var el = view.render();
                   $("#main").html(el.el);
               });
           });
           if(!hash){
               var firstPage = require(["./js/" +firstStep.path] , function(View){
               router.navigate(firstStep.id);
               var view = new View;
               var el = view.render();
               $("#main").html(el.el);
           });
           }
           else {
               var currentPage = require(["tabs/" +hash.slice(1)] , function(View){
                   var view = new View;
                   var el = view.render();
                   $("#main").html(el.el);
               });
           }



    });


});
