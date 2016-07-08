//Problem: User interaction doesn't provide desired results
//Solution: Add interactivity so the user can manage daily tasks

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks

//New Task List Item
var createNewTaskElement = function(taskString) {
	//Create List Item
	var listItem = document.createElement("li");

	//input (checkbox)
	var checkbox = document.createElement("input"); //checkbox
	//label
	var label = document.createElement("label");
	//input (text)
	var editInput = document.createElement("input"); // text 
	//button.edit
	var editButton = document.createElement("button");
	//button.delete
	var deleteButton = document.createElement("button");
	
	//Each element needs modifying

	//Each element needs appending
	return listItem;

}
//Add a new task

// function addTask() {
// } 
//function above is the same as below

var addTask = function() {
	console.log("Add task...");
	// Create a new list item from the text from #new-task:
	var listItem = createNewTaskElement("Some New Task");	
	//Append listItem to incompleteTasksHolder	
}

// Edit an existing task
var editTask = function() {
	console.log("Edit task...");
	//When the edit button is pressed 
	//if the class of the parent is .editMode
		//Switch from .editMode
		//Label text become the input's value
	// else
		//switch to .editMode
		//input value becomes the label's text

	//Toggle .editMode on the parent
}

// Delete an existing task
var deleteTask = function() {
	console.log("Delete task...");
	//When the delete button is pressed 
		//Remove the parent list item from the ul 

}
// Mark a task as complete
var taskCompleted = function() {
	console.log("Task Complete...");
	//When the Checkbox is checked
		//Append the task list item to the #completed tasks

}
// Mark a task as incomplete
var taskIncomplete = function() {
	console.log("Task Incomplete...");
	//When the checkbox is unchecked
	//Append the task list item to the #incompleted tasks
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
	console.log("Bind list item events");
	//select tasklistItem's children
	var checkBox = taskListItem.querySelector("input[type=checkbox]");
	var editButton = taskListItem.querySelector("button.edit");
	var deleteButton = taskListItem.querySelector("button.delete");
		
	//bind editTask to edit button 
	editButton.onclick = editTask;

	//bind deleteTask to delete button 
	deleteButton.onclick = deleteTask;

	//bind checkBoxEventHandler to checkbox
	checkBox.onchange = checkBoxEventHandler;
}

//Set the click handler to the addTask function
addButton.onclick = addTask;

// cycle over incompleteTasksHolder ul list items
for(var i =0; i < incompleteTasksHolder.children.length; i++) {
	//bind events to list item's children(taskCompleted)
	bindTaskEvents(incompleteTasksHolder.children[i].taskCompleted);

}
	

// cycle over completedTasksHolder ul list items
for(var i =0; i < completedTasksHolder.children.length; i++) {
	//bind events to list item's children(taskIncomplete)
	bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}
