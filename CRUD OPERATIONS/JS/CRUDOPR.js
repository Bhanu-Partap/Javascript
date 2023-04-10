let addbtn = document.getElementById("button-addon2");
addbtn.addEventListener("click", addchapter);

let parentlist = document.getElementById("parent-list");

function addchapter(e) {
  if (parentlist.children[0].className == "emptyMsg") {
    parentlist.children[0].remove();
  }
  let currentBtn = e.currentTarget;
  let currentInput = currentBtn.previousElementSibling;
  let currentChapter = currentInput.value;

  let newlist = document.createElement("li");
  newlist.className = ("list-group-item d-flex justify-content-between");

  //   newlist.textContent = currentInput.value;
  newlist.innerHTML = `<h3 class="flex-grow-1">${currentChapter} </h3> 
  <button class="btn btn-warning mx-3">Edit</button>
  <button class="btn btn-danger" onclick="removechapter(this)">Remove</button>`;
  
  parentlist.appendChild(newlist);
}

// remove the list function

function removechapter(currentElement) {
  currentElement.parentElement.remove();
  if (parentlist.children.length <= 0) {
    let newEmptymsg = document.createElement("h3");
    newEmptymsg.classList.add("emptyMsg");
    newEmptymsg.textContent = " Nothing is here please add a chappter";
    // newEmptymsg.className = ("d-flex justify-content-center");
    parentlist.appendChild(newEmptymsg);
  }
}
