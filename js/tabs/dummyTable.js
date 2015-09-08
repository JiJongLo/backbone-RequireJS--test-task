/**
 * Created by ¿Î ‡ÿ on 08.09.2015.
 */
define([
    'backbone'
], function(Bakbone) {
    return Backbone.View.extend({
        render: function() {
            this.$el.html('<table><tr><td>Dummy</td><td>Table</td></tr></table>');
        }
    })
});