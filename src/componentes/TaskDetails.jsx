import Button from './Button'
import { useNavigate, useParams } from "react-router-dom";

import '../estilizacao/TaskDetails.css'

const TaskDetails = ({tasks}) => { 
    const params = useParams();
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate(-1)
    }

    // Encontrar a lista correta
    const task = tasks.find((e) => e.title === params.taskTitle);
    
    return (
        <>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p><h3>Descrição:</h3> {task.descricao}</p>
                <p><h3>Nível de dificuldade:</h3> {task.nivel}</p>
                <p><h3>Dica:</h3> {task.dica}</p>
                <p><h3>Resposta:</h3> {task.resposta}</p>
            </div>
            
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
        </>
    )
}

export default TaskDetails;