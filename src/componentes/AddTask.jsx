import { useState } from "react";

import Input from "./Input";
import Button from "./Button";

import "../estilizacao/AddTask.css";

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddTaskClick = () => {
    if (inputData.length > 4) {
      handleTaskAddition(inputData);
      setInputData("");
    }
  };

  return (
    <div className="add-task-container">
      <Input onChange={handleInputChange} value={inputData}>Nova Lista</Input>

      <div className="add-task-button">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;