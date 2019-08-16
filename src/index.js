//////////////////////////////////
// Class: TODO
/////////////////////////////////

class ToDo {
  constructor() {
    this.items = ["item1", "item2"];
    this.completedItems = ["completed item1"];
  }

  // Add new todo item
  add() {
    let textValue = document.getElementById("text");
    if (textValue.value === "") {
      alert("cant be empty");
    } else {
      this.items.push(textValue.value);
      textValue.value = ""; // clear form
      todo.list(); // reload list
      todo.length(); // reload list length
    }
  }

  // Detect length of todo items
  length() {
    let itemLength = this.items.length;
    document.getElementById("length").innerHTML = itemLength;
  }

  // Show uncompleted todo items
  list() {
    let items = (document.getElementById("items").innerHTML = this.items
      .map(function(item, index) {
        return (
          "<li>" +
          item +
          ' <button onclick="todo.complete(' +
          index +
          ')">Complete</button></li>'
        );
      })
      .join(""));
    todo.length(); // rerun length
  }

  // Mark a todo item as complete
  complete(index) {
    this.completedItems.push(this.items[index]);
    this.items.splice(index, 1);
    let item = this.items[index];
    todo.list();
    todo.listCompleted();
  }

  // Show completed todo items
  listCompleted() {
    let completedList = document.getElementById("completed-list");
    let completedTitle = document.getElementById("completed-title");

    completedList.innerHTML = this.completedItems
      .map(function(item) {
        return '<li class="item-completed">' + item + "</li>";
      })
      .join("");

    if (this.completedItems.length >= 1) {
      completedTitle.innerHTML = "Completed Items";
    }
  }
}

// Init
const todo = new ToDo();

// get init list
todo.list();

// list completed items
todo.listCompleted();

// bind add function to button
document.getElementById("btn-add").addEventListener("click", function() {
  todo.add();
});