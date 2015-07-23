//Problem: User interaction doesn't provide desired results
//Solution: Add interactivity so the user can manage daily tasks
//Add a new task
var taskInput = document.getElementById("new-task"); //#new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder =document.getElementById("incomplete-tasks"); //unordered list #incomplete-tasks
var completedTasksHolder =document.getElementById("completed-tasks"); // #completed-tasks

//New Task List Item
var createNewTaskElement = function(taskString) {
	//Create List Item
	var listItem = document.createElement("li");

	//input (checkbox)
	var checkBox = document.createElement("input"); //checkbox
	//label
	var label = document.createElement("label");
	//input (text)
	var editInput = document.createElement("input"); // text 
	//button.edit
	var editButton = document.createElement("button");
	//button.delete
	var deleteButton = document.createElement("button");
	
	//Each element needs modifying

	checkBox.type = "checkbox";
	editInput.type = "text";

	editButton.innerText = "Edit";
	editButton.className = "edit";
	deleteButton.innerText = "Delete";
	deleteButton.className = "delete";

	label.innerText = taskString;

	//Each element needs appending
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);

	return listItem;

}

//Add a new task
var addTask = function() {
	console.log("Add task...");
	// Create a new list item from the text from #new-task:
	var listItem = createNewTaskElement(taskInput.value);	
	//Append listItem to incompleteTasksHolder	
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);
}

//Edit an existing task
var editTask = function() {
    console.log("edit task");

    var listItem = this.parentNode;

    var editInput = listItem.querySelector("input[type=text");
    var label = listItem.querySelector("label");
 
 	var containsClass = listItem.classList.contains("editMode");
    
    //if the class of the parent is .editMode
	if(containsClass) {
      //switch from .editMode
      //label text become the input's value
      label.innerText = editInput.value;
   } else {
      //switch to editMode 
      //input value becomes the label's text
      editInput.value = label.innerText;
	}
      //Toggle .editMode on the list item
      listItem.classList.toggle("editMode");
}

var deleteTask = function() {
    console.log("delete task");
    
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    
    //Remove the parent list item from the unordered list
    ul.removeChild(listItem);
}

var taskCompleted = function() {
    console.log("Task Complete...")
    //Append the task list item to the #completed-tasks
    var listItem = this.parentNode
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete)
}

var taskIncomplete = function() {
    console.log("incomplete task")
    //append the task list item to the #incomplete-tasks
    var listItem = this.parentNode
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
}

//WIRING

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log("Bind listitem events");
  //select taskListItem's children
  var checkBox = taskListItem.querySelector('input[type=checkbox]');
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
  //bind editTask to edit button
  editButton.onclick = editTask;

  //bind deleteTask to delete button 
  deleteButton.onclick = deleteTask;

  //bind checkBoxEventHandler to the checkbox
  checkBox.onchange = checkBoxEventHandler;

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