const todoTextID = document.getElementById("todoTextId");
var todoArray = [];
const div = document.createElement("div");
const div2 = document.createElement("div");

document.body.appendChild(div);

const createNewTodo = (value) => {
  const newTodo = {
    id: todoArray?.length ? todoArray[todoArray.length - 1].id + 1 : 1,
    value: value,
    done: false,
  };
  todoArray = [...todoArray, newTodo];
};

const refreshList = () => {
  div.innerHTML = "";

  todoArray.forEach((element) => {
    const div3 = document.createElement("div");
    document.body.appendChild(div3);
    div3.setAttribute("style", "display:flex;");
    div.appendChild(div3);
    const p = document.createElement("p");
    const checkbox = document.createElement("input");
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.setAttribute(
      "style",
      "height: 25px; margin-top: 13px; margin-left: 50px"
    );
    deleteButton.setAttribute("onclick", `deleteButton(${element.id})`);
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute(
      "onchange",
      `doneButton(${element.id},${!element.done})`
    );
    checkbox.setAttribute("style", "float: left;");
    if (element.done) {
      checkbox.checked = true;
      p.innerHTML = "<s>" + element.value + "</s>";
    } else {
      checkbox.checked = false;
      p.innerText = element.value;
    }
    checkbox.innerText = "Done!";

    div3.appendChild(checkbox);
    div3.appendChild(p);
    div3.appendChild(deleteButton);
  });
  if (todoArray.length >= 1) {
    document.body.appendChild(div2);
    div2.innerHTML = "";

    const allButton = document.createElement("button");
    const activeButton = document.createElement("button");
    const completedButton = document.createElement("button");
    allButton.innerText = "All";
    activeButton.innerText = "Active";
    completedButton.innerText = "Completed";
    // div2.appendChild(allButton);
    // div2.appendChild(activeButton);
    // div2.appendChild(completedButton);
  }
};

const doneButton = (id, done) => {
  const selectedTodo = todoArray.find((todo) => todo.id === id);
  selectedTodo.done = done;
  refreshList();
};

const submitFunction = () => {
  createNewTodo(todoTextID.value);
  todoTextID.value = "";
  refreshList();
  return false;
};

const deleteButton = (id) => {
  const selectedTodo = todoArray.find((todo) => todo.id === id);
  const index = todoArray.indexOf(selectedTodo);
  todoArray.splice(index, 1);
  refreshList();
};
