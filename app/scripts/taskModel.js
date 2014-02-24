var Task = Backbone.Model.extend({
    idAttribute: '_id',

    defaults: {
        name: 'undefined task',
        dateCreated: 0,
        completed: false,
    }
});

var TasksCollection = Backbone.Collection.extend({
    model: Task,

    comparator: 'dateCreated',

    // url: 'http://tiny-pizza-server.herokuapp.com/collections/tasks'
});