//Problem: User interaction doesn't provide desired results
//Solution: Add interactivity so the user can manage daily tasks

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTaskHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks

//Add a new task


// function addTask() {
// } 

//function above is the same as below
var addTask = function() {
	// When the button is pressed
	// Create a new list item from the text from #new-task:
		//input (checkbox)
		//label
		//input (text)
		//button.edit
		//button.delete
		//Each elements, needs modifed and appended
}

// Edit an existing task
var editTask = function() {
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
	//When the delete button is pressed 
		//Remove the parent list item from the ul 

}
// Mark a task as complete
var taskCompleted = function() {
	//When the Checkbox is checked
		//Append the task list item to the #completed tasks

}
// Mark a task as incomplete
var taskIncomplete = function() {
	//When the checkbox is unchecked
	//Append the task list item to the #incompleted tasks
}