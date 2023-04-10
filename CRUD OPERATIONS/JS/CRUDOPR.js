let addbtn = document.getElementById("button-addon2");
addbtn.addEventListener("click", addchapter);

function addchapter(e) {
  let currentBtn = e.currentTarget;
  let currentInput = currentBtn.previousElementSibling;
    let currentChapter = currentInput.value;


  let newlist = document.createElement('li');
  newlist.classList.add("list-group-item");
//   newlist.textContent = currentInput.value;
  newlist.innerHTML =`<h3 class="flex-grow-1">${} </h3> 
  <button class="btn btn-warning mx-3">Edit</button>
  <button class="btn btn-danger">Remove</button>`

  let parentlist = document.getElementById("parent-list");
  parentlist.appendChild(newlist);
}
    