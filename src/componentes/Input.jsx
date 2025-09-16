import "../estilizacao/AddTask.css";

function Input(props) {
    return <input onChange={props.onChange} 
                  value={props.value} 
                  className="add-task-input" 
                  type="" 
                  placeholder={props.children}/>;
}

export default Input;