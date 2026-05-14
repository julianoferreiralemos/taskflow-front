import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("https://taskflow-back-vof8.onrender.com/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "40px",
        fontFamily: "Arial"
      }}
    >
      <h1>TaskFlow v1.0.1</h1>

      <div style={{ marginTop: "20px" }}>
        {tasks.map((task) => (
          <div
            key={task.id}
            style={{
              background: "#1e293b",
              padding: "15px",
              borderRadius: "10px",
              marginBottom: "10px"
            }}
          >
            {task.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;