import { useState } from "react";
import Tasks from "./componentes/Tasks";
import AddTask from "./componentes/AddTask";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Lista 1 - Ponto de Partida",
      completed: false
    },
    {
      id: 2,
      title: "Lista 2 - Caminhos Retos e Curvos",
      completed: false
    },
    {
      id: 3,
      title: "Lista 3 - Triângulos no Caminho",
      completed: false
    },
    {
      id: 4,
      title: "Lista 4 - Rota do Explorador",
      completed: false
    },
  ]);

  return(
    <>
      <div className="container">
        <AddTask/>
        <Tasks tasks={tasks} />
      </div>
      
    </>
  )
}

export default App;