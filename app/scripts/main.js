$(document).ready(function() {

    //create the task collection
    window.tasksCollection = new TasksCollection();

    tasksCollection.on('add',function(newTask){
        console.log('ADD EVENT!')
        new PrintedTaskView({model: newTask})
    });

    $('#create-new-task-input').on('keypress', function(e) {
        //on enter keypress, so long as the input isn't empty
        if(e.which == 13 && $(this).val() != '') {
            var newTask = {
                name: $('#create-new-task-input').val(),
                dateCreated: _.now()
            };

            // construct the task object and add it to the collection
            var aNewTask = new Task( newTask );
            tasksCollection.add( newTask );
            // newTask.save();

            //clear the text input
            $(this).val('');

    }});

































}) // end $(document).ready