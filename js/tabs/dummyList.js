define([
    'backbone'
], function(Bakbone) {
    return Backbone.View.extend({
        id: "main",
        render: function() {
            this.$el.html('<table><tr><td>Dummy</td><td>Table</td></tr></table>');
            $(".col-xs-12").append( this.$el );
            return this
        }
    })
});