const input = document.querySelector("#todoInput");
const ul = document.querySelector(".list");
//The DOM Node is an abstract base class upon which many other --DOM API objects-- are based, thus letting those object types to be used similarly
//node represents part of the document (e.g. an element, text string, or comment)
input.addEventListener("keyup", function (e) {
  // This event will be executed, only if the "enter" key is pressed.
  if (e.which == 13) {
    addnewTask(e.target.value);
    this.value = "";
  }
});
//changes 2
//changes to try git pull 
//Function that will add the new tasks to "ul" parent element
function addnewTask(value) {
  let newli = document.createElement("li");
  let deleteBtn = document.createElement("span");
  newli.classList.add("task");
  newli.innerText = value;
  deleteBtn.innerText = "X";
  newli.append(deleteBtn);
  ul.append(newli);
}

// "click" event that will indicate the task's completion.
// Event delegation allow us to fire for all descendants matching a selector, whether those descendants exist now or are added in the future.
ul.addEventListener("click", function (e) {
  if (e.target.nodeName == "LI") {
    e.target.parentNode.childNodes.forEach(function (val) {
      val.classList.remove("done");
    });
    e.target.classList.add("done");
  }
  // Deleting the corresponding task
  else if (e.target.nodeName == "SPAN") {
    e.stopPropagation();
    e.target.parentNode.remove();
  }
});
