var PrintedTaskView = Backbone.View.extend({
    tagName: 'div',
    className: 'task-wrapper',

    template: _.template($('#printed-task-template').text()),

    events: {

    },

    initialize: function() {
        $('.printed-task-container').append( this.el );

        this.listenTo(this.model, 'change', this.render);
    },

    render: function() {
        var renderedTemplate = this.template( this.model.attributes );

        this.$el.html( renderedTemplate );
    }

});




