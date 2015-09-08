/**
 * Created by ����� on 08.09.2015.
 */
define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';
    var Model = Backbone.Model.extend({
        defaults: {
            title: '',
            order: "",
            path: "",
            id : ""
        }
    });

    return Model;
});