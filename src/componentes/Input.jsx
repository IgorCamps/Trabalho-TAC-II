import "../estilizacao/AddTask.css";
import "../estilizacao/Input.css";

function Input(props) {
    return <input onChange={props.onChange} value={props.value} className="input" type="text" placeholder={props.children}/>;
}

export default Input;