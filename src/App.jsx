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
    descricao: "Calcule a distância em linha reta entre dois pontos representados no mapa, como se fossem duas praças ligadas por uma avenida reta.",
    nivel: "Fácil",
    dica: "Use o Teorema de Pitágoras se os pontos formarem um triângulo retângulo no mapa.",
    resposta: "Se os pontos estão a 3 unidades no eixo x e 4 no eixo y, a distância é 5 unidades."
  },
  {
    id: 2,
    title: "Lista 2 - Caminhos Retos e Curvos",
    descricao: "Compare a distância de um trajeto em linha reta com a distância percorrida seguindo o contorno das ruas (em formato de L).",
    nivel: "Fácil",
    dica: "Na rota em L, some os dois segmentos de reta. Na rota em linha reta, use Pitágoras.",
    resposta: "Linha reta: 5 unidades. Caminho em L: 7 unidades."
  },
  {
    id: 3,
    title: "Lista 3 - Triângulos no Caminho",
    descricao: "Dado um cruzamento em formato triangular, calcule a distância entre duas esquinas usando propriedades dos triângulos.",
    nivel: "Médio",
    dica: "Verifique se o triângulo é retângulo ou se pode aplicar semelhança de triângulos.",
    resposta: "A distância entre os pontos é 8 unidades aplicando o Teorema de Pitágoras."
  },
  {
    id: 4,
    title: "Lista 4 - Rota do Explorador",
    descricao: "Um explorador precisa percorrer várias ruas formando um quadrilátero. Calcule a distância total percorrida.",
    nivel: "Médio",
    dica: "Some os comprimentos de cada lado do polígono que representa a rota.",
    resposta: "Se os lados têm 3, 5, 3 e 5 unidades, a distância total é 16 unidades."
  },
  {
    id: 5,
    title: "Lista 5 - A Grande Jornada",
    descricao: "Calcule a menor rota possível entre dois pontos distantes do mapa, analisando diferentes trajetos e escolhendo o mais curto.",
    nivel: "Difícil",
    dica: "Compare a rota em linha reta com a soma de trechos pelas ruas. Considere que nem sempre a linha reta é viável.",
    resposta: "O menor caminho é de 12 unidades, seguindo três ruas em sequência, menor que o caminho alternativo de 13 unidades."
  }
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
        descricao: "Calcule a distância em linha reta entre dois pontos representados no mapa, como se fossem duas praças ligadas por uma avenida reta.",
        nivel: "Fácil",
        dica: "Use o Teorema de Pitágoras se os pontos formarem um triângulo retângulo no mapa.",
        resposta: "Se os pontos estão a 3 unidades no eixo x e 4 no eixo y, a distância é 5 unidades."
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
          <Route path="/:taskTitle" element={<TaskDetails tasks={tasks}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
