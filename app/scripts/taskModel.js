// var Task = Backbone.Model.extend({
//     idAttribute: '_id',

//     defaults: {
//         name: 'undefined task',
//         dateCreated: 0,
//         completed: false,
//     }
// });

// var TasksCollection = Backbone.Collection.extend({
//     model: Task,

//     comparator: 'dateCreated',
// });


// var Burger = Parse.Object.extend("Burger")

// var BurgersCollection = Parse.Collection.extend({
//   model: Burger
// })

// A complex subclass of Parse.Object
// var Monster = Parse.Object.extend("Monster", {
//   // Instance methods
//   hasSuperHumanStrength: function () {
//     return this.get("strength") > 18;
//   },
//   // Instance properties go in an initialize method
//   initialize: function (attrs, options) {
//     this.sound = "Rawr"
//   }
// }, {
//   // Class methods
//   spawn: function(strength) {
//     var monster = new Monster();
//     monster.set("strength", strength);
//     return monster;
//   }
// });



var Task = Parse.Object.extend("Task", {
    //instance props/methods
    defaults: {

        name : 'undefined task',
        completed : false
    }
},  {
    //class methods
    test: function() {
        console.log('A constructor method!')
    }
});

var TasksCollection = Parse.Collection.extend({
    model: Task,

    initialize: function () {
        this.on('add', function(newTask) {
            console.log('a task was added to the collection!')
            new PrintedTaskView({model: newTask})
        });

        this.fetch();
    }
});




