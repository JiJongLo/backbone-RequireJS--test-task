define([
    'backbone'
], function(Bakbone) {
    return Backbone.View.extend({
        id: "main",
        render: function() {
            this.$el.html('<table><tr><td>Dummy</td><td>Table</td></tr></table>');
        }
    })
});