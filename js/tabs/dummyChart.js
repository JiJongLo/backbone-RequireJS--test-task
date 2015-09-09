
define([
    'backbone'
], function(Bakbone) {
    return Backbone.View.extend({
        render: function() {
            this.$el.html('<div class="row">'+
                '<div class="col-md-6  col-lg-6"><form role="form"><div class="form-group">'+
                 '<label for="exampleInputEmail1">Email</label>'+
                '<input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">'+
               '</div>'+
                '<div class="form-group">'+
                '<label for="exampleInputPassword1">Пароль</label>'+
                '<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">'+
                '</div>'+
                '<div class="form-group">'+
                '<label for="exampleInputFile">File input</label>'+
            '<input type="file" id="exampleInputFile">'+
                '<p class="help-block">Example block-level help text here.</p>'+
            '</div>'+
            '<div class="checkbox">'+
                '<label>'+
                '<input type="checkbox"> Проверить меня'+
            '</label>'+
            '</div>'+
             '<button type="submit" class="btn btn-default">Отправить </button>'
                +'</form></div></div>');

            return this
        }
    })
});