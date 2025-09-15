import "../estilizacao/Task.css"

function Task({task}) {
    return(
        <div className="container-task">
            {task.title}
        </div>
    );
}

export default Task;