$(document).ready(function() {
    //initialize Parse
    Parse.initialize("wyONZpwmaFf4u7zRyXDHgeY0A332GZC3DMuSZvjk", "vmQqYkifJtvCWkMuhZ4gS720S1ytSmb1G7jtCRD2");

    //create the task collection
    window.tasksCollection = new TasksCollection();

    // event binder for adding tasks
    $('#create-new-task-input').on('keypress', function(e) {
        //on enter keypress, so long as the input isn't empty
        if(e.which == 13 && $(this).val() != '') {
            var newTask = {
                name: $('#create-new-task-input').val(),
            };

            // construct the task object and add it to the collection
            var aNewTask = new Task( newTask );
            tasksCollection.add( newTask );
            aNewTask.save();

            //clear the text input
            $(this).val('');

    }});




























}) // end $(document).ready