var PrintedTask = Backbone.View.extend({
    tagName: 'div',
    className: 'printed-task-wrapper',

    template: _.template($('#printed-task-template').text()),

    events: {

    },

    initialize: function() {
        $('.printed-task-container').append( this.el ); //get the empty tag into the DOM

        this.render();

        this.listenTo(this.model, 'change', this.render); //if the model itself changes, this will be updated
    },

    render: function() {
        var renderedTemplate = this.template( this.model.attributes );

        this.$el.html( renderedTemplate );
    },

});




