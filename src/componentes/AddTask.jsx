import {useState} from "react";
import Input from "./Input";
import Button from "./Button";
import "../estilizacao/AddTask.css"

function AddTask() {
    const [inputData, setInputData] = useState("");

    const handleInputChange = (e) => {
        return setInputData(e.target.value);
    }

    return(
        <div className="add-task-container">
            <div className="add-task-input"> 
                <Input onChange={handleInputChange} value={inputData}>Nova Lista</Input> </div>
            <div className="add-task-button"> <Button>Adicionar</Button> </div>
        </div>
    )
}

export default AddTask;