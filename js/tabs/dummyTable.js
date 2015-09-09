/**
 * Created by АлКаШ on 08.09.2015.
 */
define([
    'backbone'
], function(Bakbone) {
    return Backbone.View.extend({
        render: function() {
            this.$el.html('<div class="checkbox">'+
                '<label>'+
                '<input type="checkbox" value="">'+
                'Первая опция&mdash;выбирайте его, если вам нравится этот пункт'+
            '</label>'+
            '</div>'+

            '<div class="radio">'+
                '<label>'+
                '<input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>'+
            'Первая опция&mdash;выбирайте его, если вам нравится этот пункт'+
            '</label>'+
            '</div>'+
            '<div class="radio">'+
                '<label>'+
                '<input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">'+
                'Вторая опция - это несколько другое, и она отменяет выбор первой опции'+
            '</label>'+
            '</div>');
            return this;
        }
    })
});