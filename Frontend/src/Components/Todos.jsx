export function Todos({ todos }) {
  const handleCompleteClick = (id) => {
    fetch("http://localhost:3000/completed", {
      method: "PUT",
      body: JSON.stringify({
        id: id,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then(async function (res) {
        const json = await res.json();
      })
      .catch((error) => {
        console.error("Error updating todo: ", error);
      });
  };
  const handleDeleteClick = (id) => {
    fetch("http://localhost:3000/delete", {
      method: "PUT",
      body: JSON.stringify({
        id: id,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then(async function (res) {
        const json = await res.json();
      })
      .catch((errror) => {
        console.error("Error Deleting todo: ", error);
      });
  };

  return (
    <div id = "allTodos">
      {todos.map(function (todo) {
        return (
          <div id="todo" key={todo._id}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button onClick={() => handleCompleteClick(todo._id)}>
              {todo.completed ? "Mark Undone" : "Mark Done"}
            </button>
            <button onClick={() => handleDeleteClick(todo._id)}>
              Delete Todo
            </button>
          </div>
        );
      })}
    </div>
  );
}
