
define([
    'backbone'
], function(Bakbone) {
    return Backbone.View.extend({
        id: "main",
        render: function() {
            this.$el.html('<form role="form"><div class="form-group">'+
                 '<label for="exampleInputEmail1">Email</label>'+
                '<input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">'+
               '</div>'+
                '<div class="form-group">'+
                '<label for="exampleInputPassword1">������</label>'+
                '<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">'+
                '</div>'+
                '<div class="form-group">'+
                '<label for="exampleInputFile">File input</label>'+
            '<input type="file" id="exampleInputFile">'+
                '<p class="help-block">Example block-level help text here.</p>'+
            '</div>'+
            '<div class="checkbox">'+
                '<label>'+
                '<input type="checkbox"> ��������� ����'+
            '</label>'+
            '</div>'+
            +'<button type="submit" class="btn btn-default">���������</button>'+
                +'</form>');
            $(".col-xs-12").append( this.$el );
            return this
        }
    })
});