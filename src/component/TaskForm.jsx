import {useState} from "react";
import "../styles/TaskForm.css"

export default function TaskForm(props){

    //state
    const [newTask, setNewTask] = useState("");
    const handleAdd = props.handleAdd;

    //component
    const handleSubmit = (e) => {
        e.preventDefault();

        const id = new Date().getTime();
        const name = newTask;
        const task = {id : id, name : name};
        handleAdd(task);
        setNewTask("");
    }

    const handleAddButton = (e) =>{
        setNewTask(e.target.value);
    }

    //render
    return (
        <form action="submit" onSubmit={handleSubmit}>
            <input type="text" placeholder={"rajouter une tache"} value={newTask} onChange={handleAddButton}/>
            <button className="add-button">+</button>
        </form>
    )
}