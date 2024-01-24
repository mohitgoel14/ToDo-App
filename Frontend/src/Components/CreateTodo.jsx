import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div class="createTodo">
      <input
        type="text"
        placeholder="Title"
        onChange={function (e) {
          const value = e.target.value;
          setTitle(e.target.value);
        }}
      />{" "}
      <input
        type="text"
        placeholder="Description"
        onChange={function (e) {
          const value = e.target.value;
          setDescription(e.target.value);
        }}
      />{" "}
      <button
        onClick={() => {
          if (title === "" && description === "") {
            alert("Fill in Inputs");
          } else {
            fetch("http://localhost:3000/todos", {
              method: "POST",
              body: JSON.stringify({
                title: title,
                description: description,
              }),
              headers: {
                "Content-type": "application/json",
              },
            }).then(async function (res) {
              const json = await res.json();
            });
          }
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
