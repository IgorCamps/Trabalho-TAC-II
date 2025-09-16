import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./componentes/Header";
import Tasks from "./componentes/Tasks";
import AddTask from "./componentes/AddTask";
import TaskDetails from "./componentes/TaskDetails";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Lista 1 - Ponto de Partida",
      completed: false,
    },
    {
      id: 2,
      title: "Lista 2 - Caminhos Retos e Curvos",
      completed: false,
    },
    {
      id: 3,
      title: "Lista 3 - Triângulos no Caminho",
      completed: false,
    },
    {
      id: 4,
      title: "Lista 4 - Rota do Explorador",
      completed: false,
    },
    {
      id: 5,
      title: "Lista 5 - A Grande Jornada",
      completed: false,
    },
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };

      return task;
    });

    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTasks(newTasks);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTask handleTaskAddition={handleTaskAddition} />
                <Tasks
                  tasks={tasks}
                  handleTaskClick={handleTaskClick}
                  handleTaskDeletion={handleTaskDeletion}
                />
              </>
            }
          />
        </Routes>

        <Routes>
          <Route path="/:taskTitle" element={<TaskDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
