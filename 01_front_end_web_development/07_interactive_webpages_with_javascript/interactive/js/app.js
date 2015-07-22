//Problem: User interaction doesn't provide desired results
//Solution: Add interactivity so the user can manage daily tasks
//Add a new task
var taskInput = document.getElementById("new-task"); //#new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder =document.getElementById("incomplete-tasks"); //unordered list #incomplete-tasks
var completedTasksHolder =document.getElementById("completed-tasks"); // #completed-tasks

var addTask = function () {
  console.log("add task")


  //When the button is pressed
  //Create a new list item with the text from #new-task:
    //input (checkbox)
    //label
    //input (text) when we edit the task
    //button .edit
    //button .delete
    //Each element will need to be modified and appended
}

var editTask = function() {
    console.log("edit task")

//Edit an existing task
  //When the edit button is pressed
    //if the class of the parent is .editMode
      //switch from .editMode
      //label text become the input's value
    //else
      //switch to editMode 
      //input value becomes the label's text

      //Toggle .editMode
}

var deleteTask = function() {
    console.log("delete task")

//Delete an existing task
  //When the delete button is pressed
    //Remove the parent list item from the unordered list
}

var taskCompleted = function() {
    console.log("complete task")

//Mark a task as complete
  //When the checkbox is checked
    //Append the task list item to the #completed-tasks
}

var taskIncomplete = function() {
    console.log("incomplete task")

//Mark a task as incomplete
  //When the checkbox is unchecked
    //append the task list item to the #incomplete-tasks
}

//WIRING

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log("Bind listitem events");
  //select taskListItem's children
  var checkbox = taskListItem.querySelector('input[type=checkbox]');
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
  //bind editTask to edit button
  editButton.onclick = editTask;

  //bind deleteTask to delete button 
  deleteButton.onclick = deleteTask;

  //bind checkBoxEventHandler to the checkbox
  checkbox.onchange = checkBoxEventHandler;

}

//Set the click handler to the addTask function

addButton.onclick = addTask;

//cycle over the incompleteTasksHolder ul list item
for(var i = 0; i < incompleteTasksHolder.children.length; i++) {
    //bind events to list item's children(taskCompleted)
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
  }

//changed incompleteTasksHolder to completedTasksHolder
for(var i = 0; i < completedTasksHolder.children.length; i++) {
  //bind events to list item's children(taskCompleted)
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
  } 