import React from "react";
import "./notes.css";

const Notes = () => {
  const inputbox = document.getElementById("input_box") as HTMLInputElement;

  const listcontainer = document.getElementById(
    "list-container"
  ) as HTMLElement;

  function loadData(): void {
    const data: string | null = localStorage.getItem("todoList");
    if (data) {
      listcontainer.innerHTML = data;
    }
  }

  // Save the data to local storage
  function saveData(): void {
    localStorage.setItem("todoList", listcontainer.innerHTML);
  }

  function addTask(): void {
    if (inputbox.value === "") {
      alert("You must have to write something");
    } else {
      let li: HTMLLIElement = document.createElement("li");
      li.innerHTML = inputbox.value;
      listcontainer.appendChild(li);
      let span: HTMLSpanElement = document.createElement("span");

      span.innerHTML = "\u00d7";

      li.appendChild(span);
    }
    inputbox.value = "";
    saveData();
  }

  listcontainer.addEventListener(
    "click",
    function (e: MouseEvent): void {
      if ((e.target as HTMLElement).tagName === "LI") {
        (e.target as HTMLElement).classList.toggle("checked");
        saveData();
      } else if ((e.target as HTMLElement).tagName === "SPAN") {
        (e.target as HTMLElement).parentElement?.remove();
        saveData();
      }
    },
    false
  );

  return (
    <div className="container">
      <div className="todo">
        <h2>
          To-Do List <img src="icon.png" alt="icon" />
        </h2>
        <div className="row">
          <input type="text" id="input_box" placeholder="Add your task" />
          <button onClick={addTask}>Add</button>
        </div>

        <ul id="list-container">
          {/* Ensure each list item has a unique key */}
          {/* Example: <li key={someUniqueKey}></li> */}
        </ul>
      </div>
    </div>
  );
};

export default Notes;
